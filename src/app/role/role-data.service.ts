import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RoleDataService {
    private allowedRoles = new BehaviorSubject<any[]>([
    {
        value: 'member',
        text: 'Member'
    },
    {
        value: 'contributor',
        text: 'Contributor'
    },
    {
        value: 'admin',
        text: 'Admin'
    }
    ]);

    public getAllowedRoles() {
        return this.allowedRoles.asObservable();
    }
}