"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Generic imports
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var http_1 = require("@angular/common/http");
var forms_1 = require("@angular/forms");
var material_1 = require("@angular/material");
// Standard imports for all routes
var dialog_delete_component_1 = require("../dialogs/dialog-delete.component");
var auth_guard_service_1 = require("../guards/auth-guard.service");
var admin_guard_service_1 = require("../guards/admin-guard.service");
var core_module_1 = require("../core/core.module");
// Project specific imports
var project_home_component_1 = require("./project-home/project-home.component");
var project_create_component_1 = require("./project-create/project-create.component");
var project_list_component_1 = require("./project-list/project-list.component");
var project_detail_component_1 = require("./project-detail/project-detail.component");
var project_routing_module_1 = require("./project-routing.module");
var ProjectModule = /** @class */ (function () {
    function ProjectModule() {
    }
    ProjectModule = __decorate([
        core_1.NgModule({
            imports: [
                project_routing_module_1.ProjectRoutingModule,
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
                animations_1.BrowserAnimationsModule,
                core_module_1.CoreModule,
                material_1.MatInputModule,
                material_1.MatTableModule,
                material_1.MatPaginatorModule,
                material_1.MatSortModule,
                material_1.MatProgressSpinnerModule,
                material_1.MatIconModule,
                material_1.MatDialogModule,
                material_1.MatButtonModule,
                material_1.MatCardModule,
                material_1.MatSelectModule,
                material_1.MatFormFieldModule
            ],
            declarations: [
                project_home_component_1.ProjectHomeComponent,
                project_create_component_1.ProjectCreateComponent,
                project_list_component_1.ProjectListComponent,
                project_detail_component_1.ProjectDetailComponent
            ],
            providers: [
                auth_guard_service_1.AuthGuard,
                admin_guard_service_1.AdminGuard
            ],
            entryComponents: [dialog_delete_component_1.DialogDeleteComponent]
        })
    ], ProjectModule);
    return ProjectModule;
}());
exports.ProjectModule = ProjectModule;
//# sourceMappingURL=project.module.js.map