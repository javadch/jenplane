import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, pipe, throwError } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import jwt_decode from 'jwt-decode';

import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private router: Router, private apiService: ApiService) {}
    
    clear(): void {
        localStorage.removeItem('jwtToken');
    }
    
    isAuthenticated(): boolean {
        var authenticated = false;
        
        if (localStorage.getItem('jwtToken') !== undefined &&
            localStorage.getItem('jwtToken') != null){
            authenticated = true;
        }

        return authenticated;
    }

    isSuperAdmin(): boolean {
        const user = this.decode();
        
        if (user.superadmin !== undefined && user.superadmin == true){
            return true;
        }
        else{
            return false;
        }
    }
    
    logout(): void {
        this.clear();
        this.router.navigate(['/user/login']);
    }
    
    decode() {
        if (localStorage.getItem('jwtToken') !== undefined && localStorage.getItem('jwtToken') != null){
            return jwt_decode(localStorage.getItem('jwtToken'));
        }
        return [];
    }
}