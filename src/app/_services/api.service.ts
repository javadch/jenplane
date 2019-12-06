import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { timeout } from 'rxjs/operators/timeout';

// JSON as HTTP headers
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    }
    )
};

// The API routes

// Main route
const apiUrl = '/api';

// Sub-routes
const apiUrlOrganization = 'organization';
const apiUrlProject = 'project';
const apiUrlResource = 'resource';
const apiUrlUser = 'user';
const apiUrlRole = 'role';
const apiUrlAdmin = 'admin';

@Injectable({
    providedIn: 'root'
})
export class ApiService {


    constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
    }
    
    // Error handling
    private handleError(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }

        return throwError(error);
    };
    
    ///////////////
    /*
        API calls for organizations
    */
    //////////////

    getOrganizations(): Observable<any> {

        let httpOptionsAuthorization = {
            headers: new HttpHeaders(
            {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            }
            )
        };
        const url = `${apiUrl}/${apiUrlOrganization}`;
        return this.http.get(url, httpOptionsAuthorization)
        .pipe(timeout(300000), catchError(this.handleError));
    }
    
    getOrganization(id: string): Observable<any> {

        let httpOptionsAuthorization = {
            headers: new HttpHeaders(
            {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            }
            )
        };
        const url = `${apiUrl}/${apiUrlOrganization}/${id}`;
        return this.http.get(url, httpOptionsAuthorization)
        .pipe(timeout(300000), catchError(this.handleError));
    }

    putOrganization(id: string, data): Observable<any> {

        let httpOptionsAuthorization = {
            headers: new HttpHeaders(
            {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            }
            )
        };
        const url = `${apiUrl}/${apiUrlOrganization}/${id}`;
        return this.http.put(url, data, httpOptionsAuthorization)
        .pipe(timeout(300000), catchError(this.handleError));
    } 

    deleteOrganization(id: string): Observable<{}> {

        let httpOptionsAuthorization = {
            headers: new HttpHeaders(
            {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            }
            )
        };
        const url = `${apiUrl}/${apiUrlOrganization}/${id}`;
        return this.http.delete(url, httpOptionsAuthorization)
        .pipe(timeout(300000), catchError(this.handleError));
    }

    lockOrganization(id: string): Observable<{}> {

        let httpOptionsAuthorization = {
            headers: new HttpHeaders(
            {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            }
            )
        };
        const url = `${apiUrl}/${apiUrlOrganization}/${id}/lock`;
        return this.http.get(url, httpOptionsAuthorization)
        .pipe(timeout(300000), catchError(this.handleError));
    }

    unlockOrganization(id: string): Observable<{}> {

        let httpOptionsAuthorization = {
            headers: new HttpHeaders(
            {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            }
            )
        };
        const url = `${apiUrl}/${apiUrlOrganization}/${id}/unlock`;
        return this.http.get(url, httpOptionsAuthorization)
        .pipe(timeout(300000), catchError(this.handleError));
    }

    ///////////////
    /*
        API calls for projects
    */
    //////////////

    getProjects(orgId : string): Observable<any> {

        let httpOptionsAuthorization = {
            headers: new HttpHeaders(
            {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            }
            )
        };
        const url = `${apiUrl}/${apiUrlProject}/org/${orgId}`;
        return this.http.get(url, httpOptionsAuthorization)
        .pipe(timeout(300000), catchError(this.handleError));
    }

    getProject(id: string): Observable<any> {

        let httpOptionsAuthorization = {
            headers: new HttpHeaders(
            {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            }
            )
        };
        const url = `${apiUrl}/${apiUrlProject}/${id}`;
        return this.http.get(url, httpOptionsAuthorization)
        .pipe(timeout(300000), catchError(this.handleError));
    }

    postProject(orgId : string, data): Observable<any> {

        let httpOptionsAuthorization = {
            headers: new HttpHeaders(
            {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            }
            )
        };
        const url = `${apiUrl}/${apiUrlProject}/org/${orgId}`;
        return this.http.post(url, data, httpOptionsAuthorization)
        .pipe(timeout(300000), catchError(this.handleError));
    }

    putProject(id: string, data): Observable<any> {

        let httpOptionsAuthorization = {
            headers: new HttpHeaders(
            {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            }
            )
        };
        const url = `${apiUrl}/${apiUrlProject}/${id}`;
        return this.http.put(url, data, httpOptionsAuthorization)
        .pipe(timeout(300000), catchError(this.handleError));
    }

    deleteProject(id: string): Observable<{}> {

        let httpOptionsAuthorization = {
            headers: new HttpHeaders(
            {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            }
            )
        };
        const url = `${apiUrl}/${apiUrlProject}/${id}`;
        return this.http.delete(url, httpOptionsAuthorization)
        .pipe(timeout(300000), catchError(this.handleError));
    }

    lockProject(id: string): Observable<{}> {

        let httpOptionsAuthorization = {
            headers: new HttpHeaders(
            {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            }
            )
        };
        const url = `${apiUrl}/${apiUrlProject}/${id}/lock`;
        return this.http.get(url, httpOptionsAuthorization)
        .pipe(timeout(300000), catchError(this.handleError));
    }

    unlockProject(id: string): Observable<{}> {

        let httpOptionsAuthorization = {
            headers: new HttpHeaders(
            {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            }
            )
        };
        const url = `${apiUrl}/${apiUrlProject}/${id}/unlock`;
        return this.http.get(url, httpOptionsAuthorization)
        .pipe(timeout(300000), catchError(this.handleError));
    }

    ///////////////
    /*
        API calls for resources
    */
    //////////////

    getResources(projId : string): Observable<any> {

        let httpOptionsAuthorization = {
            headers: new HttpHeaders(
            {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            }
            )
        };
        const url = `${apiUrl}/${apiUrlResource}/project/${projId}`;
        return this.http.get(url, httpOptionsAuthorization)
        .pipe(timeout(300000), catchError(this.handleError));
    }

    getResource(id: string): Observable<any> {

        let httpOptionsAuthorization = {
            headers: new HttpHeaders(
            {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            }
            )
        };
        const url = `${apiUrl}/${apiUrlResource}/${id}`;
        return this.http.get(url, httpOptionsAuthorization)
        .pipe(timeout(300000), catchError(this.handleError));
    }

    postResource(projId : string, data): Observable<any> {

        let httpOptionsAuthorization = {
            headers: new HttpHeaders(
            {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            }
            )
        };
        const url = `${apiUrl}/${apiUrlResource}/project/${projId}`;
        return this.http.post(url, data, httpOptionsAuthorization)
        .pipe(timeout(300000), catchError(this.handleError));
    }

    putResource(id: string, data): Observable<any> {

        let httpOptionsAuthorization = {
            headers: new HttpHeaders(
            {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            }
            )
        };
        const url = `${apiUrl}/${apiUrlResource}/${id}`;
        return this.http.put(url, data, httpOptionsAuthorization)
        .pipe(timeout(300000), catchError(this.handleError));
    }

    deleteResource(id: string): Observable<{}> {

        let httpOptionsAuthorization = {
            headers: new HttpHeaders(
            {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            }
            )
        };
        const url = `${apiUrl}/${apiUrlResource}/${id}`;
        return this.http.delete(url, httpOptionsAuthorization)
        .pipe(timeout(300000), catchError(this.handleError));
    }

    ///////////////
    /*
        API calls for users
    */
    //////////////

    registerUser(data): Observable<any> {
        const url = `${apiUrl}/${apiUrlUser}/register`;
        return this.http.post(url, data, httpOptions)
        .pipe(timeout(300000), catchError(this.handleError));
    }

    loginUser(data): Observable<any> {
        const url = `${apiUrl}/${apiUrlUser}/login`;
        return this.http.post(url, data, httpOptions)
        .pipe(timeout(300000), catchError(this.handleError));
    }

    getLoggedInUser(): Observable<any> {

        let httpOptionsAuthorization = {
            headers: new HttpHeaders(
            {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            }
            )
        };
        const url = `${apiUrl}/${apiUrlUser}/profile`;
        return this.http.get(url, httpOptionsAuthorization)
        .pipe(timeout(300000), catchError(this.handleError));
    }

    putLoggedInUser(data): Observable<any> {

        let httpOptionsAuthorization = {
            headers: new HttpHeaders(
            {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            }
            )
        };
        const url = `${apiUrl}/${apiUrlUser}/profile`;
        return this.http.put(url, data, httpOptionsAuthorization)
        .pipe(timeout(300000), catchError(this.handleError));
    }

    getUsers(): Observable<any> {

        let httpOptionsAuthorization = {
            headers: new HttpHeaders(
            {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            }
            )
        };
        const url = `${apiUrl}/${apiUrlUser}`;
        return this.http.get(url, httpOptionsAuthorization)
        .pipe(timeout(300000), catchError(this.handleError));
    }
    isSuperadmin(): Observable<any> {

        let httpOptionsAuthorization = {
            headers: new HttpHeaders(
            {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            }
            )
        };
        const url = `${apiUrl}/${apiUrlUser}/superadmin`;
        return this.http.get(url, httpOptionsAuthorization)
        .pipe(timeout(300000), catchError(this.handleError));
    }


    ///////////////
    /*
        API calls for Superadmins
    */
    //////////////

    postOrganization(data): Observable<any> {

        let httpOptionsAuthorization = {
            headers: new HttpHeaders(
            {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            }
            )
        };
        const url = `${apiUrl}/${apiUrlAdmin}/organization`;
        return this.http.post(url, data, httpOptionsAuthorization)
        .pipe(timeout(300000), catchError(this.handleError));
    }

    getUser(id: string): Observable<any> {

        let httpOptionsAuthorization = {
            headers: new HttpHeaders(
            {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            }
            )
        };
        const url = `${apiUrl}/${apiUrlAdmin}/user/${id}`;
        return this.http.get(url, httpOptionsAuthorization)
        .pipe(timeout(300000), catchError(this.handleError));
    }
    postUser(data): Observable<any> {

        let httpOptionsAuthorization = {
            headers: new HttpHeaders(
            {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            }
            )
        };
        const url = `${apiUrl}/${apiUrlAdmin}/user`;
        return this.http.post(url, data, httpOptionsAuthorization)
        .pipe(timeout(300000), catchError(this.handleError));
    }
    deleteUser(id: string): Observable<any> {

        let httpOptionsAuthorization = {
            headers: new HttpHeaders(
            {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            }
            )
        };
        const url = `${apiUrl}/${apiUrlAdmin}/user/${id}`;
        return this.http.delete(url, httpOptionsAuthorization)
        .pipe(timeout(300000), catchError(this.handleError));
    }

    putUser(id: string, data): Observable<any> {

        let httpOptionsAuthorization = {
            headers: new HttpHeaders(
            {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            }
            )
        };
        const url = `${apiUrl}/${apiUrlAdmin}/user/${id}`;
        return this.http.put(url, data, httpOptionsAuthorization)
        .pipe(timeout(300000), catchError(this.handleError));
    }

    /////////////

    //// Roles

    getUserRoles(roleModelType: string, roleModelId: string): Observable<any> {

        let httpOptionsAuthorization = {
            headers: new HttpHeaders(
            {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            }
            )
        };
        const url = `${apiUrl}/${apiUrlRole}/${roleModelType}/${roleModelId}`;
        return this.http.get(url, httpOptionsAuthorization)
        .pipe(timeout(300000), catchError(this.handleError));
    }

    getUserRole(id: string, roleModelType: string, roleModelId: string): Observable<any> {

        let httpOptionsAuthorization = {
            headers: new HttpHeaders(
            {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            }
            )
        };
        const url = `${apiUrl}/${apiUrlRole}/${id}/${roleModelType}/${roleModelId}`;
        return this.http.get(url, httpOptionsAuthorization)
        .pipe(timeout(300000), catchError(this.handleError));
    }

    putUserRole(id: string, roleModelType: string, roleModelId: string, data): Observable<any> {

        let httpOptionsAuthorization = {
            headers: new HttpHeaders(
            {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            }
            )
        };
        const url = `${apiUrl}/${apiUrlRole}/${id}/${roleModelType}/${roleModelId}`;
        return this.http.put(url, data, httpOptionsAuthorization)
        .pipe(timeout(300000), catchError(this.handleError));
    }

    postUserRole(roleModelType: string, roleModelId: string, data): Observable<any> {

        let httpOptionsAuthorization = {
            headers: new HttpHeaders(
            {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            }
            )
        };
        const url = `${apiUrl}/${apiUrlRole}/${roleModelType}/${roleModelId}`;
        return this.http.post(url, data, httpOptionsAuthorization)
        .pipe(timeout(300000), catchError(this.handleError));
    }

    deleteUserRole(id: string, roleModelType: string, roleModelId: string): Observable<any> {

        let httpOptionsAuthorization = {
            headers: new HttpHeaders(
            {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            }
            )
        };
        const url = `${apiUrl}/${apiUrlRole}/${id}/${roleModelType}/${roleModelId}`;
        return this.http.delete(url, httpOptionsAuthorization)
        .pipe(timeout(300000), catchError(this.handleError));
    }
}