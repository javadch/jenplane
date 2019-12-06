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
var project_home_component_1 = require("./project-home/project-home.component");
var project_list_component_1 = require("./project-list/project-list.component");
var project_detail_component_1 = require("./project-detail/project-detail.component");
var project_create_component_1 = require("./project-create/project-create.component");
var routes = [
    {
        path: 'projects',
        component: project_home_component_1.ProjectHomeComponent,
        children: [
            {
                path: '',
                component: project_list_component_1.ProjectListComponent
            },
            {
                path: 'create',
                component: project_create_component_1.ProjectCreateComponent
            },
            {
                path: 'detail/:id',
                component: project_detail_component_1.ProjectDetailComponent
            }
        ]
    }
];
var ProjectRoutingModule = /** @class */ (function () {
    function ProjectRoutingModule() {
    }
    ProjectRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(routes),
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], ProjectRoutingModule);
    return ProjectRoutingModule;
}());
exports.ProjectRoutingModule = ProjectRoutingModule;
//# sourceMappingURL=project-routing.module.js.map