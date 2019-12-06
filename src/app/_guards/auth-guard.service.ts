import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AuthService } from '../_services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    
    constructor(private authService: AuthService, private router: Router) {
    }
    
    canActivate(): boolean {
        
        // Logged-in user
        if (this.authService.isAuthenticated()) {
            return true;
        }
        
        // Not logged gets redirected to login page
        this.router.navigate(['/user/login']);

        return false;
    }
}