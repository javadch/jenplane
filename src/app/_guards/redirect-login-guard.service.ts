import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AuthService } from '../_services/auth.service';

@Injectable()
export class RedirectLoginGuard implements CanActivate {
    
    constructor(private authService: AuthService, private router: Router) {
    }
    
    canActivate(): boolean {
        // Logged-in user
        if (this.authService.isAuthenticated()) {
	        // Redirect logged-in users
	        this.router.navigate(['/organizations']);
            return false;
        }

        return true;
    }
}