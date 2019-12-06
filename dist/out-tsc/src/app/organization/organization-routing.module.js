"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var organization_home_component_1 = require("./organization-home/organization-home.component");
var organization_list_component_1 = require("./organization-list/organization-list.component");
var organization_detail_component_1 = require("./organization-detail/organization-detail.component");
var organization_create_component_1 = require("./organization-create/organization-create.component");
var routes = [
    {
        path: 'organizations',
        component: organization_home_component_1.OrganizationHomeComponent,
        children: [
            {
                path: '',
                component: organization_list_component_1.OrganizationListComponent
            },
            {
                path: 'create',
                component: organization_create_component_1.OrganizationCreateComponent
            },
            {
                path: 'detail/:id',
                component: organization_detail_component_1.OrganizationDetailComponent
            }
        ]
    }
];
var OrganizationRoutingModule = /** @class */ (function () {
    function OrganizationRoutingModule() {
    }
    OrganizationRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(routes),
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], OrganizationRoutingModule);
    return OrganizationRoutingModule;
}());
exports.OrganizationRoutingModule = OrganizationRoutingModule;
//# sourceMappingURL=organization-routing.module.js.map