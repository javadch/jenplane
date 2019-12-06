import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from '../_services/api.service';

@Injectable()
export class AdminGuard implements CanActivate {
    
    constructor(private apiService: ApiService, private router: Router) {
    }
    
    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        
        // Check if the user is a superadmin
        return this.apiService.isSuperadmin().map(resp => {
            if (resp['success'] !== undefined && resp['success'] == true) {
                return true;
            }
        }).catch(() => {
            this.router.navigate(['/dashboard']);
            return Observable.of(false);
        });
    }
}