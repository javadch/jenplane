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
    MatRadioModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatToolbarModule,
    MatDialogModule,
    MatSelectModule,
MatFormFieldModule } from '@angular/material';

// Standard imports for all routes
import { DialogDeleteComponent } from '../_dialogs/dialog-delete.component';
import { AuthGuard } from '../_guards/auth-guard.service';
import { AdminGuard } from '../_guards/admin-guard.service';
import { CoreModule } from '../core/core.module';

// Role specific imports
import { RoleHomeComponent } from './role-home/role-home.component';
import { RoleCreateComponent } from './role-create/role-create.component';
import { RoleListComponent } from './role-list/role-list.component';
import { RoleDetailComponent } from './role-detail/role-detail.component';
import { RoleRoutingModule } from './role-routing.module';

@NgModule({
    imports: [
        RoleRoutingModule,
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
        MatToolbarModule,
        MatCheckboxModule,
        MatButtonModule,
        MatRadioModule,
        MatCardModule,
        MatSelectModule,
        MatFormFieldModule
    ],
    declarations: [
        RoleHomeComponent,
        RoleCreateComponent,
        RoleListComponent,
        RoleDetailComponent
    ],
    providers: [
        AuthGuard,
        AdminGuard
    ],
    entryComponents: [DialogDeleteComponent]
})
export class RoleModule {}