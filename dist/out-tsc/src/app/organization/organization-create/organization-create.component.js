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
var OrganizationCreateComponent = /** @class */ (function () {
    function OrganizationCreateComponent(route, router, api, formBuilder) {
        this.route = route;
        this.router = router;
        this.api = api;
        this.formBuilder = formBuilder;
    }
    OrganizationCreateComponent.prototype.ngOnInit = function () {
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
    Object.defineProperty(OrganizationCreateComponent.prototype, "f", {
        get: function () { return this.thisForm.controls; },
        enumerable: true,
        configurable: true
    });
    OrganizationCreateComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        this.api.postOrganization(form).subscribe(function (resp) {
            if (resp['success'] == true) {
                _this.router.navigate(['/organizations'], { queryParams: { created: 1 } });
            }
        }, function (err) {
            if (err.status === 401) {
                _this.router.navigate(['login']);
            }
        });
    };
    OrganizationCreateComponent = __decorate([
        core_1.Component({
            selector: 'app-organization-create',
            templateUrl: './organization-create.component.html',
            styleUrls: ['./organization-create.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, api_service_1.ApiService, forms_1.FormBuilder])
    ], OrganizationCreateComponent);
    return OrganizationCreateComponent;
}());
exports.OrganizationCreateComponent = OrganizationCreateComponent;
//# sourceMappingURL=organization-create.component.js.map