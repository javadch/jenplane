import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoleHomeComponent } from './role-home/role-home.component';
import { RoleListComponent } from './role-list/role-list.component';
import { RoleDetailComponent } from './role-detail/role-detail.component';
import { RoleCreateComponent } from './role-create/role-create.component';

import { RoleDataService } from './role-data.service';

import { AuthGuard } from '../_guards/auth-guard.service';

const routes: Routes = [
{
    path: 'roles',
    component: RoleHomeComponent,
    canActivate: [AuthGuard],
    children: [
    {
        path: '',
        component: RoleHomeComponent
    },
    {
        path: 'create/org/:roleModelId',
        component: RoleCreateComponent
    },
    {
        path: 'create/project/:roleModelId',
        component: RoleCreateComponent
    },
    {
        path: ':id/org/:roleModelId',
        component: RoleDetailComponent
    },
    {
        path: ':id/project/:roleModelId',
        component: RoleDetailComponent
    },
    {
        path: 'org/:id',
        component: RoleListComponent
    },
    {
        path: 'project/:id',
        component: RoleListComponent
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
    ],
    providers: [ RoleDataService ]
})
export class RoleRoutingModule { }