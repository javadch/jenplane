import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatDialogModule } from '@angular/material';
import { AlertsModule } from 'angular-alert-module';

import { CoreModule } from './core/core.module';

import { AuthGuard } from './_guards/auth-guard.service';
import { AdminGuard } from './_guards/admin-guard.service';
import { RedirectLoginGuard } from './_guards/redirect-login-guard.service';

import { DialogDeleteComponent } from './_dialogs/dialog-delete.component';

import { DashboardComponent } from './dashboard/dashboard.component';

// Modules
import { OrganizationModule } from './organization/organization.module';
import { ProjectModule } from './project/project.module';
import { ResourceModule } from './resource/resource.module';
import { UserModule } from './user/user.module';
import { RoleModule} from './role/role.module';
import { AdminModule} from './admin/admin.module';

const appRoutes: Routes = [
{
    path: 'dashboard',
    component: DashboardComponent,
    data: { title: 'Dashboard' },
    canActivate: [AuthGuard]
},
{
    path: '',
    redirectTo: '/organizations',
    pathMatch: 'full'
},
];

@NgModule({
    declarations: [
    AppComponent,
    DashboardComponent,
    DialogDeleteComponent
    ],
    imports: [
    RouterModule.forRoot(appRoutes),
    AlertsModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    CoreModule,
    BrowserAnimationsModule,
    OrganizationModule,
    ProjectModule,
    ResourceModule,
    UserModule,
    RoleModule,
    AdminModule,
    MatDialogModule
    ],
    providers: [
    AuthGuard,
    AdminGuard,
    RedirectLoginGuard
    ],
    bootstrap: [AppComponent],
    entryComponents: [DialogDeleteComponent]
})
export class AppModule {}