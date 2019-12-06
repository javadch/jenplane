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

// Resource specific imports
import { ResourceHomeComponent }       from './resource-home/resource-home.component';
import { ResourceCreateComponent }     from './resource-create/resource-create.component';
import { ResourceListComponent }       from './resource-list/resource-list.component';
import { ResourceDetailComponent }     from './resource-detail/resource-detail.component';
import { ResourceRoutingModule } from './resource-routing.module';

@NgModule({
    imports: [
        ResourceRoutingModule,
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
        MatToolbarModule,
        MatCardModule,
        MatSelectModule,
        MatFormFieldModule,
        MatProgressBarModule,
    ],
    declarations: [
        ResourceHomeComponent,
        ResourceCreateComponent,
        ResourceListComponent,
        ResourceDetailComponent
    ],
    providers: [
        AuthGuard,
        AdminGuard
    ],
    entryComponents: [DialogDeleteComponent]
})
export class ResourceModule {}