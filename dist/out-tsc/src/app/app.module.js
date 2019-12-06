"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var material_1 = require("@angular/material");
var angular_alert_module_1 = require("angular-alert-module");
var app_component_1 = require("./app.component");
var router_1 = require("@angular/router");
var animations_1 = require("@angular/platform-browser/animations");
var core_module_1 = require("./core/core.module");
var http_1 = require("@angular/common/http");
////////////////////
// User
////////////////////
var signup_component_1 = require("./user/signup/signup.component");
var login_component_1 = require("./user/login/login.component");
var auth_guard_service_1 = require("./guards/auth-guard.service");
var admin_guard_service_1 = require("./guards/admin-guard.service");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var dialog_delete_component_1 = require("./dialogs/dialog-delete.component");
var admin_component_1 = require("./admin/admin/admin.component");
// Organization module
var organization_module_1 = require("./organization/organization.module");
var project_module_1 = require("./project/project.module");
var appRoutes = [
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent,
        data: { title: 'Dashboard' },
        canActivate: [auth_guard_service_1.AuthGuard]
    },
    {
        path: 'admin',
        canActivate: [admin_guard_service_1.AdminGuard],
        data: { role: 'superadmin' },
        component: admin_component_1.AdminComponent,
        children: [
            { path: '', component: admin_component_1.AdminComponent },
            { path: 'admin', component: admin_component_1.AdminComponent }
        ]
    },
    {
        path: 'signup',
        component: signup_component_1.SignupComponent,
        data: { title: 'Signup' }
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent,
        data: { title: 'Login' }
    },
    { path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                signup_component_1.SignupComponent,
                login_component_1.LoginComponent,
                dashboard_component_1.DashboardComponent,
                dialog_delete_component_1.DialogDeleteComponent,
                admin_component_1.AdminComponent
            ],
            imports: [
                router_1.RouterModule.forRoot(appRoutes),
                platform_browser_1.BrowserModule,
                organization_module_1.OrganizationModule,
                project_module_1.ProjectModule,
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
                material_1.MatFormFieldModule,
                angular_alert_module_1.AlertsModule.forRoot()
            ],
            providers: [
                auth_guard_service_1.AuthGuard,
                admin_guard_service_1.AdminGuard
                // UserGuard
            ],
            bootstrap: [app_component_1.AppComponent],
            entryComponents: [dialog_delete_component_1.DialogDeleteComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map