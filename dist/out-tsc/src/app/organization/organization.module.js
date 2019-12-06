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
// import { DashboardComponent } from '../dashboard/dashboard.component';
// Organization specific imports
var organization_home_component_1 = require("./organization-home/organization-home.component");
var organization_create_component_1 = require("./organization-create/organization-create.component");
var organization_list_component_1 = require("./organization-list/organization-list.component");
var organization_detail_component_1 = require("./organization-detail/organization-detail.component");
var organization_routing_module_1 = require("./organization-routing.module");
var OrganizationModule = /** @class */ (function () {
    function OrganizationModule() {
    }
    OrganizationModule = __decorate([
        core_1.NgModule({
            imports: [
                organization_routing_module_1.OrganizationRoutingModule,
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
                organization_home_component_1.OrganizationHomeComponent,
                organization_create_component_1.OrganizationCreateComponent,
                organization_list_component_1.OrganizationListComponent,
                organization_detail_component_1.OrganizationDetailComponent
            ],
            providers: [
                auth_guard_service_1.AuthGuard,
                admin_guard_service_1.AdminGuard
            ],
            entryComponents: [dialog_delete_component_1.DialogDeleteComponent]
        })
    ], OrganizationModule);
    return OrganizationModule;
}());
exports.OrganizationModule = OrganizationModule;
//# sourceMappingURL=organization.module.js.map