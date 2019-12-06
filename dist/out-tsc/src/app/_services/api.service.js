"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var httpOptions = {
    headers: new http_1.HttpHeaders({
        'Content-Type': 'application/json'
    })
};
var httpOptionsAuthorization = {
    headers: new http_1.HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwtToken')
    })
};
var apiUrl = "/api";
var apiUrlOrganization = "organization";
var apiUrlProject = "project";
var apiUrlUser = "user";
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.handleError = function (error) {
        var errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = "Error: " + error.error.message;
        }
        else {
            // server-side error
            errorMessage = "Error Code: " + error.status + "\nMessage: " + error.message;
        }
        return rxjs_1.throwError(errorMessage);
    };
    ;
    ApiService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    ApiService.prototype.getOrganizations = function () {
        var url = apiUrl + "/" + apiUrlOrganization;
        return this.http.get(url, httpOptionsAuthorization).pipe(operators_1.map(this.extractData), operators_1.catchError(this.handleError));
    };
    ApiService.prototype.getOrganization = function (id) {
        var url = apiUrl + "/" + apiUrlOrganization + "/" + id;
        return this.http.get(url, httpOptionsAuthorization).pipe(operators_1.map(this.extractData), operators_1.catchError(this.handleError));
    };
    ApiService.prototype.postOrganization = function (data) {
        var url = apiUrl + "/" + apiUrlOrganization;
        return this.http.post(url, data, httpOptionsAuthorization)
            .pipe(operators_1.catchError(this.handleError));
    };
    ApiService.prototype.updateOrganization = function (id, data) {
        var url = apiUrl + "/" + apiUrlOrganization + "/" + id;
        return this.http.put(url, data, httpOptionsAuthorization)
            .pipe(operators_1.catchError(this.handleError));
    };
    ApiService.prototype.deleteOrganization = function (id) {
        var url = apiUrl + "/" + apiUrlOrganization + "/" + id;
        return this.http.delete(url, httpOptionsAuthorization)
            .pipe(operators_1.catchError(this.handleError));
    };
    ////////////////
    ApiService.prototype.getProjects = function () {
        var url = apiUrl + "/" + apiUrlProject;
        return this.http.get(url, httpOptionsAuthorization).pipe(operators_1.map(this.extractData), operators_1.catchError(this.handleError));
    };
    ApiService.prototype.getProject = function (id) {
        var url = apiUrl + "/" + apiUrlProject + "/" + id;
        return this.http.get(url, httpOptionsAuthorization).pipe(operators_1.map(this.extractData), operators_1.catchError(this.handleError));
    };
    ApiService.prototype.postProject = function (data) {
        var url = apiUrl + "/" + apiUrlProject;
        return this.http.post(url, data, httpOptionsAuthorization)
            .pipe(operators_1.catchError(this.handleError));
    };
    ApiService.prototype.updateProject = function (id, data) {
        var url = apiUrl + "/" + apiUrlProject + "/" + id;
        return this.http.put(url, data, httpOptionsAuthorization)
            .pipe(operators_1.catchError(this.handleError));
    };
    ApiService.prototype.deleteProject = function (id) {
        var url = apiUrl + "/" + apiUrlProject + "/" + id;
        return this.http.delete(url, httpOptionsAuthorization)
            .pipe(operators_1.catchError(this.handleError));
    };
    /////////////////////////
    ApiService.prototype.signup = function (data) {
        var url = apiUrl + "/" + apiUrlUser + "/signup";
        return this.http.post(url, data, httpOptions)
            .pipe(operators_1.catchError(this.handleError));
    };
    ApiService.prototype.login = function (data) {
        var url = apiUrl + "/" + apiUrlUser + "/login";
        return this.http.post(url, data, httpOptions)
            .pipe(operators_1.catchError(this.handleError));
    };
    ApiService.prototype.checkLogin = function () {
        var url = apiUrl + "/" + apiUrlUser + "/login";
        return this.http.get(url, httpOptions)
            .pipe(operators_1.catchError(this.handleError));
    };
    ApiService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
//# sourceMappingURL=api.service.js.map