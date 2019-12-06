"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var dialog_1 = require("@angular/material/dialog");
var api_service_1 = require("../../_services/api.service");
var dialog_delete_component_1 = require("../../dialogs/dialog-delete.component");
var angular_alert_module_1 = require("angular-alert-module");
var ProjectDetailComponent = /** @class */ (function () {
    function ProjectDetailComponent(router, route, api, formBuilder, dialog, alerts) {
        this.router = router;
        this.route = route;
        this.api = api;
        this.formBuilder = formBuilder;
        this.dialog = dialog;
        this.alerts = alerts;
        this.data = [];
        this.organizations = [];
    }
    ProjectDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get all organizations to fill the select control
        this.api.getOrganizations()
            .subscribe(function (res) {
            _this.organizations = res;
        }, function (err) {
        });
        // Get data
        this.getData(this.route.snapshot.params['id']);
        // Create form
        this.thisForm = this.formBuilder.group({
            'shortname': [null, [forms_1.Validators.required, forms_1.Validators.maxLength(20)]],
            'fullname': [null, [forms_1.Validators.required, forms_1.Validators.maxLength(256)]],
            'description': [null, forms_1.Validators.maxLength(500)],
            'logo': [null],
        });
    };
    Object.defineProperty(ProjectDetailComponent.prototype, "f", {
        get: function () { return this.thisForm.controls; },
        enumerable: true,
        configurable: true
    });
    // Get data via API
    ProjectDetailComponent.prototype.getData = function (id) {
        var _this = this;
        this.api.getProject(id).subscribe(function (data) {
            if (data["success"] == false) {
                _this.router.navigate(['projects']);
            }
            _this.data = data;
            // Update the form values
            _this.thisForm.setValue({
                shortname: (data.shortname !== undefined && data.shortname) ? data.shortname : "",
                fullname: (data.fullname !== undefined && data.fullname) ? data.fullname : "",
                organization: (data.organization !== undefined) ? data.organization : "",
                description: (data.description !== undefined && data.description) ? data.description : "",
                logo: (data.logo !== undefined && data.logo) ? data.logo : "",
            });
        });
    };
    // Form submit
    ProjectDetailComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        // Update project via API
        this.api.updateProject(this.data['_id'], form)
            .subscribe(function (res) {
            _this.alerts.setMessage('Updated', 'success');
        }, function (err) { });
    };
    // Delete entry
    ProjectDetailComponent.prototype.deleteEntry = function () {
        var _this = this;
        var dialogRef = this.dialog.open(dialog_delete_component_1.DialogDeleteComponent);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result !== undefined && result == true) {
                _this.api.deleteProject(_this.data['_id'])
                    .subscribe(function (res) {
                    _this.router.navigate(['/projects'], { queryParams: { created: 2 } });
                }, function (err) {
                    if (err.status === 401) {
                        _this.router.navigate(['login']);
                    }
                });
            }
        });
    };
    ProjectDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-project-detail',
            templateUrl: './project-detail.component.html',
            styleUrls: ['./project-detail.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, api_service_1.ApiService, forms_1.FormBuilder, dialog_1.MatDialog, angular_alert_module_1.AlertsService])
    ], ProjectDetailComponent);
    return ProjectDetailComponent;
}());
exports.ProjectDetailComponent = ProjectDetailComponent;
//# sourceMappingURL=project-detail.component.js.map