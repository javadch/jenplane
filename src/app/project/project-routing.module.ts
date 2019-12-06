import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectHomeComponent } from './project-home/project-home.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectCreateComponent } from './project-create/project-create.component';

import { AuthGuard } from '../_guards/auth-guard.service';

const routes: Routes = [
    {
        path: 'projects',
        component: ProjectHomeComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                component: ProjectListComponent
            },
            {
                path: 'create/:orgId',
                component: ProjectCreateComponent
            },
            {
                path: ':id',
                component: ProjectDetailComponent
            },
            {
                path: 'org/:orgId',
                component: ProjectListComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class ProjectRoutingModule { }