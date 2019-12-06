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
var OrganizationDetailComponent = /** @class */ (function () {
    function OrganizationDetailComponent(router, route, api, formBuilder, dialog, alerts) {
        this.router = router;
        this.route = route;
        this.api = api;
        this.formBuilder = formBuilder;
        this.dialog = dialog;
        this.alerts = alerts;
        this.data = [];
    }
    OrganizationDetailComponent.prototype.ngOnInit = function () {
        // Get data
        this.getData(this.route.snapshot.params['id']);
        // Create form
        this.thisForm = this.formBuilder.group({
            'shortname': [null, [forms_1.Validators.required, forms_1.Validators.maxLength(20)]],
            'fullname': [null, [forms_1.Validators.required, forms_1.Validators.maxLength(256)]],
            'email': [null, [forms_1.Validators.required, forms_1.Validators.email, forms_1.Validators.maxLength(256)]],
            'description': [null, forms_1.Validators.maxLength(500)],
            'address': [null, forms_1.Validators.maxLength(500)],
            'logo': [null],
            'phone': [null, forms_1.Validators.maxLength(50)],
            'country': [null, forms_1.Validators.maxLength(50)]
        });
    };
    Object.defineProperty(OrganizationDetailComponent.prototype, "f", {
        get: function () { return this.thisForm.controls; },
        enumerable: true,
        configurable: true
    });
    // Get data via API
    OrganizationDetailComponent.prototype.getData = function (id) {
        var _this = this;
        this.api.getOrganization(id).subscribe(function (data) {
            if (data["success"] == false) {
                _this.router.navigate(['organizations']);
            }
            _this.data = data;
            // Update the form values
            _this.thisForm.setValue({
                shortname: (data.shortname !== undefined && data.shortname) ? data.shortname : "",
                fullname: (data.fullname !== undefined && data.fullname) ? data.fullname : "",
                email: (data.email !== undefined && data.email) ? data.email : "",
                description: (data.description !== undefined && data.description) ? data.description : "",
                address: (data.address !== undefined && data.address) ? data.address : "",
                logo: (data.logo !== undefined && data.logo) ? data.logo : "",
                phone: (data.phone !== undefined && data.phone) ? data.phone : "",
                country: (data.country !== undefined && data.country) ? data.country : ""
            });
        });
    };
    // Form submit
    OrganizationDetailComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        // Update project via API
        this.api.updateOrganization(this.data['_id'], form)
            .subscribe(function (res) {
            _this.alerts.setMessage('Updated', 'success');
        }, function (err) { });
    };
    // Delete entry
    OrganizationDetailComponent.prototype.deleteEntry = function () {
        var _this = this;
        var dialogRef = this.dialog.open(dialog_delete_component_1.DialogDeleteComponent);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result !== undefined && result == true) {
                _this.api.deleteOrganization(_this.data['_id'])
                    .subscribe(function (res) {
                    _this.router.navigate(['/organizations'], { queryParams: { created: 2 } });
                }, function (err) {
                    if (err.status === 401) {
                        _this.router.navigate(['login']);
                    }
                });
            }
        });
    };
    OrganizationDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-organization-detail',
            templateUrl: './organization-detail.component.html',
            styleUrls: ['./organization-detail.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, api_service_1.ApiService, forms_1.FormBuilder, dialog_1.MatDialog, angular_alert_module_1.AlertsService])
    ], OrganizationDetailComponent);
    return OrganizationDetailComponent;
}());
exports.OrganizationDetailComponent = OrganizationDetailComponent;
//# sourceMappingURL=organization-detail.component.js.map