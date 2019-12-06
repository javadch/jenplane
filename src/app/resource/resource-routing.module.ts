import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResourceHomeComponent } from './resource-home/resource-home.component';
import { ResourceListComponent } from './resource-list/resource-list.component';
import { ResourceDetailComponent } from './resource-detail/resource-detail.component';
import { ResourceCreateComponent } from './resource-create/resource-create.component';

import { AuthGuard } from '../_guards/auth-guard.service';

const routes: Routes = [
    {
        path: 'resources',
        component: ResourceHomeComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                component: ResourceListComponent
            },
            {
                path: 'create/:projectId',
                component: ResourceCreateComponent
            },
            {
                path: ':id',
                component: ResourceDetailComponent
            },
            {
                path: 'project/:projectId',
                component: ResourceListComponent
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
export class ResourceRoutingModule { }