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
    MatSelectModule,
MatFormFieldModule } from '@angular/material';

// Standard imports for all routes
import { DialogDeleteComponent } from '../_dialogs/dialog-delete.component';
import { AuthGuard } from '../_guards/auth-guard.service';
import { AdminGuard } from '../_guards/admin-guard.service';
import { CoreModule } from '../core/core.module';

// Organization specific imports
import { OrganizationHomeComponent }       from './organization-home/organization-home.component';
import { OrganizationListComponent }       from './organization-list/organization-list.component';
import { OrganizationDetailComponent }     from './organization-detail/organization-detail.component';
import { OrganizationRoutingModule } from './organization-routing.module';

@NgModule({
    imports: [
        OrganizationRoutingModule,
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
        MatFormFieldModule
    ],
    declarations: [
        OrganizationHomeComponent,
        OrganizationListComponent,
        OrganizationDetailComponent
    ],
    providers: [
        AuthGuard,
        AdminGuard
    ],
    entryComponents: [DialogDeleteComponent]
})
export class OrganizationModule {}