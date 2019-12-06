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
var api_service_1 = require("../../_services/api.service");
var forms_1 = require("@angular/forms");
var ProjectCreateComponent = /** @class */ (function () {
    function ProjectCreateComponent(route, router, api, formBuilder) {
        this.route = route;
        this.router = router;
        this.api = api;
        this.formBuilder = formBuilder;
        this.organizations = [];
    }
    ProjectCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getOrganizations()
            .subscribe(function (res) {
            _this.organizations = res;
        }, function (err) {
        });
        this.thisForm = this.formBuilder.group({
            'title': [null, forms_1.Validators.required],
            'description': [null],
            'organization': ['', [forms_1.Validators.required]]
        });
    };
    Object.defineProperty(ProjectCreateComponent.prototype, "f", {
        get: function () { return this.thisForm.controls; },
        enumerable: true,
        configurable: true
    });
    ProjectCreateComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        this.api.postProject(form)
            .subscribe(function (res) {
            _this.router.navigate(['/projects'], { queryParams: { created: 1 } });
        }, function (err) {
            if (err.status === 401) {
                _this.router.navigate(['login']);
            }
        });
    };
    ProjectCreateComponent = __decorate([
        core_1.Component({
            selector: 'app-project-create',
            templateUrl: './project-create.component.html',
            styleUrls: ['./project-create.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, api_service_1.ApiService, forms_1.FormBuilder])
    ], ProjectCreateComponent);
    return ProjectCreateComponent;
}());
exports.ProjectCreateComponent = ProjectCreateComponent;
//# sourceMappingURL=project-create.component.js.map