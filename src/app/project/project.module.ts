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
    MatToolbarModule,
    MatProgressBarModule,
    MatSelectModule,
MatFormFieldModule } from '@angular/material';

// Standard imports for all routes
import { DialogDeleteComponent } from '../_dialogs/dialog-delete.component';
import { AuthGuard } from '../_guards/auth-guard.service';
import { AdminGuard } from '../_guards/admin-guard.service';
import { CoreModule } from '../core/core.module';

// Project specific imports
import { ProjectHomeComponent }       from './project-home/project-home.component';
import { ProjectCreateComponent }     from './project-create/project-create.component';
import { ProjectListComponent }       from './project-list/project-list.component';
import { ProjectDetailComponent }     from './project-detail/project-detail.component';
import { ProjectRoutingModule } from './project-routing.module';

@NgModule({
    imports: [
        ProjectRoutingModule,
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
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatSelectModule,
        MatFormFieldModule,
        MatProgressBarModule,
    ],
    declarations: [
        ProjectHomeComponent,
        ProjectCreateComponent,
        ProjectListComponent,
        ProjectDetailComponent
    ],
    providers: [
        AuthGuard,
        AdminGuard
    ],
    entryComponents: [DialogDeleteComponent]
})
export class ProjectModule {}