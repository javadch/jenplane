import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrganizationHomeComponent } from './organization-home/organization-home.component';
import { OrganizationListComponent } from './organization-list/organization-list.component';
import { OrganizationDetailComponent } from './organization-detail/organization-detail.component';

import { AuthGuard } from '../_guards/auth-guard.service';

const routes: Routes = [
    {
        path: 'organizations',
        component: OrganizationHomeComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                component: OrganizationListComponent
            },
            {
                path: ':id/detail',
                component: OrganizationDetailComponent
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
export class OrganizationRoutingModule {}