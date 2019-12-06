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
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatDialogModule,
    MatProgressBarModule,
    MatSelectModule,
MatFormFieldModule } from '@angular/material';

import { DialogDeleteComponent } from '../_dialogs/dialog-delete.component';

// Standard imports for all routes
import { AuthGuard } from '../_guards/auth-guard.service';
import { AdminGuard } from '../_guards/admin-guard.service';
import { RedirectLoginGuard } from '../_guards/redirect-login-guard.service';
import { CoreModule } from '../core/core.module';

// User specific imports
import { UserHomeComponent } from './user-home/user-home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserRoutingModule } from './user-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
    imports: [
        UserRoutingModule,
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
        MatDialogModule,
        MatCheckboxModule,
        MatButtonModule,
        MatCardModule,
        MatSelectModule,
        MatFormFieldModule,
        MatProgressBarModule,
    ],
    declarations: [
        UserHomeComponent,
        UserLoginComponent,
        UserRegisterComponent,
        UserProfileComponent
    ],
    providers: [
        AuthGuard,
        AdminGuard,
        RedirectLoginGuard
    ]
})
export class UserModule {}