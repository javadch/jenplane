import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminOutletComponent } from './admin-outlet/admin-outlet.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminUserCreateComponent } from './admin-user/admin-user-create/admin-user-create.component';
import { AdminUserListComponent }  from './admin-user/admin-user-list/admin-user-list.component';
import { AdminUserDetailComponent } from './admin-user/admin-user-detail/admin-user-detail.component';
import { AdminOrganizationCreateComponent }     from './admin-organization/admin-organization-create/admin-organization-create.component';

import { AdminGuard } from '../_guards/admin-guard.service';

const routes: Routes = [
{
    path: 'admin',
    component: AdminOutletComponent,
    canActivate: [AdminGuard],
    children: [
    {
        path: '',
        component: AdminHomeComponent
    },
    {
        path: 'users',
        component: AdminUserListComponent
    },
    {
        path: 'users/create',
        component: AdminUserCreateComponent
    },
    {
        path: 'users/:id/detail',
        component: AdminUserDetailComponent
    },
    {
        path: 'org/create',
        component: AdminOrganizationCreateComponent
    },
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
export class AdminRoutingModule { }