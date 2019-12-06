// Generic imports
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertsModule } from 'angular-alert-module';
import {
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatDialogModule,
    MatSelectModule,
MatFormFieldModule } from "@angular/material";

// Standard imports for all routes
import { DialogDeleteComponent } from '../_dialogs/dialog-delete.component';
import { AuthGuard } from '../_guards/auth-guard.service';
import { AdminGuard } from '../_guards/admin-guard.service';
import { CoreModule } from '../core/core.module';

// Admin specific imports
import { AdminOutletComponent }       from './admin-outlet/admin-outlet.component';
import { AdminHomeComponent }       from './admin-home/admin-home.component';
import { AdminUserCreateComponent }     from './admin-user/admin-user-create/admin-user-create.component';
import { AdminUserListComponent }       from './admin-user/admin-user-list/admin-user-list.component';
import { AdminUserDetailComponent }     from './admin-user/admin-user-detail/admin-user-detail.component';
import { AdminOrganizationCreateComponent }     from './admin-organization/admin-organization-create/admin-organization-create.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
    imports: [
        AdminRoutingModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        CoreModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
        MatIconModule,
        MatGridListModule,
        MatDialogModule,
        MatCheckboxModule,
        MatButtonModule,
        MatCardModule,
        MatSelectModule,
        MatFormFieldModule
    ],
    declarations: [
        AdminOutletComponent,
        AdminHomeComponent,
        AdminUserCreateComponent,
        AdminUserListComponent,
        AdminUserDetailComponent,
        AdminOrganizationCreateComponent
    ],
    providers: [
        AuthGuard,
        AdminGuard
    ],
    entryComponents: [DialogDeleteComponent]
})
export class AdminModule {}