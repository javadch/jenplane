import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserHomeComponent } from './user-home/user-home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { RedirectLoginGuard } from '../_guards/redirect-login-guard.service';
import { AuthGuard } from '../_guards/auth-guard.service';

const routes: Routes = [
    {
        path: 'user',
        component: UserHomeComponent,
        children: [
            {
                path: '',
                component: UserLoginComponent
            },
            {
                path: 'login',
                canActivate: [RedirectLoginGuard],
                component: UserLoginComponent
            },
            {
                path: 'register',
                canActivate: [RedirectLoginGuard],
                component: UserRegisterComponent
            },
            {
                path: 'profile',
                canActivate: [AuthGuard],
                component: UserProfileComponent,
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
export class UserRoutingModule { }