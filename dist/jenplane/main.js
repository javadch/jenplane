(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_dialogs/dialog-delete.component.css":
/*!******************************************************!*\
  !*** ./src/app/_dialogs/dialog-delete.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  max-height: 500px;\r\n  min-width: 300px;\r\n  overflow: auto;\r\n}\r\n\r\n.isbn-col {\r\n  flex: 0 0 100px !important;\r\n  white-space: unset !important;\r\n}\r\n\r\n.button-row {\r\n  margin: 10px 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/_dialogs/dialog-delete.component.html":
/*!*******************************************************!*\
  !*** ./src/app/_dialogs/dialog-delete.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Confirm</h2>\n<mat-dialog-content class=\"mat-typography\">\n    Are you sure?\n</mat-dialog-content>\n<mat-dialog-actions align=\"end\">\n  <button mat-button mat-dialog-close>Cancel</button>\n  <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>Yes</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/_dialogs/dialog-delete.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/_dialogs/dialog-delete.component.ts ***!
  \*****************************************************/
/*! exports provided: DialogDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogDeleteComponent", function() { return DialogDeleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DialogDeleteComponent = /** @class */ (function () {
    function DialogDeleteComponent() {
    }
    DialogDeleteComponent.prototype.ngOnInit = function () { };
    DialogDeleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-delete',
            template: __webpack_require__(/*! ./dialog-delete.component.html */ "./src/app/_dialogs/dialog-delete.component.html"),
            styles: [__webpack_require__(/*! ./dialog-delete.component.css */ "./src/app/_dialogs/dialog-delete.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DialogDeleteComponent);
    return DialogDeleteComponent;
}());



/***/ }),

/***/ "./src/app/_guards/admin-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/_guards/admin-guard.service.ts ***!
  \************************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/api.service */ "./src/app/_services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AdminGuard = /** @class */ (function () {
    function AdminGuard(apiService, router) {
        this.apiService = apiService;
        this.router = router;
    }
    AdminGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        // Check if the user is a superadmin
        return this.apiService.isSuperadmin().map(function (resp) {
            if (resp['success'] !== undefined && resp['success'] == true) {
                return true;
            }
        }).catch(function () {
            _this.router.navigate(['/dashboard']);
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(false);
        });
    };
    AdminGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/_guards/auth-guard.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_guards/auth-guard.service.ts ***!
  \***********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        // Logged-in user
        if (this.authService.isAuthenticated()) {
            return true;
        }
        // Not logged gets redirected to login page
        this.router.navigate(['/user/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_guards/redirect-login-guard.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/_guards/redirect-login-guard.service.ts ***!
  \*********************************************************/
/*! exports provided: RedirectLoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedirectLoginGuard", function() { return RedirectLoginGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RedirectLoginGuard = /** @class */ (function () {
    function RedirectLoginGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    RedirectLoginGuard.prototype.canActivate = function () {
        // Logged-in user
        if (this.authService.isAuthenticated()) {
            // Redirect logged-in users
            this.router.navigate(['/organizations']);
            return false;
        }
        return true;
    };
    RedirectLoginGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RedirectLoginGuard);
    return RedirectLoginGuard;
}());



/***/ }),

/***/ "./src/app/_helpers/must-match.validator.ts":
/*!**************************************************!*\
  !*** ./src/app/_helpers/must-match.validator.ts ***!
  \**************************************************/
/*! exports provided: MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
    return function (formGroup) {
        var control = formGroup.controls[controlName];
        var matchingControl = formGroup.controls[matchingControlName];
        if (!control || !matchingControl) {
            return null;
        }
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return null;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "./src/app/_services/api.service.ts":
/*!******************************************!*\
  !*** ./src/app/_services/api.service.ts ***!
  \******************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators_timeout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators/timeout */ "./node_modules/rxjs-compat/_esm5/operators/timeout.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// JSON as HTTP headers
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
// The API routes
// Main route
var apiUrl = '/api';
// Sub-routes
var apiUrlOrganization = 'organization';
var apiUrlProject = 'project';
var apiUrlResource = 'resource';
var apiUrlUser = 'user';
var apiUrlRole = 'role';
var apiUrlAdmin = 'admin';
var ApiService = /** @class */ (function () {
    function ApiService(http, route, router) {
        this.http = http;
        this.route = route;
        this.router = router;
    }
    // Error handling
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
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
    };
    ;
    ///////////////
    /*
        API calls for organizations
    */
    //////////////
    ApiService.prototype.getOrganizations = function () {
        var httpOptionsAuthorization = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            })
        };
        var url = apiUrl + "/" + apiUrlOrganization;
        return this.http.get(url, httpOptionsAuthorization)
            .pipe(Object(rxjs_operators_timeout__WEBPACK_IMPORTED_MODULE_5__["timeout"])(300000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.getOrganization = function (id) {
        var httpOptionsAuthorization = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            })
        };
        var url = apiUrl + "/" + apiUrlOrganization + "/" + id;
        return this.http.get(url, httpOptionsAuthorization)
            .pipe(Object(rxjs_operators_timeout__WEBPACK_IMPORTED_MODULE_5__["timeout"])(300000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.putOrganization = function (id, data) {
        var httpOptionsAuthorization = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            })
        };
        var url = apiUrl + "/" + apiUrlOrganization + "/" + id;
        return this.http.put(url, data, httpOptionsAuthorization)
            .pipe(Object(rxjs_operators_timeout__WEBPACK_IMPORTED_MODULE_5__["timeout"])(300000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.deleteOrganization = function (id) {
        var httpOptionsAuthorization = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            })
        };
        var url = apiUrl + "/" + apiUrlOrganization + "/" + id;
        return this.http.delete(url, httpOptionsAuthorization)
            .pipe(Object(rxjs_operators_timeout__WEBPACK_IMPORTED_MODULE_5__["timeout"])(300000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.lockOrganization = function (id) {
        var httpOptionsAuthorization = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            })
        };
        var url = apiUrl + "/" + apiUrlOrganization + "/" + id + "/lock";
        return this.http.get(url, httpOptionsAuthorization)
            .pipe(Object(rxjs_operators_timeout__WEBPACK_IMPORTED_MODULE_5__["timeout"])(300000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.unlockOrganization = function (id) {
        var httpOptionsAuthorization = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            })
        };
        var url = apiUrl + "/" + apiUrlOrganization + "/" + id + "/unlock";
        return this.http.get(url, httpOptionsAuthorization)
            .pipe(Object(rxjs_operators_timeout__WEBPACK_IMPORTED_MODULE_5__["timeout"])(300000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ///////////////
    /*
        API calls for projects
    */
    //////////////
    ApiService.prototype.getProjects = function (orgId) {
        var httpOptionsAuthorization = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            })
        };
        var url = apiUrl + "/" + apiUrlProject + "/org/" + orgId;
        return this.http.get(url, httpOptionsAuthorization)
            .pipe(Object(rxjs_operators_timeout__WEBPACK_IMPORTED_MODULE_5__["timeout"])(300000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.getProject = function (id) {
        var httpOptionsAuthorization = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            })
        };
        var url = apiUrl + "/" + apiUrlProject + "/" + id;
        return this.http.get(url, httpOptionsAuthorization)
            .pipe(Object(rxjs_operators_timeout__WEBPACK_IMPORTED_MODULE_5__["timeout"])(300000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.postProject = function (orgId, data) {
        var httpOptionsAuthorization = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            })
        };
        var url = apiUrl + "/" + apiUrlProject + "/org/" + orgId;
        return this.http.post(url, data, httpOptionsAuthorization)
            .pipe(Object(rxjs_operators_timeout__WEBPACK_IMPORTED_MODULE_5__["timeout"])(300000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.putProject = function (id, data) {
        var httpOptionsAuthorization = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            })
        };
        var url = apiUrl + "/" + apiUrlProject + "/" + id;
        return this.http.put(url, data, httpOptionsAuthorization)
            .pipe(Object(rxjs_operators_timeout__WEBPACK_IMPORTED_MODULE_5__["timeout"])(300000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.deleteProject = function (id) {
        var httpOptionsAuthorization = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            })
        };
        var url = apiUrl + "/" + apiUrlProject + "/" + id;
        return this.http.delete(url, httpOptionsAuthorization)
            .pipe(Object(rxjs_operators_timeout__WEBPACK_IMPORTED_MODULE_5__["timeout"])(300000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.lockProject = function (id) {
        var httpOptionsAuthorization = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            })
        };
        var url = apiUrl + "/" + apiUrlProject + "/" + id + "/lock";
        return this.http.get(url, httpOptionsAuthorization)
            .pipe(Object(rxjs_operators_timeout__WEBPACK_IMPORTED_MODULE_5__["timeout"])(300000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.unlockProject = function (id) {
        var httpOptionsAuthorization = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            })
        };
        var url = apiUrl + "/" + apiUrlProject + "/" + id + "/unlock";
        return this.http.get(url, httpOptionsAuthorization)
            .pipe(Object(rxjs_operators_timeout__WEBPACK_IMPORTED_MODULE_5__["timeout"])(300000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ///////////////
    /*
        API calls for resources
    */
    //////////////
    ApiService.prototype.getResources = function (projId) {
        var httpOptionsAuthorization = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            })
        };
        var url = apiUrl + "/" + apiUrlResource + "/project/" + projId;
        return this.http.get(url, httpOptionsAuthorization)
            .pipe(Object(rxjs_operators_timeout__WEBPACK_IMPORTED_MODULE_5__["timeout"])(300000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.getResource = function (id) {
        var httpOptionsAuthorization = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            })
        };
        var url = apiUrl + "/" + apiUrlResource + "/" + id;
        return this.http.get(url, httpOptionsAuthorization)
            .pipe(Object(rxjs_operators_timeout__WEBPACK_IMPORTED_MODULE_5__["timeout"])(300000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.postResource = function (projId, data) {
        var httpOptionsAuthorization = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            })
        };
        var url = apiUrl + "/" + apiUrlResource + "/project/" + projId;
        return this.http.post(url, data, httpOptionsAuthorization)
            .pipe(Object(rxjs_operators_timeout__WEBPACK_IMPORTED_MODULE_5__["timeout"])(300000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.putResource = function (id, data) {
        var httpOptionsAuthorization = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            })
        };
        var url = apiUrl + "/" + apiUrlResource + "/" + id;
        return this.http.put(url, data, httpOptionsAuthorization)
            .pipe(Object(rxjs_operators_timeout__WEBPACK_IMPORTED_MODULE_5__["timeout"])(300000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.deleteResource = function (id) {
        var httpOptionsAuthorization = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            })
        };
        var url = apiUrl + "/" + apiUrlResource + "/" + id;
        return this.http.delete(url, httpOptionsAuthorization)
            .pipe(Object(rxjs_operators_timeout__WEBPACK_IMPORTED_MODULE_5__["timeout"])(300000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ///////////////
    /*
        API calls for users
    */
    //////////////
    ApiService.prototype.registerUser = function (data) {
        var url = apiUrl + "/" + apiUrlUser + "/register";
        return this.http.post(url, data, httpOptions)
            .pipe(Object(rxjs_operators_timeout__WEBPACK_IMPORTED_MODULE_5__["timeout"])(300000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.loginUser = function (data) {
        var url = apiUrl + "/" + apiUrlUser + "/login";
        return this.http.post(url, data, httpOptions)
            .pipe(Object(rxjs_operators_timeout__WEBPACK_IMPORTED_MODULE_5__["timeout"])(300000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.getLoggedInUser = function () {
        var httpOptionsAuthorization = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            })
        };
        var url = apiUrl + "/" + apiUrlUser + "/profile";
        return this.http.get(url, httpOptionsAuthorization)
            .pipe(Object(rxjs_operators_timeout__WEBPACK_IMPORTED_MODULE_5__["timeout"])(300000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.putLoggedInUser = function (data) {
        var httpOptionsAuthorization = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            })
        };
        var url = apiUrl + "/" + apiUrlUser + "/profile";
        return this.http.put(url, data, httpOptionsAuthorization)
            .pipe(Object(rxjs_operators_timeout__WEBPACK_IMPORTED_MODULE_5__["timeout"])(300000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.getUsers = function () {
        var httpOptionsAuthorization = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            })
        };
        var url = apiUrl + "/" + apiUrlUser;
        return this.http.get(url, httpOptionsAuthorization)
            .pipe(Object(rxjs_operators_timeout__WEBPACK_IMPORTED_MODULE_5__["timeout"])(300000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.isSuperadmin = function () {
        var httpOptionsAuthorization = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            })
        };
        var url = apiUrl + "/" + apiUrlUser + "/superadmin";
        return this.http.get(url, httpOptionsAuthorization)
            .pipe(Object(rxjs_operators_timeout__WEBPACK_IMPORTED_MODULE_5__["timeout"])(300000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ///////////////
    /*
        API calls for Superadmins
    */
    //////////////
    ApiService.prototype.postOrganization = function (data) {
        var httpOptionsAuthorization = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            })
        };
        var url = apiUrl + "/" + apiUrlAdmin + "/organization";
        return this.http.post(url, data, httpOptionsAuthorization)
            .pipe(Object(rxjs_operators_timeout__WEBPACK_IMPORTED_MODULE_5__["timeout"])(300000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.getUser = function (id) {
        var httpOptionsAuthorization = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            })
        };
        var url = apiUrl + "/" + apiUrlAdmin + "/user/" + id;
        return this.http.get(url, httpOptionsAuthorization)
            .pipe(Object(rxjs_operators_timeout__WEBPACK_IMPORTED_MODULE_5__["timeout"])(300000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.postUser = function (data) {
        var httpOptionsAuthorization = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            })
        };
        var url = apiUrl + "/" + apiUrlAdmin + "/user";
        return this.http.post(url, data, httpOptionsAuthorization)
            .pipe(Object(rxjs_operators_timeout__WEBPACK_IMPORTED_MODULE_5__["timeout"])(300000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.deleteUser = function (id) {
        var httpOptionsAuthorization = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            })
        };
        var url = apiUrl + "/" + apiUrlAdmin + "/user/" + id;
        return this.http.delete(url, httpOptionsAuthorization)
            .pipe(Object(rxjs_operators_timeout__WEBPACK_IMPORTED_MODULE_5__["timeout"])(300000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.putUser = function (id, data) {
        var httpOptionsAuthorization = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            })
        };
        var url = apiUrl + "/" + apiUrlAdmin + "/user/" + id;
        return this.http.put(url, data, httpOptionsAuthorization)
            .pipe(Object(rxjs_operators_timeout__WEBPACK_IMPORTED_MODULE_5__["timeout"])(300000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    /////////////
    //// Roles
    ApiService.prototype.getUserRoles = function (roleModelType, roleModelId) {
        var httpOptionsAuthorization = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            })
        };
        var url = apiUrl + "/" + apiUrlRole + "/" + roleModelType + "/" + roleModelId;
        return this.http.get(url, httpOptionsAuthorization)
            .pipe(Object(rxjs_operators_timeout__WEBPACK_IMPORTED_MODULE_5__["timeout"])(300000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.getUserRole = function (id, roleModelType, roleModelId) {
        var httpOptionsAuthorization = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            })
        };
        var url = apiUrl + "/" + apiUrlRole + "/" + id + "/" + roleModelType + "/" + roleModelId;
        return this.http.get(url, httpOptionsAuthorization)
            .pipe(Object(rxjs_operators_timeout__WEBPACK_IMPORTED_MODULE_5__["timeout"])(300000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.putUserRole = function (id, roleModelType, roleModelId, data) {
        var httpOptionsAuthorization = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            })
        };
        var url = apiUrl + "/" + apiUrlRole + "/" + id + "/" + roleModelType + "/" + roleModelId;
        return this.http.put(url, data, httpOptionsAuthorization)
            .pipe(Object(rxjs_operators_timeout__WEBPACK_IMPORTED_MODULE_5__["timeout"])(300000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.postUserRole = function (roleModelType, roleModelId, data) {
        var httpOptionsAuthorization = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            })
        };
        var url = apiUrl + "/" + apiUrlRole + "/" + roleModelType + "/" + roleModelId;
        return this.http.post(url, data, httpOptionsAuthorization)
            .pipe(Object(rxjs_operators_timeout__WEBPACK_IMPORTED_MODULE_5__["timeout"])(300000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.deleteUserRole = function (id, roleModelType, roleModelId) {
        var httpOptionsAuthorization = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            })
        };
        var url = apiUrl + "/" + apiUrlRole + "/" + id + "/" + roleModelType + "/" + roleModelId;
        return this.http.delete(url, httpOptionsAuthorization)
            .pipe(Object(rxjs_operators_timeout__WEBPACK_IMPORTED_MODULE_5__["timeout"])(300000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/_services/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "./src/app/_services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(router, apiService) {
        this.router = router;
        this.apiService = apiService;
    }
    AuthService.prototype.clear = function () {
        localStorage.removeItem('jwtToken');
    };
    AuthService.prototype.isAuthenticated = function () {
        var authenticated = false;
        if (localStorage.getItem('jwtToken') !== undefined &&
            localStorage.getItem('jwtToken') != null) {
            authenticated = true;
        }
        return authenticated;
    };
    AuthService.prototype.isSuperAdmin = function () {
        var user = this.decode();
        if (user.superadmin !== undefined && user.superadmin == true) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.logout = function () {
        this.clear();
        this.router.navigate(['/user/login']);
    };
    AuthService.prototype.decode = function () {
        if (localStorage.getItem('jwtToken') !== undefined && localStorage.getItem('jwtToken') != null) {
            return jwt_decode__WEBPACK_IMPORTED_MODULE_2___default()(localStorage.getItem('jwtToken'));
        }
        return [];
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/admin/admin-home/admin-home.component.css":
/*!***********************************************************!*\
  !*** ./src/app/admin/admin-home/admin-home.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-grid-tile {\r\n  background: lightblue;\r\n}\r\nmat-grid-tile a{\r\n\tfont-size: 18px;\r\n}"

/***/ }),

/***/ "./src/app/admin/admin-home/admin-home.component.html":
/*!************************************************************!*\
  !*** ./src/app/admin/admin-home/admin-home.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<button mat-raised-button color=\"primary\">\r\n\t\t\t\t<a [routerLink]=\"['users']\">Manage Users</a>\r\n\t\t\t</button>\r\n\t\t\t<button mat-raised-button color=\"primary\">\r\n\t\t\t\t<a [routerLink]=\"['organization/create']\">Create organization</a>\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/admin-home/admin-home.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/admin-home/admin-home.component.ts ***!
  \**********************************************************/
/*! exports provided: AdminHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHomeComponent", function() { return AdminHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminHomeComponent = /** @class */ (function () {
    function AdminHomeComponent() {
    }
    AdminHomeComponent.prototype.ngOnInit = function () { };
    AdminHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-home',
            template: __webpack_require__(/*! ./admin-home.component.html */ "./src/app/admin/admin-home/admin-home.component.html"),
            styles: [__webpack_require__(/*! ./admin-home.component.css */ "./src/app/admin/admin-home/admin-home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminHomeComponent);
    return AdminHomeComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-organization/admin-organization-create/admin-organization-create.component.css":
/*!************************************************************************************************************!*\
  !*** ./src/app/admin/admin-organization/admin-organization-create/admin-organization-create.component.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin-organization/admin-organization-create/admin-organization-create.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/admin/admin-organization/admin-organization-create/admin-organization-create.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"button-row\">\n        <a mat-raised-button color=\"primary\" [routerLink]=\"['/admin']\"><mat-icon>list</mat-icon></a>\n    </div>\n    <form [formGroup]=\"thisForm\" (ngSubmit)=\"onFormSubmit(thisForm.value)\">\n\n        <mat-checkbox formControlName=\"locked\">Lock organization?</mat-checkbox>\n\n        <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Shortname\" formControlName=\"shortname\" [errorStateMatcher]=\"matcher\">\n            <mat-error>\n                <span *ngIf=\"f.shortname.touched && f.shortname.errors?.required\">Required</span>\n                <span *ngIf=\"f.shortname.touched && f.shortname.errors?.maxlength\">Maximum of 20 characters</span>\n                <span *ngIf=\"f.shortname.touched && f.shortname.errors?.pattern\">Only alphanumeric characters without spaces are allowed</span>\n            </mat-error>\n        </mat-form-field>\n        \n        <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"fullname\" formControlName=\"fullname\" [errorStateMatcher]=\"matcher\">\n            <mat-error>\n                <span *ngIf=\"f.fullname.touched && f.fullname.errors?.required\">Required</span>\n                <span *ngIf=\"f.fullname.touched && f.fullname.errors?.maxlength\">Maximum of 256 characters</span>\n            </mat-error>\n        </mat-form-field>\n        \n        <mat-form-field class=\"example-full-width\">\n            <input matInput type=\"email\" placeholder=\"email\" formControlName=\"email\" [errorStateMatcher]=\"matcher\">\n            <mat-error>\n                <span *ngIf=\"f.email.touched && f.email.errors?.required\">Required</span>\n                <span *ngIf=\"f.email.touched && f.email.errors?.email\">Invalid email</span>\n                <span *ngIf=\"f.email.touched && f.email.errors?.maxlength\">Maximum of 256 characters</span>\n            </mat-error>\n        </mat-form-field>\n        \n        <mat-form-field class=\"example-full-width\">\n            <textarea matInput placeholder=\"Description\" formControlName=\"description\" [errorStateMatcher]=\"matcher\"></textarea>\n            <mat-error>\n                <span *ngIf=\"f.description.touched && f.description.errors?.maxlength\">Maximum of 500 characters</span>\n            </mat-error>\n        </mat-form-field>\n\n        <!-- <label>Logo</label>\n        <br>\n        <input id=\"logo\" name=\"logo\" type=\"file\" (change)=\"fileChangeEvent($event)\" placeholder=\"Upload a file...\" /> -->\n        \n        <mat-form-field class=\"example-full-width\">\n            <textarea matInput placeholder=\"Address\" formControlName=\"address\" [errorStateMatcher]=\"matcher\"></textarea>\n            <mat-error>\n                <span *ngIf=\"f.address.touched && f.address.errors?.maxlength\">Maximum of 500 characters</span>\n            </mat-error>\n        </mat-form-field>\n        \n        <mat-form-field class=\"example-full-width\">\n            <input matInput type=\"tel\" placeholder=\"Phone\" formControlName=\"phone\" [errorStateMatcher]=\"matcher\">\n            <mat-error>\n                <span *ngIf=\"f.phone.touched && f.phone.errors?.maxlength\">Maximum of 50 characters</span>\n            </mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"country\" formControlName=\"country\" [errorStateMatcher]=\"matcher\">\n            <mat-error>\n                <span *ngIf=\"f.country.touched && f.country.errors?.maxlength\">Maximum of 50 characters</span>\n            </mat-error>\n        </mat-form-field>\n        \n        <div class=\"button-row\">\n            <button type=\"submit\" [disabled]=\"!thisForm.valid\" mat-raised-button color=\"primary\"><mat-icon>save</mat-icon></button>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/admin-organization/admin-organization-create/admin-organization-create.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/admin/admin-organization/admin-organization-create/admin-organization-create.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: AdminOrganizationCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminOrganizationCreateComponent", function() { return AdminOrganizationCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_alert_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-alert-module */ "./node_modules/angular-alert-module/fesm5/alerts.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_services/api.service */ "./src/app/_services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminOrganizationCreateComponent = /** @class */ (function () {
    function AdminOrganizationCreateComponent(alerts, route, router, api, formBuilder) {
        this.alerts = alerts;
        this.route = route;
        this.router = router;
        this.api = api;
        this.formBuilder = formBuilder;
    }
    AdminOrganizationCreateComponent.prototype.ngOnInit = function () {
        this.thisForm = this.formBuilder.group({
            'locked': [false],
            'shortname': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            'fullname': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(256)]],
            'email': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(256)]],
            'description': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(500)],
            'address': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(500)],
            'phone': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)],
            'country': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]
        });
    };
    Object.defineProperty(AdminOrganizationCreateComponent.prototype, "f", {
        get: function () { return this.thisForm.controls; },
        enumerable: true,
        configurable: true
    });
    AdminOrganizationCreateComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        this.api.postOrganization(form).subscribe(function (resp) {
            // Ok
            if (resp['success'] !== undefined && resp['success'] == true) {
                _this.alerts.setMessage(resp['msg'], 'success');
            }
            else {
                var error = ('error' in resp) ? resp['error'] : '';
                var errorMsg = ('msg' in resp) ? resp['msg'] : '';
                // Duplicate unique fields
                if (error && error.code == 11000) {
                    var errorField = '';
                    for (var fieldKey in error.field) {
                        errorField = fieldKey;
                    }
                    _this.alerts.setMessage('Field must be unique: ' + errorField, 'error');
                }
                else if (errorMsg) {
                    _this.alerts.setMessage(errorMsg, 'error');
                }
            }
            _this.router.navigate(['/organizations']);
        }, function (err) {
            if (err['status'] == 401) {
                localStorage.clear();
                _this.router.navigate(['/user/login']);
            }
        });
    };
    AdminOrganizationCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-organization-create',
            template: __webpack_require__(/*! ./admin-organization-create.component.html */ "./src/app/admin/admin-organization/admin-organization-create/admin-organization-create.component.html"),
            styles: [__webpack_require__(/*! ./admin-organization-create.component.css */ "./src/app/admin/admin-organization/admin-organization-create/admin-organization-create.component.css")]
        }),
        __metadata("design:paramtypes", [angular_alert_module__WEBPACK_IMPORTED_MODULE_3__["AlertsService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], AdminOrganizationCreateComponent);
    return AdminOrganizationCreateComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-outlet/admin-outlet.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin/admin-outlet/admin-outlet.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-grid-tile {\r\n  background: lightblue;\r\n}\r\nmat-grid-tile a{\r\n\tfont-size: 18px;\r\n}"

/***/ }),

/***/ "./src/app/admin/admin-outlet/admin-outlet.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin/admin-outlet/admin-outlet.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/admin/admin-outlet/admin-outlet.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/admin-outlet/admin-outlet.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminOutletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminOutletComponent", function() { return AdminOutletComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminOutletComponent = /** @class */ (function () {
    function AdminOutletComponent() {
    }
    AdminOutletComponent.prototype.ngOnInit = function () { };
    AdminOutletComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-outlet',
            template: __webpack_require__(/*! ./admin-outlet.component.html */ "./src/app/admin/admin-outlet/admin-outlet.component.html"),
            styles: [__webpack_require__(/*! ./admin-outlet.component.css */ "./src/app/admin/admin-outlet/admin-outlet.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminOutletComponent);
    return AdminOutletComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_outlet_admin_outlet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-outlet/admin-outlet.component */ "./src/app/admin/admin-outlet/admin-outlet.component.ts");
/* harmony import */ var _admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-home/admin-home.component */ "./src/app/admin/admin-home/admin-home.component.ts");
/* harmony import */ var _admin_user_admin_user_create_admin_user_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-user/admin-user-create/admin-user-create.component */ "./src/app/admin/admin-user/admin-user-create/admin-user-create.component.ts");
/* harmony import */ var _admin_user_admin_user_list_admin_user_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-user/admin-user-list/admin-user-list.component */ "./src/app/admin/admin-user/admin-user-list/admin-user-list.component.ts");
/* harmony import */ var _admin_user_admin_user_detail_admin_user_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-user/admin-user-detail/admin-user-detail.component */ "./src/app/admin/admin-user/admin-user-detail/admin-user-detail.component.ts");
/* harmony import */ var _admin_organization_admin_organization_create_admin_organization_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin-organization/admin-organization-create/admin-organization-create.component */ "./src/app/admin/admin-organization/admin-organization-create/admin-organization-create.component.ts");
/* harmony import */ var _guards_admin_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_guards/admin-guard.service */ "./src/app/_guards/admin-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: 'admin',
        component: _admin_outlet_admin_outlet_component__WEBPACK_IMPORTED_MODULE_2__["AdminOutletComponent"],
        canActivate: [_guards_admin_guard_service__WEBPACK_IMPORTED_MODULE_8__["AdminGuard"]],
        children: [
            {
                path: '',
                component: _admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_3__["AdminHomeComponent"]
            },
            {
                path: 'users',
                component: _admin_user_admin_user_list_admin_user_list_component__WEBPACK_IMPORTED_MODULE_5__["AdminUserListComponent"]
            },
            {
                path: 'users/create',
                component: _admin_user_admin_user_create_admin_user_create_component__WEBPACK_IMPORTED_MODULE_4__["AdminUserCreateComponent"]
            },
            {
                path: 'users/:id/detail',
                component: _admin_user_admin_user_detail_admin_user_detail_component__WEBPACK_IMPORTED_MODULE_6__["AdminUserDetailComponent"]
            },
            {
                path: 'org/create',
                component: _admin_organization_admin_organization_create_admin_organization_create_component__WEBPACK_IMPORTED_MODULE_7__["AdminOrganizationCreateComponent"]
            },
        ]
    }
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/admin-user/admin-user-create/admin-user-create.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/admin/admin-user/admin-user-create/admin-user-create.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin-user/admin-user-create/admin-user-create.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/admin/admin-user/admin-user-create/admin-user-create.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"button-row\">\n        <a mat-raised-button color=\"primary\" [routerLink]=\"['/users']\"><mat-icon>list</mat-icon></a>\n    </div>\n    <form [formGroup]=\"thisForm\" (ngSubmit)=\"onFormSubmit(thisForm.value)\">\n    \n        <div class=\"button-row\">\n            <button type=\"submit\" [disabled]=\"!thisForm.valid\" mat-raised-button color=\"primary\"><mat-icon>save</mat-icon></button>\n        </div>\n        \n        <mat-checkbox formControlName=\"blocked\">Block user?</mat-checkbox>\n        <mat-checkbox formControlName=\"approved\">Approve user?</mat-checkbox>\n\n        <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Firstname\" formControlName=\"firstname\" [errorStateMatcher]=\"matcher\">\n            <mat-error>\n                <span *ngIf=\"f.firstname.touched && f.firstname.errors?.required\">Required</span>\n                <span *ngIf=\"f.firstname.touched && f.firstname.errors?.maxlength\">Maximum of 50 characters</span>\n            </mat-error>\n        </mat-form-field>\n        \n        <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Lastname\" formControlName=\"lastname\" [errorStateMatcher]=\"matcher\">\n            <mat-error>\n                <span *ngIf=\"f.lastname.touched && f.lastname.errors?.required\">Required</span>\n                <span *ngIf=\"f.lastname.touched && f.lastname.errors?.maxlength\">Maximum of 50 characters</span>\n            </mat-error>\n        </mat-form-field>\n        \n        <mat-form-field class=\"example-full-width\">\n            <input matInput type=\"email\" placeholder=\"Email\" formControlName=\"email\" [errorStateMatcher]=\"matcher\">\n            <mat-error>\n                <span *ngIf=\"f.email.touched && f.email.errors?.required\">Required</span>\n                <span *ngIf=\"f.email.touched && f.email.errors?.email\">Invalid email</span>\n                <span *ngIf=\"f.email.touched && f.email.errors?.maxlength\">Maximum of 256 characters</span>\n            </mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Password\" formControlName=\"password\" [errorStateMatcher]=\"matcher\">\n            <mat-error>\n                <span *ngIf=\"f.password.touched && f.password.errors?.required\">Required</span>\n                <span *ngIf=\"f.password.touched && f.password.errors?.minlength\">Minimum 6 characters</span>\n            </mat-error>\n        </mat-form-field>\n        \n        <div class=\"button-row\">\n            <button type=\"submit\" [disabled]=\"!thisForm.valid\" mat-raised-button color=\"primary\"><mat-icon>save</mat-icon></button>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/admin-user/admin-user-create/admin-user-create.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/admin/admin-user/admin-user-create/admin-user-create.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AdminUserCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUserCreateComponent", function() { return AdminUserCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_alert_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-alert-module */ "./node_modules/angular-alert-module/fesm5/alerts.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_services/api.service */ "./src/app/_services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminUserCreateComponent = /** @class */ (function () {
    function AdminUserCreateComponent(alerts, route, router, api, formBuilder) {
        this.alerts = alerts;
        this.route = route;
        this.router = router;
        this.api = api;
        this.formBuilder = formBuilder;
    }
    AdminUserCreateComponent.prototype.ngOnInit = function () {
        this.thisForm = this.formBuilder.group({
            'blocked': [null],
            'approved': [null],
            'password': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            'firstname': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)],
            'lastname': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)],
            'email': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(256)]]
        });
    };
    Object.defineProperty(AdminUserCreateComponent.prototype, "f", {
        get: function () { return this.thisForm.controls; },
        enumerable: true,
        configurable: true
    });
    AdminUserCreateComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        this.api.postUser(form).subscribe(function (resp) {
            // Ok
            if (resp['success'] !== undefined && resp['success'] == true) {
                _this.alerts.setMessage(resp['msg'], 'success');
            }
            else {
                var error = ('error' in resp) ? resp['error'] : '';
                var errorMsg = ('msg' in resp) ? resp['msg'] : '';
                // Duplicate unique fields
                if (error && error.code == 11000) {
                    var errorField = '';
                    for (var fieldKey in error.field) {
                        errorField = fieldKey;
                    }
                    _this.alerts.setMessage('Field must be unique: ' + errorField, 'error');
                }
                else if (errorMsg) {
                    _this.alerts.setMessage(errorMsg, 'error');
                }
            }
            _this.router.navigate(['/admin/users']);
        }, function (err) {
            if (err['status'] == 401) {
                localStorage.clear();
                _this.router.navigate(['/user/login']);
            }
        });
    };
    AdminUserCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-user-create',
            template: __webpack_require__(/*! ./admin-user-create.component.html */ "./src/app/admin/admin-user/admin-user-create/admin-user-create.component.html"),
            styles: [__webpack_require__(/*! ./admin-user-create.component.css */ "./src/app/admin/admin-user/admin-user-create/admin-user-create.component.css")]
        }),
        __metadata("design:paramtypes", [angular_alert_module__WEBPACK_IMPORTED_MODULE_3__["AlertsService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], AdminUserCreateComponent);
    return AdminUserCreateComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-user/admin-user-detail/admin-user-detail.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/admin/admin-user/admin-user-detail/admin-user-detail.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin-user/admin-user-detail/admin-user-detail.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/admin/admin-user/admin-user-detail/admin-user-detail.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"button-row\">\n        <a mat-raised-button color=\"primary\" routerLink=\"/admin/users\"><mat-icon>list</mat-icon></a>\n        <a mat-raised-button color=\"warn\" (click)=\"deleteEntry()\"><mat-icon>delete_forever</mat-icon></a>\n    </div>\n    <form [formGroup]=\"thisForm\" (ngSubmit)=\"onFormSubmit(thisForm.value)\">\n    \n        <div class=\"button-row\">\n            <button type=\"submit\" [disabled]=\"!thisForm.valid\" mat-raised-button color=\"primary\"><mat-icon>save</mat-icon></button>\n        </div>\n        \n        <mat-checkbox formControlName=\"blocked\">Block user?</mat-checkbox>\n        <mat-checkbox formControlName=\"approved\">Approve user?</mat-checkbox>\n\n        <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Firstname\" formControlName=\"firstname\" [errorStateMatcher]=\"matcher\">\n            <mat-error>\n                <span *ngIf=\"f.firstname.touched && f.firstname.errors?.required\">Required</span>\n                <span *ngIf=\"f.firstname.touched && f.firstname.errors?.maxlength\">Maximum of 50 characters</span>\n            </mat-error>\n        </mat-form-field>\n        \n        <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Lastname\" formControlName=\"lastname\" [errorStateMatcher]=\"matcher\">\n            <mat-error>\n                <span *ngIf=\"f.lastname.touched && f.lastname.errors?.required\">Required</span>\n                <span *ngIf=\"f.lastname.touched && f.lastname.errors?.maxlength\">Maximum of 50 characters</span>\n            </mat-error>\n        </mat-form-field>\n        \n        <mat-form-field class=\"example-full-width\">\n            <input matInput type=\"email\" placeholder=\"Email\" formControlName=\"email\" [errorStateMatcher]=\"matcher\">\n            <mat-error>\n                <span *ngIf=\"f.email.touched && f.email.errors?.required\">Required</span>\n                <span *ngIf=\"f.email.touched && f.email.errors?.email\">Invalid email</span>\n                <span *ngIf=\"f.email.touched && f.email.errors?.maxlength\">Maximum of 256 characters</span>\n            </mat-error>\n        </mat-form-field>\n        \n        <mat-form-field class=\"example-full-width\">\n            <input matInput type=\"email\" placeholder=\"Password\" formControlName=\"password\">\n        </mat-form-field>\n        \n        <div class=\"button-row\">\n            <button type=\"submit\" [disabled]=\"!thisForm.valid\" mat-raised-button color=\"primary\"><mat-icon>save</mat-icon></button>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/admin/admin-user/admin-user-detail/admin-user-detail.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/admin/admin-user/admin-user-detail/admin-user-detail.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AdminUserDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUserDetailComponent", function() { return AdminUserDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_services/api.service */ "./src/app/_services/api.service.ts");
/* harmony import */ var _dialogs_dialog_delete_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_dialogs/dialog-delete.component */ "./src/app/_dialogs/dialog-delete.component.ts");
/* harmony import */ var angular_alert_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-alert-module */ "./node_modules/angular-alert-module/fesm5/alerts.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AdminUserDetailComponent = /** @class */ (function () {
    function AdminUserDetailComponent(router, route, api, formBuilder, dialog, alerts) {
        this.router = router;
        this.route = route;
        this.api = api;
        this.formBuilder = formBuilder;
        this.dialog = dialog;
        this.alerts = alerts;
        this.data = [];
        this.currentPassword = '';
    }
    AdminUserDetailComponent.prototype.ngOnInit = function () {
        // Create form
        this.thisForm = this.formBuilder.group({
            'blocked': [null],
            'approved': [null],
            'firstname': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)],
            'lastname': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)],
            'email': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(256)]],
            'password': [null]
        });
        // Get data
        this.getData(this.route.snapshot.params['id']);
    };
    Object.defineProperty(AdminUserDetailComponent.prototype, "f", {
        get: function () { return this.thisForm.controls; },
        enumerable: true,
        configurable: true
    });
    // Get data via API
    AdminUserDetailComponent.prototype.getData = function (id) {
        var _this = this;
        this.api.getUser(id).subscribe(function (resp) {
            // Error
            if (resp['success'] !== undefined && resp['success'] == false) {
                _this.alerts.setMessage(resp['msg'], 'error');
                _this.router.navigate(['/admin/users']);
            }
            // Error
            if (resp['data'] == undefined || !Object.keys(resp['data']).length) {
                _this.alerts.setMessage('Error fetching data', 'error');
                _this.router.navigate(['/admin/users']);
            }
            // Save a copy of the data to be used locally
            _this.data = resp['data'];
            // Save a copy of the current password
            _this.currentPassword = resp['data'].password;
            // Update the form values
            _this.thisForm.setValue({
                blocked: (resp['data'].blocked !== undefined && resp['data'].blocked) ? resp['data'].blocked : false,
                approved: (resp['data'].approved !== undefined && resp['data'].approved) ? resp['data'].approved : false,
                firstname: (resp['data'].firstname !== undefined && resp['data'].firstname) ? resp['data'].firstname : false,
                lastname: (resp['data'].lastname !== undefined && resp['data'].lastname) ? resp['data'].lastname : '',
                email: (resp['data'].email !== undefined && resp['data'].email) ? resp['data'].email : '',
                password: ''
            });
        }, function (err) {
            if (err['status'] == 401) {
                localStorage.clear();
                _this.router.navigate(['/user/login']);
            }
        });
    };
    // Form submit
    AdminUserDetailComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        // Update user via API
        this.api.putUser(this.data['_id'], form).subscribe(function (resp) {
            // Ok
            if (resp['success'] !== undefined && resp['success'] == true) {
                _this.alerts.setMessage(resp['msg'], 'success');
            }
            else {
                var error = ('error' in resp) ? resp['error'] : '';
                var errorMsg = ('msg' in resp) ? resp['msg'] : '';
                // Duplicate unique fields
                if (error && error.code == 11000) {
                    var errorField = '';
                    for (var fieldKey in error.field) {
                        errorField = fieldKey;
                    }
                    _this.alerts.setMessage('Field must be unique: ' + errorField, 'error');
                }
                else if (errorMsg) {
                    _this.alerts.setMessage(errorMsg, 'error');
                }
                else {
                    _this.alerts.setMessage('Error', 'error');
                }
            }
        }, function (err) {
            if (err['status'] == 401) {
                localStorage.clear();
                _this.router.navigate(['/user/login']);
            }
        });
    };
    // Delete entry
    AdminUserDetailComponent.prototype.deleteEntry = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_dialog_delete_component__WEBPACK_IMPORTED_MODULE_5__["DialogDeleteComponent"]);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result !== undefined && result == true) {
                // Call the API to delete the user
                _this.api.deleteUser(_this.data['_id'])
                    .subscribe(function (resp) {
                    // Success
                    if (resp['success'] !== undefined && resp['success'] == true) {
                        _this.alerts.setMessage(resp['msg'], 'success');
                        _this.router.navigate(['/admin/users']);
                    }
                    else
                        _this.alerts.setMessage(resp['msg'], 'error');
                }, function (err) {
                    if (err['status'] == 401) {
                        localStorage.clear();
                        _this.router.navigate(['/user/login']);
                    }
                });
            }
        });
    };
    AdminUserDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-user-detail',
            template: __webpack_require__(/*! ./admin-user-detail.component.html */ "./src/app/admin/admin-user/admin-user-detail/admin-user-detail.component.html"),
            styles: [__webpack_require__(/*! ./admin-user-detail.component.css */ "./src/app/admin/admin-user/admin-user-detail/admin-user-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], angular_alert_module__WEBPACK_IMPORTED_MODULE_6__["AlertsService"]])
    ], AdminUserDetailComponent);
    return AdminUserDetailComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-user/admin-user-list/admin-user-list.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/admin/admin-user/admin-user-list/admin-user-list.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin-user/admin-user-list/admin-user-list.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/admin/admin-user/admin-user-list/admin-user-list.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"button-row\">\n        <a mat-raised-button color=\"primary\" [routerLink]=\"['/admin/users/create']\"><mat-icon>add</mat-icon></a>\n    </div>\n    <div class=\"example-container mat-elevation-z8\">\n        <table mat-table #table matSort [dataSource]=\"dataSource\">\n            \n            <ng-container matColumnDef=\"edit\">\n                <th mat-header-cell *matHeaderCellDef>Edit</th>\n                <td mat-cell *matCellDef=\"let element\">\n                    <a mat-icon-button color=\"primary\" [routerLink]=\"['/admin', 'users',element._id,'detail']\">\n                        <mat-icon class=\"mat-18\">edit</mat-icon>\n                    </a>\n                </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"blocked\">\n                <th mat-header-cell *matHeaderCellDef>blocked</th>\n                <td mat-cell *matCellDef=\"let element\">{{element.blocked}} </td>\n            </ng-container>\n            <ng-container matColumnDef=\"firstname\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>firstname</th>\n                <td mat-cell *matCellDef=\"let element\">{{element.firstname}}</td>\n            </ng-container>\n            <ng-container matColumnDef=\"lastname\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>lastname</th>\n                <td mat-cell *matCellDef=\"let element\">{{element.lastname}}</td>\n            </ng-container>\n            <ng-container matColumnDef=\"email\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>email</th>\n                <td mat-cell *matCellDef=\"let element\">{{element.email}}</td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        </table>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/admin-user/admin-user-list/admin-user-list.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/admin-user/admin-user-list/admin-user-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AdminUserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUserListComponent", function() { return AdminUserListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_services/api.service */ "./src/app/_services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminUserListComponent = /** @class */ (function () {
    function AdminUserListComponent(api, router) {
        this.api = api;
        this.router = router;
        // Columns to display
        this.displayedColumns = [
            'edit',
            'blocked',
            'firstname',
            'lastname',
            'email'
        ];
        // Source for the table data
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
    }
    AdminUserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Provide sorting to the data source
        this.dataSource.sort = this.sort;
        // Get the data
        this.api.getUsers().subscribe(function (resp) {
            // Populate the data source
            if (resp['success'] !== undefined && resp['success'] == true
                && resp['data'] !== undefined) {
                _this.dataSource.data = resp['data'];
            }
        }, function (err) {
            if (err['status'] == 401) {
                localStorage.clear();
                _this.router.navigate(['/user/login']);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], AdminUserListComponent.prototype, "sort", void 0);
    AdminUserListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-user-list',
            template: __webpack_require__(/*! ./admin-user-list.component.html */ "./src/app/admin/admin-user/admin-user-list/admin-user-list.component.html"),
            styles: [__webpack_require__(/*! ./admin-user-list.component.css */ "./src/app/admin/admin-user/admin-user-list/admin-user-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AdminUserListComponent);
    return AdminUserListComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialogs_dialog_delete_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_dialogs/dialog-delete.component */ "./src/app/_dialogs/dialog-delete.component.ts");
/* harmony import */ var _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_guards/auth-guard.service */ "./src/app/_guards/auth-guard.service.ts");
/* harmony import */ var _guards_admin_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_guards/admin-guard.service */ "./src/app/_guards/admin-guard.service.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _admin_outlet_admin_outlet_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin-outlet/admin-outlet.component */ "./src/app/admin/admin-outlet/admin-outlet.component.ts");
/* harmony import */ var _admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin-home/admin-home.component */ "./src/app/admin/admin-home/admin-home.component.ts");
/* harmony import */ var _admin_user_admin_user_create_admin_user_create_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin-user/admin-user-create/admin-user-create.component */ "./src/app/admin/admin-user/admin-user-create/admin-user-create.component.ts");
/* harmony import */ var _admin_user_admin_user_list_admin_user_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin-user/admin-user-list/admin-user-list.component */ "./src/app/admin/admin-user/admin-user-list/admin-user-list.component.ts");
/* harmony import */ var _admin_user_admin_user_detail_admin_user_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin-user/admin-user-detail/admin-user-detail.component */ "./src/app/admin/admin-user/admin-user-detail/admin-user-detail.component.ts");
/* harmony import */ var _admin_organization_admin_organization_create_admin_organization_create_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin-organization/admin-organization-create/admin-organization-create.component */ "./src/app/admin/admin-organization/admin-organization-create/admin-organization-create.component.ts");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/admin/admin-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Generic imports






// Standard imports for all routes




// Admin specific imports







var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_16__["AdminRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"]
            ],
            declarations: [
                _admin_outlet_admin_outlet_component__WEBPACK_IMPORTED_MODULE_10__["AdminOutletComponent"],
                _admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_11__["AdminHomeComponent"],
                _admin_user_admin_user_create_admin_user_create_component__WEBPACK_IMPORTED_MODULE_12__["AdminUserCreateComponent"],
                _admin_user_admin_user_list_admin_user_list_component__WEBPACK_IMPORTED_MODULE_13__["AdminUserListComponent"],
                _admin_user_admin_user_detail_admin_user_detail_component__WEBPACK_IMPORTED_MODULE_14__["AdminUserDetailComponent"],
                _admin_organization_admin_organization_create_admin_organization_create_component__WEBPACK_IMPORTED_MODULE_15__["AdminOrganizationCreateComponent"]
            ],
            providers: [
                _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"],
                _guards_admin_guard_service__WEBPACK_IMPORTED_MODULE_8__["AdminGuard"]
            ],
            entryComponents: [_dialogs_dialog_delete_component__WEBPACK_IMPORTED_MODULE_6__["DialogDeleteComponent"]]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<app-alerts></app-alerts>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var angular_alert_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-alert-module */ "./node_modules/angular-alert-module/fesm5/alerts.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_guards/auth-guard.service */ "./src/app/_guards/auth-guard.service.ts");
/* harmony import */ var _guards_admin_guard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_guards/admin-guard.service */ "./src/app/_guards/admin-guard.service.ts");
/* harmony import */ var _guards_redirect_login_guard_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_guards/redirect-login-guard.service */ "./src/app/_guards/redirect-login-guard.service.ts");
/* harmony import */ var _dialogs_dialog_delete_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_dialogs/dialog-delete.component */ "./src/app/_dialogs/dialog-delete.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _organization_organization_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./organization/organization.module */ "./src/app/organization/organization.module.ts");
/* harmony import */ var _project_project_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./project/project.module */ "./src/app/project/project.module.ts");
/* harmony import */ var _resource_resource_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./resource/resource.module */ "./src/app/resource/resource.module.ts");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _role_role_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./role/role.module */ "./src/app/role/role.module.ts");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin/admin.module */ "./src/app/admin/admin.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














// Modules






var appRoutes = [
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"],
        data: { title: 'Dashboard' },
        canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
    },
    {
        path: '',
        redirectTo: '/organizations',
        pathMatch: 'full'
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"],
                _dialogs_dialog_delete_component__WEBPACK_IMPORTED_MODULE_12__["DialogDeleteComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes),
                angular_alert_module__WEBPACK_IMPORTED_MODULE_7__["AlertsModule"].forRoot(),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _organization_organization_module__WEBPACK_IMPORTED_MODULE_14__["OrganizationModule"],
                _project_project_module__WEBPACK_IMPORTED_MODULE_15__["ProjectModule"],
                _resource_resource_module__WEBPACK_IMPORTED_MODULE_16__["ResourceModule"],
                _user_user_module__WEBPACK_IMPORTED_MODULE_17__["UserModule"],
                _role_role_module__WEBPACK_IMPORTED_MODULE_18__["RoleModule"],
                _admin_admin_module__WEBPACK_IMPORTED_MODULE_19__["AdminModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"]
            ],
            providers: [
                _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"],
                _guards_admin_guard_service__WEBPACK_IMPORTED_MODULE_10__["AdminGuard"],
                _guards_redirect_login_guard_service__WEBPACK_IMPORTED_MODULE_11__["RedirectLoginGuard"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            entryComponents: [_dialogs_dialog_delete_component__WEBPACK_IMPORTED_MODULE_12__["DialogDeleteComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/components/footer/footer.component.css":
/*!*************************************************************!*\
  !*** ./src/app/core/components/footer/footer.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/components/footer/footer.component.html":
/*!**************************************************************!*\
  !*** ./src/app/core/components/footer/footer.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/components/footer/footer.component.ts":
/*!************************************************************!*\
  !*** ./src/app/core/components/footer/footer.component.ts ***!
  \************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/core/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/core/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/core/components/header/header.component.css":
/*!*************************************************************!*\
  !*** ./src/app/core/components/header/header.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/components/header/header.component.html":
/*!**************************************************************!*\
  !*** ./src/app/core/components/header/header.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <div class=\"container\">\n        <a class=\"navbar-brand\" routerLink=\"/\">{{siteTitle}}</a>\n\n        <button *ngIf=\"!this.hideMenu\" class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n\n        <div *ngIf=\"!this.hideMenu\" class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n            <ul class=\"nav navbar-nav mr-auto\">\n                <li class=\"nav-item\" routerLinkActive=\"active\">\n                    <a class=\"nav-link\" routerLink=\"/dashboard\">Dashboard</a>\n                </li>\n                <li class=\"nav-item\" routerLinkActive=\"active\">\n                    <a class=\"nav-link\" routerLink=\"/organizations\">Organizations</a>\n                </li>\n            </ul>\n            <ul class=\"nav navbar-nav ml-auto\">\n                <li class=\"nav-item\" routerLinkActive=\"active\">\n                    <a class=\"nav-link\" routerLink=\"/user/profile\">Profile</a>\n                </li>\n                <li *ngIf=\"this.isSuperAdmin\" class=\"nav-item\" routerLinkActive=\"active\">\n                    <a class=\"nav-link\" routerLink=\"/admin\">Admin</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" (click)=\"logout()\">Logout</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/core/components/header/header.component.ts":
/*!************************************************************!*\
  !*** ./src/app/core/components/header/header.component.ts ***!
  \************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_services/auth.service */ "./src/app/_services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService, router, route) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.hideMenu = false;
        this.isSuperAdmin = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        // Hide menu for non-logged in users
        if (!this.authService.isAuthenticated()) {
            this.hideMenu = true;
        }
        // Show the admin link for the super admin
        if (this.authService.isSuperAdmin()) {
            this.isSuperAdmin = true;
        }
    };
    HeaderComponent.prototype.logout = function () {
        this.authService.logout();
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/core/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/core/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/core/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/core/components/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            providers: [],
            declarations: [
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]
            ],
            exports: [
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]
            ],
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-row {\r\n  margin: 10px 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/organization/organization-detail/organization-detail.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/organization/organization-detail/organization-detail.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/organization/organization-detail/organization-detail.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/organization/organization-detail/organization-detail.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"button-row\">\n        <a mat-raised-button color=\"primary\" routerLink=\"/organizations\"><mat-icon>list</mat-icon></a>\n        <a mat-raised-button color=\"warn\" (click)=\"deleteEntry()\"><mat-icon>delete_forever</mat-icon></a>\n    </div>\n    <form [formGroup]=\"thisForm\" (ngSubmit)=\"onFormSubmit(thisForm.value)\">\n    \n        <div class=\"button-row\">\n            <button type=\"submit\" [disabled]=\"!thisForm.valid\" mat-raised-button color=\"primary\"><mat-icon>save</mat-icon></button>\n        </div>\n\n        <div class=\"button-row\">\n            <a *ngIf=\"!organizationLocked\" mat-raised-button color=\"warn\" (click)=\"lockEntry()\"><mat-icon>lock</mat-icon></a>\n            <a *ngIf=\"organizationLocked\" mat-raised-button color=\"warn\" (click)=\"unlockEntry()\"><mat-icon>lock_open</mat-icon></a>\n        </div>\n\n        <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Shortname\" formControlName=\"shortname\" [errorStateMatcher]=\"matcher\">\n            <mat-error>\n                <span *ngIf=\"f.shortname.touched && f.shortname.errors?.required\">Required</span>\n                <span *ngIf=\"f.shortname.touched && f.shortname.errors?.maxlength\">Maximum of 20 characters</span>\n                <span *ngIf=\"f.shortname.touched && f.shortname.errors?.pattern\">Only alphanumeric characters without spaces are allowed</span>\n            </mat-error>\n        </mat-form-field>\n        \n        <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Fullname\" formControlName=\"fullname\" [errorStateMatcher]=\"matcher\">\n            <mat-error>\n                <span *ngIf=\"f.fullname.touched && f.fullname.errors?.required\">Required</span>\n                <span *ngIf=\"f.fullname.touched && f.fullname.errors?.maxlength\">Maximum of 256 characters</span>\n            </mat-error>\n        </mat-form-field>\n        \n        <mat-form-field class=\"example-full-width\">\n            <input matInput type=\"email\" placeholder=\"Email\" formControlName=\"email\" [errorStateMatcher]=\"matcher\">\n            <mat-error>\n                <span *ngIf=\"f.email.touched && f.email.errors?.required\">Required</span>\n                <span *ngIf=\"f.email.touched && f.email.errors?.email\">Invalid email</span>\n                <span *ngIf=\"f.email.touched && f.email.errors?.maxlength\">Maximum of 256 characters</span>\n            </mat-error>\n        </mat-form-field>\n        \n        <mat-form-field class=\"example-full-width\">\n            <textarea matInput placeholder=\"Description\" formControlName=\"description\" [errorStateMatcher]=\"matcher\">\n            </textarea>\n            <mat-error>\n                <span *ngIf=\"f.description.touched && f.description.errors?.maxlength\">Maximum of 500 characters</span>\n            </mat-error>\n        </mat-form-field>\n        \n        <mat-form-field class=\"example-full-width\">\n            <textarea matInput placeholder=\"Address\" formControlName=\"address\" [errorStateMatcher]=\"matcher\">\n            </textarea>\n            <mat-error>\n                <span *ngIf=\"f.address.touched && f.address.errors?.maxlength\">Maximum of 500 characters</span>\n            </mat-error>\n        </mat-form-field>\n        \n        <mat-form-field class=\"example-full-width\">\n            <input matInput type=\"tel\" placeholder=\"Phone\" formControlName=\"phone\" [errorStateMatcher]=\"matcher\">\n            <mat-error>\n                <span *ngIf=\"f.phone.touched && f.phone.errors?.maxlength\">Maximum of 50 characters</span>\n            </mat-error>\n        </mat-form-field>\n        \n        <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Country\" formControlName=\"country\" [errorStateMatcher]=\"matcher\">\n            <mat-error>\n                <span *ngIf=\"f.country.touched && f.country.errors?.maxlength\">Maximum of 50 characters</span>\n            </mat-error>\n        </mat-form-field>\n        \n        <div class=\"button-row\">\n            <button type=\"submit\" [disabled]=\"!thisForm.valid\" mat-raised-button color=\"primary\"><mat-icon>save</mat-icon></button>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/organization/organization-detail/organization-detail.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/organization/organization-detail/organization-detail.component.ts ***!
  \***********************************************************************************/
/*! exports provided: OrganizationDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationDetailComponent", function() { return OrganizationDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/api.service */ "./src/app/_services/api.service.ts");
/* harmony import */ var _dialogs_dialog_delete_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_dialogs/dialog-delete.component */ "./src/app/_dialogs/dialog-delete.component.ts");
/* harmony import */ var angular_alert_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-alert-module */ "./node_modules/angular-alert-module/fesm5/alerts.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OrganizationDetailComponent = /** @class */ (function () {
    function OrganizationDetailComponent(router, route, api, formBuilder, dialog, alerts) {
        this.router = router;
        this.route = route;
        this.api = api;
        this.formBuilder = formBuilder;
        this.dialog = dialog;
        this.alerts = alerts;
        this.organizationData = [];
        this.organizationLocked = false;
    }
    OrganizationDetailComponent.prototype.ngOnInit = function () {
        // Get data
        this.getData(this.route.snapshot.params['id']);
        // Create form
        this.thisForm = this.formBuilder.group({
            'shortname': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z0-9]*')]],
            'fullname': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(256)]],
            'email': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(256)]],
            'description': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(500)],
            'address': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(500)],
            'phone': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)],
            'country': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]
        });
    };
    Object.defineProperty(OrganizationDetailComponent.prototype, "f", {
        get: function () { return this.thisForm.controls; },
        enumerable: true,
        configurable: true
    });
    // Get data via API
    OrganizationDetailComponent.prototype.getData = function (id) {
        var _this = this;
        this.api.getOrganization(id).subscribe(function (resp) {
            // Errors
            if (resp['success'] === undefined || resp['success'] == false) {
                _this.alerts.setMessage(resp['msg'], 'error');
                _this.router.navigate(['/organizations']);
            }
            else if (resp['data'] === undefined || !Object.keys(resp['data']).length) {
                _this.alerts.setMessage('Error fetching data', 'error');
                _this.router.navigate(['/organizations']);
            }
            else {
                // Save a copy of the data to be used locally
                _this.organizationData = resp['data'];
                // Locked status
                _this.organizationLocked = (resp['data'].locked != null && resp['data'].locked == true) ? true : false;
                // Update the form values
                _this.thisForm.setValue({
                    shortname: (resp['data'].shortname != null && resp['data'].shortname) ? resp['data'].shortname : '',
                    fullname: (resp['data'].fullname != null && resp['data'].fullname) ? resp['data'].fullname : '',
                    email: (resp['data'].email != null && resp['data'].email) ? resp['data'].email : '',
                    description: (resp['data'].description != null && resp['data'].description) ? resp['data'].description : '',
                    address: (resp['data'].address != null && resp['data'].address) ? resp['data'].address : '',
                    phone: (resp['data'].phone != null && resp['data'].phone) ? resp['data'].phone : '',
                    country: (resp['data'].country != null && resp['data'].country) ? resp['data'].country : ''
                });
            }
        }, function (err) {
            if (err['status'] == 401) {
                localStorage.clear();
                _this.router.navigate(['/user/login']);
            }
        });
    };
    // Form submit
    OrganizationDetailComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        // Update via API
        this.api.putOrganization(this.organizationData['_id'], form).subscribe(function (resp) {
            // Ok
            if (resp['success'] !== undefined && resp['success'] == true) {
                _this.alerts.setMessage(resp['msg'], 'success');
            }
            else {
                var error = ('error' in resp) ? resp['error'] : '';
                var errorMsg = ('msg' in resp) ? resp['msg'] : '';
                // Duplicate unique fields
                if (error && error.code == 11000) {
                    var errorField = '';
                    for (var fieldKey in error.field) {
                        errorField = fieldKey;
                    }
                    _this.alerts.setMessage('Field must be unique: ' + errorField, 'error');
                }
                else if (errorMsg) {
                    _this.alerts.setMessage(errorMsg, 'error');
                }
            }
        }, function (err) {
            if (err['status'] == 401) {
                localStorage.clear();
                _this.router.navigate(['/user/login']);
            }
        });
    };
    // Lock entry
    OrganizationDetailComponent.prototype.lockEntry = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_dialog_delete_component__WEBPACK_IMPORTED_MODULE_5__["DialogDeleteComponent"]);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result !== undefined && result == true) {
                // Call the API to delete the organization and its projects
                _this.api.lockOrganization(_this.organizationData['_id'])
                    .subscribe(function (resp) {
                    // Success
                    if (resp['success'] !== undefined && resp['success'] == true) {
                        _this.alerts.setMessage(resp['msg'], 'success');
                        _this.router.navigate(['/organizations']);
                    }
                    else
                        _this.alerts.setMessage(resp['msg'], 'error');
                }, function (err) {
                    if (err['status'] == 401) {
                        _this.router.navigate(['/user/login']);
                    }
                });
            }
        });
    };
    // Unlock entry
    OrganizationDetailComponent.prototype.unlockEntry = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_dialog_delete_component__WEBPACK_IMPORTED_MODULE_5__["DialogDeleteComponent"]);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result !== undefined && result == true) {
                // Call the API to delete the organization and its projects
                _this.api.unlockOrganization(_this.organizationData['_id'])
                    .subscribe(function (resp) {
                    // Success
                    if (resp['success'] !== undefined && resp['success'] == true) {
                        _this.alerts.setMessage(resp['msg'], 'success');
                        _this.router.navigate(['/organizations']);
                    }
                    else
                        _this.alerts.setMessage(resp['msg'], 'error');
                }, function (err) {
                    if (err['status'] == 401) {
                        _this.router.navigate(['/user/login']);
                    }
                });
            }
        });
    };
    // Delete entry
    OrganizationDetailComponent.prototype.deleteEntry = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_dialog_delete_component__WEBPACK_IMPORTED_MODULE_5__["DialogDeleteComponent"]);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result !== undefined && result == true) {
                // Call the API to delete the organization and its projects
                _this.api.deleteOrganization(_this.organizationData['_id'])
                    .subscribe(function (resp) {
                    // Success
                    if (resp['success'] !== undefined && resp['success'] == true) {
                        _this.alerts.setMessage(resp['msg'], 'success');
                        _this.router.navigate(['/organizations']);
                    }
                    else
                        _this.alerts.setMessage(resp['msg'], 'error');
                }, function (err) {
                    if (err['status'] == 401) {
                        _this.router.navigate(['/user/login']);
                    }
                });
            }
        });
    };
    OrganizationDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-organization-detail',
            template: __webpack_require__(/*! ./organization-detail.component.html */ "./src/app/organization/organization-detail/organization-detail.component.html"),
            styles: [__webpack_require__(/*! ./organization-detail.component.css */ "./src/app/organization/organization-detail/organization-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], angular_alert_module__WEBPACK_IMPORTED_MODULE_6__["AlertsService"]])
    ], OrganizationDetailComponent);
    return OrganizationDetailComponent;
}());



/***/ }),

/***/ "./src/app/organization/organization-home/organization-home.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/organization/organization-home/organization-home.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/organization/organization-home/organization-home.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/organization/organization-home/organization-home.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/organization/organization-home/organization-home.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/organization/organization-home/organization-home.component.ts ***!
  \*******************************************************************************/
/*! exports provided: OrganizationHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationHomeComponent", function() { return OrganizationHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrganizationHomeComponent = /** @class */ (function () {
    function OrganizationHomeComponent() {
    }
    OrganizationHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-organization-home',
            template: __webpack_require__(/*! ./organization-home.component.html */ "./src/app/organization/organization-home/organization-home.component.html"),
            styles: [__webpack_require__(/*! ./organization-home.component.css */ "./src/app/organization/organization-home/organization-home.component.css")]
        })
    ], OrganizationHomeComponent);
    return OrganizationHomeComponent;
}());



/***/ }),

/***/ "./src/app/organization/organization-list/organization-list.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/organization/organization-list/organization-list.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/organization/organization-list/organization-list.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/organization/organization-list/organization-list.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"example-container mat-elevation-z8\">\n        <table mat-table #table matSort [dataSource]=\"dataSource\">\n            \n            <ng-container matColumnDef=\"edit\">\n                <th mat-header-cell *matHeaderCellDef>Edit</th>\n                <td mat-cell *matCellDef=\"let element\">\n                    <a mat-icon-button color=\"primary\" [routerLink]=\"['/organizations',element._id,'detail']\">\n                        <mat-icon class=\"mat-18\">edit</mat-icon>\n                    </a>\n                </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"editMembers\">\n                <th mat-header-cell *matHeaderCellDef>Edit Members</th>\n                <td mat-cell *matCellDef=\"let element\">\n                    <a mat-icon-button color=\"primary\" [routerLink]=\"['/roles','org',element._id]\">\n                        <mat-icon class=\"mat-18\">account_box</mat-icon>\n                    </a>\n                </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"editProjects\">\n                <th mat-header-cell *matHeaderCellDef>Edit Projects</th>\n                <td mat-cell *matCellDef=\"let element\">\n                    <a mat-icon-button color=\"primary\" [routerLink]=\"['/projects','org',element._id]\">\n                        <mat-icon class=\"mat-18\">widgets</mat-icon>\n                    </a>\n                </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"locked\">\n                <th mat-header-cell *matHeaderCellDef>locked</th>\n                <td mat-cell *matCellDef=\"let element\">{{element.locked}} </td>\n            </ng-container>\n            <ng-container matColumnDef=\"shortname\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>shortname</th>\n                <td mat-cell *matCellDef=\"let element\">{{element.shortname}}</td>\n            </ng-container>\n            <ng-container matColumnDef=\"fullname\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>fullname</th>\n                <td mat-cell *matCellDef=\"let element\">{{element.fullname}}</td>\n            </ng-container>\n            <ng-container matColumnDef=\"email\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>email</th>\n                <td mat-cell *matCellDef=\"let element\">{{element.email}}</td>\n            </ng-container>\n            <ng-container matColumnDef=\"description\">\n                <th mat-header-cell *matHeaderCellDef>description</th>\n                <td mat-cell *matCellDef=\"let element\">{{element.description}}</td>\n            </ng-container>\n            <ng-container matColumnDef=\"address\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>address</th>\n                <td mat-cell *matCellDef=\"let element\">{{element.address}}</td>\n            </ng-container>\n            <ng-container matColumnDef=\"phone\">\n                <th mat-header-cell *matHeaderCellDef>phone</th>\n                <td mat-cell *matCellDef=\"let element\">{{element.phone}}</td>\n            </ng-container>\n            <ng-container matColumnDef=\"country\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>country</th>\n                <td mat-cell *matCellDef=\"let element\">{{element.country}}</td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        </table>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/organization/organization-list/organization-list.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/organization/organization-list/organization-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: OrganizationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationListComponent", function() { return OrganizationListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/api.service */ "./src/app/_services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrganizationListComponent = /** @class */ (function () {
    function OrganizationListComponent(api, router) {
        this.api = api;
        this.router = router;
        // Columns to display
        this.displayedColumns = [
            'edit',
            'editMembers',
            'editProjects',
            'locked',
            'shortname',
            'fullname'
        ];
        // Source for the table data
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
    }
    OrganizationListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Provide sorting to the data source
        this.dataSource.sort = this.sort;
        // Get the data
        this.api.getOrganizations().subscribe(function (resp) {
            // Populate the data source
            if (resp['success'] !== undefined && resp['success'] == true
                && resp['data'] !== undefined) {
                _this.dataSource.data = resp['data'];
            }
        }, function (err) {
            if (err['status'] == 401) {
                localStorage.clear();
                _this.router.navigate(['/user/login']);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], OrganizationListComponent.prototype, "sort", void 0);
    OrganizationListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-organization-list',
            template: __webpack_require__(/*! ./organization-list.component.html */ "./src/app/organization/organization-list/organization-list.component.html"),
            styles: [__webpack_require__(/*! ./organization-list.component.css */ "./src/app/organization/organization-list/organization-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], OrganizationListComponent);
    return OrganizationListComponent;
}());



/***/ }),

/***/ "./src/app/organization/organization-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/organization/organization-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: OrganizationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationRoutingModule", function() { return OrganizationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _organization_home_organization_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./organization-home/organization-home.component */ "./src/app/organization/organization-home/organization-home.component.ts");
/* harmony import */ var _organization_list_organization_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./organization-list/organization-list.component */ "./src/app/organization/organization-list/organization-list.component.ts");
/* harmony import */ var _organization_detail_organization_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./organization-detail/organization-detail.component */ "./src/app/organization/organization-detail/organization-detail.component.ts");
/* harmony import */ var _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_guards/auth-guard.service */ "./src/app/_guards/auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'organizations',
        component: _organization_home_organization_home_component__WEBPACK_IMPORTED_MODULE_2__["OrganizationHomeComponent"],
        canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        children: [
            {
                path: '',
                component: _organization_list_organization_list_component__WEBPACK_IMPORTED_MODULE_3__["OrganizationListComponent"]
            },
            {
                path: ':id/detail',
                component: _organization_detail_organization_detail_component__WEBPACK_IMPORTED_MODULE_4__["OrganizationDetailComponent"]
            }
        ]
    }
];
var OrganizationRoutingModule = /** @class */ (function () {
    function OrganizationRoutingModule() {
    }
    OrganizationRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], OrganizationRoutingModule);
    return OrganizationRoutingModule;
}());



/***/ }),

/***/ "./src/app/organization/organization.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/organization/organization.module.ts ***!
  \*****************************************************/
/*! exports provided: OrganizationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationModule", function() { return OrganizationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialogs_dialog_delete_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_dialogs/dialog-delete.component */ "./src/app/_dialogs/dialog-delete.component.ts");
/* harmony import */ var _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_guards/auth-guard.service */ "./src/app/_guards/auth-guard.service.ts");
/* harmony import */ var _guards_admin_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_guards/admin-guard.service */ "./src/app/_guards/admin-guard.service.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _organization_home_organization_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./organization-home/organization-home.component */ "./src/app/organization/organization-home/organization-home.component.ts");
/* harmony import */ var _organization_list_organization_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./organization-list/organization-list.component */ "./src/app/organization/organization-list/organization-list.component.ts");
/* harmony import */ var _organization_detail_organization_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./organization-detail/organization-detail.component */ "./src/app/organization/organization-detail/organization-detail.component.ts");
/* harmony import */ var _organization_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./organization-routing.module */ "./src/app/organization/organization-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Generic imports






// Standard imports for all routes




// Organization specific imports




var OrganizationModule = /** @class */ (function () {
    function OrganizationModule() {
    }
    OrganizationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _organization_routing_module__WEBPACK_IMPORTED_MODULE_13__["OrganizationRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"]
            ],
            declarations: [
                _organization_home_organization_home_component__WEBPACK_IMPORTED_MODULE_10__["OrganizationHomeComponent"],
                _organization_list_organization_list_component__WEBPACK_IMPORTED_MODULE_11__["OrganizationListComponent"],
                _organization_detail_organization_detail_component__WEBPACK_IMPORTED_MODULE_12__["OrganizationDetailComponent"]
            ],
            providers: [
                _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"],
                _guards_admin_guard_service__WEBPACK_IMPORTED_MODULE_8__["AdminGuard"]
            ],
            entryComponents: [_dialogs_dialog_delete_component__WEBPACK_IMPORTED_MODULE_6__["DialogDeleteComponent"]]
        })
    ], OrganizationModule);
    return OrganizationModule;
}());



/***/ }),

/***/ "./src/app/project/project-create/project-create.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/project/project-create/project-create.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/project/project-create/project-create.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/project/project-create/project-create.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <form [formGroup]=\"thisForm\" (ngSubmit)=\"onFormSubmit(thisForm.value)\">\n                \n                <mat-toolbar>\n                    <span>{{orgData?.fullname}} > Create Project</span>\n                </mat-toolbar>\n\n                <div class=\"button-row\">\n                    <a mat-raised-button color=\"primary\" [routerLink]=\"['/projects', 'org', orgId]\"><mat-icon>list</mat-icon></a>\n                </div>\n\n                <div class=\"button-row\">\n                    <button type=\"submit\" [disabled]=\"!thisForm.valid\" mat-raised-button color=\"primary\"><mat-icon>save</mat-icon></button>\n                </div>\n                \n                <mat-form-field class=\"example-full-width\">\n                    <input matInput placeholder=\"shortname\" formControlName=\"shortname\" [errorStateMatcher]=\"matcher\">\n                    <mat-error>\n                        <div *ngIf=\"f.shortname.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.shortname.errors.required\">Required</div>\n                            <div *ngIf=\"f.shortname.errors.maxlength\">Maximum 20 characters</div>\n                        </div>\n                    </mat-error>\n                </mat-form-field>\n\n                <mat-form-field class=\"example-full-width\">\n                    <input matInput placeholder=\"fullname\" formControlName=\"fullname\" [errorStateMatcher]=\"matcher\">\n                    <mat-error>\n                        <div *ngIf=\"f.fullname.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.fullname.errors.required\">Required</div>\n                            <div *ngIf=\"f.fullname.errors.maxlength\">Maximum 256 characters</div>\n                        </div>\n                    </mat-error>\n                </mat-form-field>\n\n                <mat-form-field class=\"example-full-width\">\n                    <textarea matInput placeholder=\"Description\" formControlName=\"description\" [errorStateMatcher]=\"matcher\">\n                    </textarea>\n                    <mat-error>\n                        <div *ngIf=\"f.description.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.description.errors.maxlength\">Maximum 500 characters</div>\n                        </div>\n                    </mat-error>\n                </mat-form-field>\n\n                <div class=\"button-row\">\n                    <button type=\"submit\" [disabled]=\"!thisForm.valid\" mat-raised-button color=\"primary\"><mat-icon>save</mat-icon></button>\n                </div>\n\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/project/project-create/project-create.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/project/project-create/project-create.component.ts ***!
  \********************************************************************/
/*! exports provided: ProjectCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectCreateComponent", function() { return ProjectCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_alert_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-alert-module */ "./node_modules/angular-alert-module/fesm5/alerts.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/api.service */ "./src/app/_services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProjectCreateComponent = /** @class */ (function () {
    function ProjectCreateComponent(router, route, api, formBuilder, alerts) {
        this.router = router;
        this.route = route;
        this.api = api;
        this.formBuilder = formBuilder;
        this.alerts = alerts;
        // The organization
        this.orgData = '';
        this.orgId = '';
        // Organization ID from the URL Params
        this.orgId = route.snapshot.params.orgId;
    }
    ProjectCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Create form
        this.thisForm = this.formBuilder.group({
            'shortname': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            'fullname': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(256)]],
            'description': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(500)]
        });
        // Validate the organization
        this.api.getOrganization(this.orgId).subscribe(function (resp) {
            // Errors
            if (resp['success'] === undefined || resp['success'] == false) {
                _this.alerts.setMessage(resp['msg'], 'error');
                _this.router.navigate(['/organizations']);
            }
            else if (resp['data'] === undefined || !Object.keys(resp['data']).length) {
                _this.alerts.setMessage('Error fetching data', 'error');
                _this.router.navigate(['/organizations']);
            }
            else {
                // Save the organization data locally
                _this.orgData = resp['data'];
            }
        }, function (err) {
            if (err['status'] == 401) {
                localStorage.clear();
                _this.router.navigate(['/user/login']);
            }
        });
    };
    Object.defineProperty(ProjectCreateComponent.prototype, "f", {
        get: function () { return this.thisForm.controls; },
        enumerable: true,
        configurable: true
    });
    ProjectCreateComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        this.api.postProject(this.orgId, form).subscribe(function (resp) {
            // Ok
            if (resp['success'] !== undefined && resp['success'] == true) {
                _this.alerts.setMessage(resp['msg'], 'success');
            }
            else {
                var error = ('error' in resp) ? resp['error'] : '';
                var errorMsg = ('msg' in resp) ? resp['msg'] : '';
                // Duplicate unique fields
                if (error && error.code == 11000) {
                    var errorField = ';';
                    for (var fieldKey in error.field) {
                        errorField = fieldKey;
                    }
                    _this.alerts.setMessage('Field must be unique: ' + errorField, 'error');
                }
                else if (errorMsg) {
                    _this.alerts.setMessage(errorMsg, 'error');
                }
            }
            _this.router.navigate(['/projects/org/' + _this.orgId]);
        }, function (err) {
            if (err['status'] == 401) {
                localStorage.clear();
                _this.router.navigate(['/user/login']);
            }
        });
    };
    ProjectCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-create',
            template: __webpack_require__(/*! ./project-create.component.html */ "./src/app/project/project-create/project-create.component.html"),
            styles: [__webpack_require__(/*! ./project-create.component.css */ "./src/app/project/project-create/project-create.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            angular_alert_module__WEBPACK_IMPORTED_MODULE_3__["AlertsService"]])
    ], ProjectCreateComponent);
    return ProjectCreateComponent;
}());



/***/ }),

/***/ "./src/app/project/project-detail/project-detail.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/project/project-detail/project-detail.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/project/project-detail/project-detail.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/project/project-detail/project-detail.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <form [formGroup]=\"thisForm\" (ngSubmit)=\"onFormSubmit(thisForm.value)\">\n                \n                <mat-toolbar>\n                    <span>{{orgData?.fullname}} > Edit Project</span>\n                </mat-toolbar>\n\n\t\t\t\t<div class=\"button-row\">\n\t\t\t\t\t<a mat-raised-button color=\"primary\" [routerLink]=\"['/projects','org', orgData?._id]\"><mat-icon>list</mat-icon></a>\n\t\t\t\t\t<a mat-raised-button color=\"warn\" (click)=\"deleteEntry()\"><mat-icon>delete_forever</mat-icon></a>\n\t\t\t\t</div>\n\n                <div class=\"button-row\">\n                    <button type=\"submit\" [disabled]=\"!thisForm.valid\" mat-raised-button color=\"primary\"><mat-icon>save</mat-icon></button>\n                </div>\n\n                <div class=\"button-row\">\n                    <a *ngIf=\"!projectLocked\" mat-raised-button color=\"warn\" (click)=\"lockEntry()\"><mat-icon>lock</mat-icon></a>\n                    <a *ngIf=\"projectLocked\" mat-raised-button color=\"warn\" (click)=\"unlockEntry()\"><mat-icon>lock_open</mat-icon></a>\n                </div>\n                \n                <mat-form-field class=\"example-full-width\">\n                    <input matInput placeholder=\"shortname\" formControlName=\"shortname\" [errorStateMatcher]=\"matcher\">\n                    <mat-error>\n                        <div *ngIf=\"f.shortname.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.shortname.errors.required\">Required</div>\n                            <div *ngIf=\"f.shortname.errors.maxlength\">Maximum 20 characters</div>\n                        </div>\n                    </mat-error>\n                </mat-form-field>\n\n                <mat-form-field class=\"example-full-width\">\n                    <input matInput placeholder=\"fullname\" formControlName=\"fullname\" [errorStateMatcher]=\"matcher\">\n                    <mat-error>\n                        <div *ngIf=\"f.fullname.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.fullname.errors.required\">Required</div>\n                            <div *ngIf=\"f.fullname.errors.maxlength\">Maximum 256 characters</div>\n                        </div>\n                    </mat-error>\n                </mat-form-field>\n\n                <mat-form-field class=\"example-full-width\">\n                    <textarea matInput placeholder=\"Description\" formControlName=\"description\" [errorStateMatcher]=\"matcher\">\n                    </textarea>\n                    <mat-error>\n                        <div *ngIf=\"f.description.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.description.errors.maxlength\">Maximum 500 characters</div>\n                        </div>\n                    </mat-error>\n                </mat-form-field>\n\n                <div class=\"button-row\">\n                    <button type=\"submit\" [disabled]=\"!thisForm.valid\" mat-raised-button color=\"primary\"><mat-icon>save</mat-icon></button>\n                </div>\n\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/project/project-detail/project-detail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/project/project-detail/project-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: ProjectDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailComponent", function() { return ProjectDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/api.service */ "./src/app/_services/api.service.ts");
/* harmony import */ var _dialogs_dialog_delete_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_dialogs/dialog-delete.component */ "./src/app/_dialogs/dialog-delete.component.ts");
/* harmony import */ var angular_alert_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-alert-module */ "./node_modules/angular-alert-module/fesm5/alerts.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProjectDetailComponent = /** @class */ (function () {
    function ProjectDetailComponent(router, route, api, formBuilder, dialog, alerts) {
        this.router = router;
        this.route = route;
        this.api = api;
        this.formBuilder = formBuilder;
        this.dialog = dialog;
        this.alerts = alerts;
        this.projectData = [];
        this.orgData = [];
        this.projectLocked = false;
    }
    ProjectDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Create form
        this.thisForm = this.formBuilder.group({
            'shortname': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z0-9]*')]],
            'fullname': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(256)]],
            'description': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(500)]
        });
        // Get project data
        this.api.getProject(this.route.snapshot.params['id']).subscribe(function (resp) {
            if (resp['success'] === undefined || resp['success'] == false) {
                _this.alerts.setMessage(resp['msg'], 'error');
                _this.router.navigate(['/organizations']);
            }
            else if (resp['data'] === undefined || !Object.keys(resp['data']).length) {
                _this.alerts.setMessage('Error fetching data', 'error');
                _this.router.navigate(['/organizations']);
            }
            else if (resp['data']['organization'] === undefined
                || !Object.keys(resp['data']['organization']).length) {
                _this.alerts.setMessage('Error fetching data', 'error');
                _this.router.navigate(['/organizations']);
            }
            else {
                // Save the data locally
                _this.projectData = resp['data'];
                // Locked status
                _this.projectLocked = (resp['data'].locked != null && resp['data'].locked == true) ? true : false;
                // Save the organization locally
                _this.orgData = resp['data']['organization'];
                // Update the form values
                _this.thisForm.setValue({
                    shortname: (resp['data'].shortname !== undefined && resp['data'].shortname) ? resp['data'].shortname : '',
                    fullname: (resp['data'].fullname !== undefined && resp['data'].fullname) ? resp['data'].fullname : '',
                    description: (resp['data'].description !== undefined && resp['data'].description) ? resp['data'].description : ''
                });
            }
        }, function (err) {
            if (err['status'] == 401) {
                localStorage.clear();
                _this.router.navigate(['/user/login']);
            }
        });
    };
    Object.defineProperty(ProjectDetailComponent.prototype, "f", {
        get: function () { return this.thisForm.controls; },
        enumerable: true,
        configurable: true
    });
    // Form submit
    ProjectDetailComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        // Update project via API
        this.api.putProject(this.projectData['_id'], form).subscribe(function (resp) {
            // Ok
            if (resp['success'] !== undefined && resp['success'] == true) {
                _this.alerts.setMessage(resp['msg'], 'success');
            }
            else {
                var error = ('error' in resp) ? resp['error'] : '';
                var errorMsg = ('msg' in resp) ? resp['msg'] : '';
                // Duplicate unique fields
                if (error && error.code == 11000) {
                    var errorField = '';
                    for (var fieldKey in error.field) {
                        errorField = fieldKey;
                    }
                    _this.alerts.setMessage('Field must be unique: ' + errorField, 'error');
                }
                else if (errorMsg) {
                    _this.alerts.setMessage(errorMsg, 'error');
                }
            }
        }, function (err) {
            if (err['status'] == 401) {
                localStorage.clear();
                _this.router.navigate(['/user/login']);
            }
        });
    };
    // Delete entry
    ProjectDetailComponent.prototype.deleteEntry = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_dialog_delete_component__WEBPACK_IMPORTED_MODULE_5__["DialogDeleteComponent"]);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != null && result == true) {
                _this.api.deleteProject(_this.projectData['_id']).subscribe(function (resp) {
                    // Success
                    if (resp['success'] !== undefined && resp['success'] == true) {
                        _this.alerts.setMessage(resp['msg'], 'success');
                        _this.router.navigate(['/projects/org/' + _this.orgData['_id']]);
                    }
                    else {
                        _this.alerts.setMessage(resp['msg'], 'error');
                    }
                }, function (err) {
                    if (err['status'] == 401) {
                        localStorage.clear();
                        _this.router.navigate(['/user/login']);
                    }
                });
            }
        });
    };
    // Lock entry
    ProjectDetailComponent.prototype.lockEntry = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_dialog_delete_component__WEBPACK_IMPORTED_MODULE_5__["DialogDeleteComponent"]);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result !== undefined && result == true) {
                _this.api.lockProject(_this.projectData['_id'])
                    .subscribe(function (resp) {
                    // Success
                    if (resp['success'] !== undefined && resp['success'] == true) {
                        _this.alerts.setMessage(resp['msg'], 'success');
                        _this.router.navigate(['/projects/org/' + _this.orgData['_id']]);
                    }
                    else
                        _this.alerts.setMessage(resp['msg'], 'error');
                }, function (err) {
                    if (err['status'] == 401) {
                        _this.router.navigate(['/user/login']);
                    }
                });
            }
        });
    };
    // Unlock entry
    ProjectDetailComponent.prototype.unlockEntry = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_dialog_delete_component__WEBPACK_IMPORTED_MODULE_5__["DialogDeleteComponent"]);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result !== undefined && result == true) {
                _this.api.unlockProject(_this.projectData['_id'])
                    .subscribe(function (resp) {
                    // Success
                    if (resp['success'] !== undefined && resp['success'] == true) {
                        _this.alerts.setMessage(resp['msg'], 'success');
                        _this.router.navigate(['/projects/org/' + _this.orgData['_id']]);
                    }
                    else
                        _this.alerts.setMessage(resp['msg'], 'error');
                }, function (err) {
                    if (err['status'] == 401) {
                        _this.router.navigate(['/user/login']);
                    }
                });
            }
        });
    };
    ProjectDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-detail',
            template: __webpack_require__(/*! ./project-detail.component.html */ "./src/app/project/project-detail/project-detail.component.html"),
            styles: [__webpack_require__(/*! ./project-detail.component.css */ "./src/app/project/project-detail/project-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], angular_alert_module__WEBPACK_IMPORTED_MODULE_6__["AlertsService"]])
    ], ProjectDetailComponent);
    return ProjectDetailComponent;
}());



/***/ }),

/***/ "./src/app/project/project-home/project-home.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/project/project-home/project-home.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/project/project-home/project-home.component.html":
/*!******************************************************************!*\
  !*** ./src/app/project/project-home/project-home.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/project/project-home/project-home.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/project/project-home/project-home.component.ts ***!
  \****************************************************************/
/*! exports provided: ProjectHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectHomeComponent", function() { return ProjectHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProjectHomeComponent = /** @class */ (function () {
    function ProjectHomeComponent() {
    }
    ProjectHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-home',
            template: __webpack_require__(/*! ./project-home.component.html */ "./src/app/project/project-home/project-home.component.html"),
            styles: [__webpack_require__(/*! ./project-home.component.css */ "./src/app/project/project-home/project-home.component.css")]
        })
    ], ProjectHomeComponent);
    return ProjectHomeComponent;
}());



/***/ }),

/***/ "./src/app/project/project-list/project-list.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/project/project-list/project-list.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/project/project-list/project-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/project/project-list/project-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <mat-toolbar>\n        <span>{{orgData?.fullname}} > All Projects</span>\n    </mat-toolbar>\n\n    <div class=\"button-row\">\n        <a mat-raised-button color=\"primary\" [routerLink]=\"['/projects','create',orgId]\"><mat-icon>add</mat-icon></a>\n    </div>\n\n    <div class=\"example-container mat-elevation-z8\">\n        <table mat-table #table matSort [dataSource]=\"dataSource\">\n\n            <ng-container matColumnDef=\"edit\">\n                <th mat-header-cell *matHeaderCellDef>Edit</th>\n                <td mat-cell *matCellDef=\"let element\">\n                    <a mat-icon-button color=\"primary\" [routerLink]=\"['/projects',element._id]\">\n                        <mat-icon class=\"mat-18\">edit</mat-icon>\n                    </a>\n                </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"editMembers\">\n                <th mat-header-cell *matHeaderCellDef>Edit Members</th>\n                <td mat-cell *matCellDef=\"let element\">\n                    <a mat-icon-button color=\"primary\" [routerLink]=\"['/roles/project/',element._id]\">\n                        <mat-icon class=\"mat-18\">account_box</mat-icon>\n                    </a>\n                </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"editResources\">\n                <th mat-header-cell *matHeaderCellDef>Edit Resources</th>\n                <td mat-cell *matCellDef=\"let element\">\n                    <a mat-icon-button color=\"primary\" [routerLink]=\"['/resources/project/',element._id]\">\n                        <mat-icon class=\"mat-18\">description</mat-icon>\n                    </a>\n                </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"locked\">\n                <th mat-header-cell *matHeaderCellDef>locked</th>\n                <td mat-cell *matCellDef=\"let element\">{{element.locked}}</td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"shortname\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>shortname</th>\n                <td mat-cell *matCellDef=\"let element\">{{element.shortname}}</td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"fullname\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>fullname</th>\n                <td mat-cell *matCellDef=\"let element\">{{element.fullname}}</td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"description\">\n                <th mat-header-cell *matHeaderCellDef>description</th>\n                <td mat-cell *matCellDef=\"let element\">{{element.description}}</td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        </table>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/project/project-list/project-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/project/project-list/project-list.component.ts ***!
  \****************************************************************/
/*! exports provided: ProjectListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectListComponent", function() { return ProjectListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var angular_alert_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-alert-module */ "./node_modules/angular-alert-module/fesm5/alerts.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services/api.service */ "./src/app/_services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProjectListComponent = /** @class */ (function () {
    function ProjectListComponent(api, route, router, alerts) {
        this.api = api;
        this.route = route;
        this.router = router;
        this.alerts = alerts;
        // Columns to display
        this.displayedColumns = [
            'edit',
            'editMembers',
            'editResources',
            'locked',
            'shortname',
            'fullname'
        ];
        // The organization
        this.orgData = '';
        this.orgId = '';
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        // Organization ID from the URL Params
        this.orgId = route.snapshot.params.orgId;
    }
    ProjectListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Provide sorting to the data source
        this.dataSource.sort = this.sort;
        // Get the organization
        this.api.getOrganization(this.orgId).subscribe(function (resp) {
            if (resp['success'] === undefined || resp['success'] == false) {
                _this.alerts.setMessage(resp['msg'], 'error');
                _this.router.navigate(['/organizations']);
            }
            else if (resp['data'] === undefined || !Object.keys(resp['data']).length) {
                _this.alerts.setMessage('Error fetching data', 'error');
                _this.router.navigate(['/organizations']);
            }
            else {
                // Save the organization locally
                _this.orgData = resp['data'];
                // Get the organization's projects
                _this.api.getProjects(_this.orgId).subscribe(function (resp) {
                    // Populate the data source
                    if (resp['success'] !== undefined && resp['success'] == true
                        && resp['data'] !== undefined) {
                        _this.dataSource.data = resp['data'];
                    }
                }, function (err) {
                    if (err['status'] == 401) {
                        localStorage.clear();
                        _this.router.navigate(['/user/login']);
                    }
                });
            }
        }, function (err) {
            if (err['status'] == 401) {
                localStorage.clear();
                _this.router.navigate(['/user/login']);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], ProjectListComponent.prototype, "sort", void 0);
    ProjectListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-list',
            template: __webpack_require__(/*! ./project-list.component.html */ "./src/app/project/project-list/project-list.component.html"),
            styles: [__webpack_require__(/*! ./project-list.component.css */ "./src/app/project/project-list/project-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], angular_alert_module__WEBPACK_IMPORTED_MODULE_4__["AlertsService"]])
    ], ProjectListComponent);
    return ProjectListComponent;
}());



/***/ }),

/***/ "./src/app/project/project-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/project/project-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProjectRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectRoutingModule", function() { return ProjectRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _project_home_project_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-home/project-home.component */ "./src/app/project/project-home/project-home.component.ts");
/* harmony import */ var _project_list_project_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-list/project-list.component */ "./src/app/project/project-list/project-list.component.ts");
/* harmony import */ var _project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-detail/project-detail.component */ "./src/app/project/project-detail/project-detail.component.ts");
/* harmony import */ var _project_create_project_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project-create/project-create.component */ "./src/app/project/project-create/project-create.component.ts");
/* harmony import */ var _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_guards/auth-guard.service */ "./src/app/_guards/auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: 'projects',
        component: _project_home_project_home_component__WEBPACK_IMPORTED_MODULE_2__["ProjectHomeComponent"],
        canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        children: [
            {
                path: '',
                component: _project_list_project_list_component__WEBPACK_IMPORTED_MODULE_3__["ProjectListComponent"]
            },
            {
                path: 'create/:orgId',
                component: _project_create_project_create_component__WEBPACK_IMPORTED_MODULE_5__["ProjectCreateComponent"]
            },
            {
                path: ':id',
                component: _project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_4__["ProjectDetailComponent"]
            },
            {
                path: 'org/:orgId',
                component: _project_list_project_list_component__WEBPACK_IMPORTED_MODULE_3__["ProjectListComponent"]
            }
        ]
    }
];
var ProjectRoutingModule = /** @class */ (function () {
    function ProjectRoutingModule() {
    }
    ProjectRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], ProjectRoutingModule);
    return ProjectRoutingModule;
}());



/***/ }),

/***/ "./src/app/project/project.module.ts":
/*!*******************************************!*\
  !*** ./src/app/project/project.module.ts ***!
  \*******************************************/
/*! exports provided: ProjectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectModule", function() { return ProjectModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialogs_dialog_delete_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_dialogs/dialog-delete.component */ "./src/app/_dialogs/dialog-delete.component.ts");
/* harmony import */ var _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_guards/auth-guard.service */ "./src/app/_guards/auth-guard.service.ts");
/* harmony import */ var _guards_admin_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_guards/admin-guard.service */ "./src/app/_guards/admin-guard.service.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _project_home_project_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./project-home/project-home.component */ "./src/app/project/project-home/project-home.component.ts");
/* harmony import */ var _project_create_project_create_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./project-create/project-create.component */ "./src/app/project/project-create/project-create.component.ts");
/* harmony import */ var _project_list_project_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./project-list/project-list.component */ "./src/app/project/project-list/project-list.component.ts");
/* harmony import */ var _project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./project-detail/project-detail.component */ "./src/app/project/project-detail/project-detail.component.ts");
/* harmony import */ var _project_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./project-routing.module */ "./src/app/project/project-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Generic imports






// Standard imports for all routes




// Project specific imports





var ProjectModule = /** @class */ (function () {
    function ProjectModule() {
    }
    ProjectModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _project_routing_module__WEBPACK_IMPORTED_MODULE_14__["ProjectRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
            ],
            declarations: [
                _project_home_project_home_component__WEBPACK_IMPORTED_MODULE_10__["ProjectHomeComponent"],
                _project_create_project_create_component__WEBPACK_IMPORTED_MODULE_11__["ProjectCreateComponent"],
                _project_list_project_list_component__WEBPACK_IMPORTED_MODULE_12__["ProjectListComponent"],
                _project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_13__["ProjectDetailComponent"]
            ],
            providers: [
                _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"],
                _guards_admin_guard_service__WEBPACK_IMPORTED_MODULE_8__["AdminGuard"]
            ],
            entryComponents: [_dialogs_dialog_delete_component__WEBPACK_IMPORTED_MODULE_6__["DialogDeleteComponent"]]
        })
    ], ProjectModule);
    return ProjectModule;
}());



/***/ }),

/***/ "./src/app/resource/resource-create/resource-create.component.css":
/*!************************************************************************!*\
  !*** ./src/app/resource/resource-create/resource-create.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/resource/resource-create/resource-create.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/resource/resource-create/resource-create.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <form [formGroup]=\"thisForm\" (ngSubmit)=\"onFormSubmit(thisForm.value)\">\n                \n                <mat-toolbar>\n                    <span>{{projectData?.fullname}} > Create Resource</span>\n                </mat-toolbar>\n\n                <div class=\"button-row\">\n                    <a mat-raised-button color=\"primary\" [routerLink]=\"['/resources', 'project', projectId]\"><mat-icon>list</mat-icon></a>\n                </div>\n\n                <div class=\"button-row\">\n                    <button type=\"submit\" [disabled]=\"!thisForm.valid\" mat-raised-button color=\"primary\"><mat-icon>save</mat-icon></button>\n                </div>\n                \n                <mat-form-field class=\"example-full-width\">\n                    <input matInput placeholder=\"shortname\" formControlName=\"shortname\" [errorStateMatcher]=\"matcher\">\n                    <mat-error>\n                        <div *ngIf=\"f.shortname.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.shortname.errors.required\">Required</div>\n                            <div *ngIf=\"f.shortname.errors.maxlength\">Maximum 20 characters</div>\n                        </div>\n                    </mat-error>\n                </mat-form-field>\n\n                <mat-form-field class=\"example-full-width\">\n                    <input matInput placeholder=\"fullname\" formControlName=\"fullname\" [errorStateMatcher]=\"matcher\">\n                    <mat-error>\n                        <div *ngIf=\"f.fullname.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.fullname.errors.required\">Required</div>\n                            <div *ngIf=\"f.fullname.errors.maxlength\">Maximum 256 characters</div>\n                        </div>\n                    </mat-error>\n                </mat-form-field>\n\n                <mat-form-field class=\"example-full-width\">\n                    <textarea matInput placeholder=\"Description\" formControlName=\"description\" [errorStateMatcher]=\"matcher\">\n                    </textarea>\n                    <mat-error>\n                        <div *ngIf=\"f.description.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.description.errors.maxlength\">Maximum 500 characters</div>\n                        </div>\n                    </mat-error>\n                </mat-form-field>\n\n                <div class=\"button-row\">\n                    <button type=\"submit\" [disabled]=\"!thisForm.valid\" mat-raised-button color=\"primary\"><mat-icon>save</mat-icon></button>\n                </div>\n\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/resource/resource-create/resource-create.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/resource/resource-create/resource-create.component.ts ***!
  \***********************************************************************/
/*! exports provided: ResourceCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceCreateComponent", function() { return ResourceCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_alert_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-alert-module */ "./node_modules/angular-alert-module/fesm5/alerts.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/api.service */ "./src/app/_services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResourceCreateComponent = /** @class */ (function () {
    function ResourceCreateComponent(router, route, api, formBuilder, alerts) {
        this.router = router;
        this.route = route;
        this.api = api;
        this.formBuilder = formBuilder;
        this.alerts = alerts;
        // The project
        this.projectData = '';
        this.projectId = '';
        // Project ID from the URL Params
        this.projectId = route.snapshot.params.projectId;
    }
    ResourceCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Create form
        this.thisForm = this.formBuilder.group({
            'shortname': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            'fullname': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(256)]],
            'description': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(500)]
        });
        // Validate the project
        this.api.getProject(this.projectId).subscribe(function (resp) {
            // Errors
            if (resp['success'] === undefined || resp['success'] == false) {
                _this.alerts.setMessage(resp['msg'], 'error');
                _this.router.navigate(['/organizations']);
            }
            else if (resp['data'] === undefined || !Object.keys(resp['data']).length) {
                _this.alerts.setMessage('Error fetching data', 'error');
                _this.router.navigate(['/organizations']);
            }
            else {
                // Save the project data locally
                _this.projectData = resp['data'];
            }
        }, function (err) {
            if (err['status'] == 401) {
                localStorage.clear();
                _this.router.navigate(['/user/login']);
            }
        });
    };
    Object.defineProperty(ResourceCreateComponent.prototype, "f", {
        get: function () { return this.thisForm.controls; },
        enumerable: true,
        configurable: true
    });
    ResourceCreateComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        this.api.postResource(this.projectId, form).subscribe(function (resp) {
            // Ok
            if (resp['success'] !== undefined && resp['success'] == true) {
                _this.alerts.setMessage(resp['msg'], 'success');
            }
            else {
                var error = ('error' in resp) ? resp['error'] : '';
                var errorMsg = ('msg' in resp) ? resp['msg'] : '';
                // Duplicate unique fields
                if (error && error.code == 11000) {
                    var errorField = ';';
                    for (var fieldKey in error.field) {
                        errorField = fieldKey;
                    }
                    _this.alerts.setMessage('Field must be unique: ' + errorField, 'error');
                }
                else if (errorMsg) {
                    _this.alerts.setMessage(errorMsg, 'error');
                }
            }
            _this.router.navigate(['/resources/project/' + _this.projectId]);
        }, function (err) {
            if (err['status'] == 401) {
                localStorage.clear();
                _this.router.navigate(['/user/login']);
            }
        });
    };
    ResourceCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resource-create',
            template: __webpack_require__(/*! ./resource-create.component.html */ "./src/app/resource/resource-create/resource-create.component.html"),
            styles: [__webpack_require__(/*! ./resource-create.component.css */ "./src/app/resource/resource-create/resource-create.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            angular_alert_module__WEBPACK_IMPORTED_MODULE_3__["AlertsService"]])
    ], ResourceCreateComponent);
    return ResourceCreateComponent;
}());



/***/ }),

/***/ "./src/app/resource/resource-detail/resource-detail.component.css":
/*!************************************************************************!*\
  !*** ./src/app/resource/resource-detail/resource-detail.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/resource/resource-detail/resource-detail.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/resource/resource-detail/resource-detail.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <form [formGroup]=\"thisForm\" (ngSubmit)=\"onFormSubmit(thisForm.value)\">\n                \n                <mat-toolbar>\n                    <span>{{projectData?.fullname}} > Edit Resource</span>\n                </mat-toolbar>\n\n\t\t\t\t<div class=\"button-row\">\n\t\t\t\t\t<a mat-raised-button color=\"primary\" [routerLink]=\"['/resources','project', projectData?._id]\"><mat-icon>list</mat-icon></a>\n\t\t\t\t\t<a mat-raised-button color=\"warn\" (click)=\"deleteEntry()\"><mat-icon>delete_forever</mat-icon></a>\n\t\t\t\t</div>\n\n                <div class=\"button-row\">\n                    <button type=\"submit\" [disabled]=\"!thisForm.valid\" mat-raised-button color=\"primary\"><mat-icon>save</mat-icon></button>\n                </div>\n                \n                <mat-form-field class=\"example-full-width\">\n                    <input matInput placeholder=\"shortname\" formControlName=\"shortname\" [errorStateMatcher]=\"matcher\">\n                    <mat-error>\n                        <div *ngIf=\"f.shortname.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.shortname.errors.required\">Required</div>\n                            <div *ngIf=\"f.shortname.errors.maxlength\">Maximum 20 characters</div>\n                        </div>\n                    </mat-error>\n                </mat-form-field>\n\n                <mat-form-field class=\"example-full-width\">\n                    <input matInput placeholder=\"fullname\" formControlName=\"fullname\" [errorStateMatcher]=\"matcher\">\n                    <mat-error>\n                        <div *ngIf=\"f.fullname.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.fullname.errors.required\">Required</div>\n                            <div *ngIf=\"f.fullname.errors.maxlength\">Maximum 256 characters</div>\n                        </div>\n                    </mat-error>\n                </mat-form-field>\n\n                <mat-form-field class=\"example-full-width\">\n                    <textarea matInput placeholder=\"Description\" formControlName=\"description\" [errorStateMatcher]=\"matcher\">\n                    </textarea>\n                    <mat-error>\n                        <div *ngIf=\"f.description.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.description.errors.maxlength\">Maximum 500 characters</div>\n                        </div>\n                    </mat-error>\n                </mat-form-field>\n\n                <div class=\"button-row\">\n                    <button type=\"submit\" [disabled]=\"!thisForm.valid\" mat-raised-button color=\"primary\"><mat-icon>save</mat-icon></button>\n                </div>\n\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/resource/resource-detail/resource-detail.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/resource/resource-detail/resource-detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: ResourceDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceDetailComponent", function() { return ResourceDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/api.service */ "./src/app/_services/api.service.ts");
/* harmony import */ var _dialogs_dialog_delete_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_dialogs/dialog-delete.component */ "./src/app/_dialogs/dialog-delete.component.ts");
/* harmony import */ var angular_alert_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-alert-module */ "./node_modules/angular-alert-module/fesm5/alerts.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ResourceDetailComponent = /** @class */ (function () {
    function ResourceDetailComponent(router, route, api, formBuilder, dialog, alerts) {
        this.router = router;
        this.route = route;
        this.api = api;
        this.formBuilder = formBuilder;
        this.dialog = dialog;
        this.alerts = alerts;
        this.resourceData = [];
        this.projectData = [];
    }
    ResourceDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Create form
        this.thisForm = this.formBuilder.group({
            'shortname': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z0-9]*')]],
            'fullname': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(256)]],
            'description': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(500)]
        });
        // Get resource data
        this.api.getResource(this.route.snapshot.params['id']).subscribe(function (resp) {
            if (resp['success'] === undefined || resp['success'] == false) {
                _this.alerts.setMessage(resp['msg'], 'error');
                _this.router.navigate(['/organizations']);
            }
            else if (resp['data'] === undefined || !Object.keys(resp['data']).length) {
                _this.alerts.setMessage('Error fetching data', 'error');
                _this.router.navigate(['/organizations']);
            }
            else {
                // Save the data locally
                _this.resourceData = resp['data'];
                // Save the project locally
                _this.projectData = resp['data']['project'];
                // Update the form values
                _this.thisForm.setValue({
                    shortname: (resp['data'].shortname !== undefined && resp['data'].shortname) ? resp['data'].shortname : '',
                    fullname: (resp['data'].fullname !== undefined && resp['data'].fullname) ? resp['data'].fullname : '',
                    description: (resp['data'].description !== undefined && resp['data'].description) ? resp['data'].description : ''
                });
            }
        }, function (err) {
            if (err['status'] == 401) {
                localStorage.clear();
                _this.router.navigate(['/user/login']);
            }
        });
    };
    Object.defineProperty(ResourceDetailComponent.prototype, "f", {
        get: function () { return this.thisForm.controls; },
        enumerable: true,
        configurable: true
    });
    // Form submit
    ResourceDetailComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        // Update project via API
        this.api.putResource(this.resourceData['_id'], form).subscribe(function (resp) {
            // Ok
            if (resp['success'] !== undefined && resp['success'] == true) {
                _this.alerts.setMessage(resp['msg'], 'success');
            }
            else {
                var error = ('error' in resp) ? resp['error'] : '';
                var errorMsg = ('msg' in resp) ? resp['msg'] : '';
                // Duplicate unique fields
                if (error && error.code == 11000) {
                    var errorField = '';
                    for (var fieldKey in error.field) {
                        errorField = fieldKey;
                    }
                    _this.alerts.setMessage('Field must be unique: ' + errorField, 'error');
                }
                else if (errorMsg) {
                    _this.alerts.setMessage(errorMsg, 'error');
                }
            }
        }, function (err) {
            if (err['status'] == 401) {
                localStorage.clear();
                _this.router.navigate(['/user/login']);
            }
        });
    };
    // Delete entry
    ResourceDetailComponent.prototype.deleteEntry = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_dialog_delete_component__WEBPACK_IMPORTED_MODULE_5__["DialogDeleteComponent"]);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != null && result == true) {
                _this.api.deleteResource(_this.resourceData['_id']).subscribe(function (resp) {
                    // Success
                    if (resp['success'] !== undefined && resp['success'] == true) {
                        _this.alerts.setMessage(resp['msg'], 'success');
                        _this.router.navigate(['/resources/project/' + _this.projectData['_id']]);
                    }
                    else {
                        _this.alerts.setMessage(resp['msg'], 'error');
                    }
                }, function (err) {
                    if (err['status'] == 401) {
                        localStorage.clear();
                        _this.router.navigate(['/user/login']);
                    }
                });
            }
        });
    };
    ResourceDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resource-detail',
            template: __webpack_require__(/*! ./resource-detail.component.html */ "./src/app/resource/resource-detail/resource-detail.component.html"),
            styles: [__webpack_require__(/*! ./resource-detail.component.css */ "./src/app/resource/resource-detail/resource-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], angular_alert_module__WEBPACK_IMPORTED_MODULE_6__["AlertsService"]])
    ], ResourceDetailComponent);
    return ResourceDetailComponent;
}());



/***/ }),

/***/ "./src/app/resource/resource-home/resource-home.component.css":
/*!********************************************************************!*\
  !*** ./src/app/resource/resource-home/resource-home.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/resource/resource-home/resource-home.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/resource/resource-home/resource-home.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/resource/resource-home/resource-home.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/resource/resource-home/resource-home.component.ts ***!
  \*******************************************************************/
/*! exports provided: ResourceHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceHomeComponent", function() { return ResourceHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ResourceHomeComponent = /** @class */ (function () {
    function ResourceHomeComponent() {
    }
    ResourceHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resource-home',
            template: __webpack_require__(/*! ./resource-home.component.html */ "./src/app/resource/resource-home/resource-home.component.html"),
            styles: [__webpack_require__(/*! ./resource-home.component.css */ "./src/app/resource/resource-home/resource-home.component.css")]
        })
    ], ResourceHomeComponent);
    return ResourceHomeComponent;
}());



/***/ }),

/***/ "./src/app/resource/resource-list/resource-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/resource/resource-list/resource-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/resource/resource-list/resource-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/resource/resource-list/resource-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <mat-toolbar>\n        <span>{{projectData?.fullname}} > All Resources</span>\n    </mat-toolbar>\n\n    <div class=\"button-row\">\n        <a mat-raised-button color=\"primary\" [routerLink]=\"['/resources','create',projectId]\"><mat-icon>add</mat-icon></a>\n    </div>\n\n    <div class=\"example-container mat-elevation-z8\">\n        <table mat-table #table matSort [dataSource]=\"dataSource\">\n\n            <ng-container matColumnDef=\"edit\">\n                <th mat-header-cell *matHeaderCellDef>Edit</th>\n                <td mat-cell *matCellDef=\"let element\">\n                    <a mat-icon-button color=\"primary\" [routerLink]=\"['/resources',element._id]\">\n                        <mat-icon class=\"mat-18\">edit</mat-icon>\n                    </a>\n                </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"locked\">\n                <th mat-header-cell *matHeaderCellDef>locked</th>\n                <td mat-cell *matCellDef=\"let element\">{{element.locked}}</td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"shortname\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>shortname</th>\n                <td mat-cell *matCellDef=\"let element\">{{element.shortname}}</td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"fullname\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>fullname</th>\n                <td mat-cell *matCellDef=\"let element\">{{element.fullname}}</td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"description\">\n                <th mat-header-cell *matHeaderCellDef>description</th>\n                <td mat-cell *matCellDef=\"let element\">{{element.description}}</td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        </table>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/resource/resource-list/resource-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/resource/resource-list/resource-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: ResourceListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceListComponent", function() { return ResourceListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var angular_alert_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-alert-module */ "./node_modules/angular-alert-module/fesm5/alerts.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services/api.service */ "./src/app/_services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ResourceListComponent = /** @class */ (function () {
    function ResourceListComponent(api, route, router, alerts) {
        this.api = api;
        this.route = route;
        this.router = router;
        this.alerts = alerts;
        // Columns to display
        this.displayedColumns = [
            'edit',
            'locked',
            'shortname',
            'fullname'
        ];
        // The project
        this.projectData = '';
        this.projectId = '';
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        // Project ID from the URL Params
        this.projectId = route.snapshot.params.projectId;
    }
    ResourceListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Provide sorting to the data source
        this.dataSource.sort = this.sort;
        // Get the project
        this.api.getProject(this.projectId).subscribe(function (resp) {
            if (resp['success'] === undefined || resp['success'] == false) {
                _this.alerts.setMessage(resp['msg'], 'error');
                _this.router.navigate(['/organizations']);
            }
            else if (resp['data'] === undefined || !Object.keys(resp['data']).length) {
                _this.alerts.setMessage('Error fetching data', 'error');
                _this.router.navigate(['/organizations']);
            }
            else {
                // Save the project locally
                _this.projectData = resp['data'];
                // Get the project's projects
                _this.api.getResources(_this.projectId).subscribe(function (resp) {
                    // Populate the data source
                    if (resp['success'] !== undefined && resp['success'] == true
                        && resp['data'] !== undefined) {
                        _this.dataSource.data = resp['data'];
                    }
                }, function (err) {
                    if (err['status'] == 401) {
                        localStorage.clear();
                        _this.router.navigate(['/user/login']);
                    }
                });
            }
        }, function (err) {
            if (err['status'] == 401) {
                localStorage.clear();
                _this.router.navigate(['/user/login']);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], ResourceListComponent.prototype, "sort", void 0);
    ResourceListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resource-list',
            template: __webpack_require__(/*! ./resource-list.component.html */ "./src/app/resource/resource-list/resource-list.component.html"),
            styles: [__webpack_require__(/*! ./resource-list.component.css */ "./src/app/resource/resource-list/resource-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], angular_alert_module__WEBPACK_IMPORTED_MODULE_4__["AlertsService"]])
    ], ResourceListComponent);
    return ResourceListComponent;
}());



/***/ }),

/***/ "./src/app/resource/resource-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/resource/resource-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ResourceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceRoutingModule", function() { return ResourceRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _resource_home_resource_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resource-home/resource-home.component */ "./src/app/resource/resource-home/resource-home.component.ts");
/* harmony import */ var _resource_list_resource_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resource-list/resource-list.component */ "./src/app/resource/resource-list/resource-list.component.ts");
/* harmony import */ var _resource_detail_resource_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resource-detail/resource-detail.component */ "./src/app/resource/resource-detail/resource-detail.component.ts");
/* harmony import */ var _resource_create_resource_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resource-create/resource-create.component */ "./src/app/resource/resource-create/resource-create.component.ts");
/* harmony import */ var _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_guards/auth-guard.service */ "./src/app/_guards/auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: 'resources',
        component: _resource_home_resource_home_component__WEBPACK_IMPORTED_MODULE_2__["ResourceHomeComponent"],
        canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        children: [
            {
                path: '',
                component: _resource_list_resource_list_component__WEBPACK_IMPORTED_MODULE_3__["ResourceListComponent"]
            },
            {
                path: 'create/:projectId',
                component: _resource_create_resource_create_component__WEBPACK_IMPORTED_MODULE_5__["ResourceCreateComponent"]
            },
            {
                path: ':id',
                component: _resource_detail_resource_detail_component__WEBPACK_IMPORTED_MODULE_4__["ResourceDetailComponent"]
            },
            {
                path: 'project/:projectId',
                component: _resource_list_resource_list_component__WEBPACK_IMPORTED_MODULE_3__["ResourceListComponent"]
            }
        ]
    }
];
var ResourceRoutingModule = /** @class */ (function () {
    function ResourceRoutingModule() {
    }
    ResourceRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], ResourceRoutingModule);
    return ResourceRoutingModule;
}());



/***/ }),

/***/ "./src/app/resource/resource.module.ts":
/*!*********************************************!*\
  !*** ./src/app/resource/resource.module.ts ***!
  \*********************************************/
/*! exports provided: ResourceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceModule", function() { return ResourceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialogs_dialog_delete_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_dialogs/dialog-delete.component */ "./src/app/_dialogs/dialog-delete.component.ts");
/* harmony import */ var _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_guards/auth-guard.service */ "./src/app/_guards/auth-guard.service.ts");
/* harmony import */ var _guards_admin_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_guards/admin-guard.service */ "./src/app/_guards/admin-guard.service.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _resource_home_resource_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./resource-home/resource-home.component */ "./src/app/resource/resource-home/resource-home.component.ts");
/* harmony import */ var _resource_create_resource_create_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./resource-create/resource-create.component */ "./src/app/resource/resource-create/resource-create.component.ts");
/* harmony import */ var _resource_list_resource_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./resource-list/resource-list.component */ "./src/app/resource/resource-list/resource-list.component.ts");
/* harmony import */ var _resource_detail_resource_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./resource-detail/resource-detail.component */ "./src/app/resource/resource-detail/resource-detail.component.ts");
/* harmony import */ var _resource_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./resource-routing.module */ "./src/app/resource/resource-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Generic imports






// Standard imports for all routes




// Resource specific imports





var ResourceModule = /** @class */ (function () {
    function ResourceModule() {
    }
    ResourceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _resource_routing_module__WEBPACK_IMPORTED_MODULE_14__["ResourceRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
            ],
            declarations: [
                _resource_home_resource_home_component__WEBPACK_IMPORTED_MODULE_10__["ResourceHomeComponent"],
                _resource_create_resource_create_component__WEBPACK_IMPORTED_MODULE_11__["ResourceCreateComponent"],
                _resource_list_resource_list_component__WEBPACK_IMPORTED_MODULE_12__["ResourceListComponent"],
                _resource_detail_resource_detail_component__WEBPACK_IMPORTED_MODULE_13__["ResourceDetailComponent"]
            ],
            providers: [
                _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"],
                _guards_admin_guard_service__WEBPACK_IMPORTED_MODULE_8__["AdminGuard"]
            ],
            entryComponents: [_dialogs_dialog_delete_component__WEBPACK_IMPORTED_MODULE_6__["DialogDeleteComponent"]]
        })
    ], ResourceModule);
    return ResourceModule;
}());



/***/ }),

/***/ "./src/app/role/role-create/role-create.component.css":
/*!************************************************************!*\
  !*** ./src/app/role/role-create/role-create.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/role/role-create/role-create.component.html":
/*!*************************************************************!*\
  !*** ./src/app/role/role-create/role-create.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <form [formGroup]=\"thisForm\" (ngSubmit)=\"onFormSubmit(thisForm.value)\">\n\n                <mat-toolbar>\n                    <span>{{ roleModelType | titlecase}}</span>\n                    <span>&nbsp;{{'| ' + roleModel?.fullname }} > Create Role</span>\n                </mat-toolbar>\n\n                <div class=\"button-row\">\n                    <a mat-raised-button color=\"primary\" [routerLink]=\"['/roles', roleModelType, roleModelId]\"><mat-icon>list</mat-icon></a>\n                </div>\n\n                <div class=\"button-row\">\n                    <button type=\"submit\" [disabled]=\"!thisForm.valid\" mat-raised-button color=\"primary\"><mat-icon>save</mat-icon></button>\n                </div>\n\n                <mat-form-field class=\"example-full-width\">\n                    <mat-label>User</mat-label>\n                    <mat-select formControlName=\"user\" [errorStateMatcher]=\"matcher\">\n                        <mat-option *ngFor=\"let user of users\" [value]=\"user._id\">\n                            {{ user.firstname  + ' ' + user.lastname}} \n                        </mat-option>\n                    </mat-select>\n                    <mat-error>\n                        <div *ngIf=\"f.user.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.user.errors.required\">Required</div>\n                        </div>\n                    </mat-error>\n                </mat-form-field>\n\n                <mat-form-field class=\"example-full-width\">\n                    <mat-label>Role</mat-label>\n                    <mat-select formControlName=\"role\" [errorStateMatcher]=\"matcher\">\n                        <mat-option *ngFor=\"let role of allowedRoles\" [value]=\"role.value\">\n                            {{role.text}} \n                        </mat-option>\n                    </mat-select>\n                    <mat-error>\n                        <div *ngIf=\"f.role.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.role.errors.required\">Required</div>\n                        </div>\n                    </mat-error>\n                </mat-form-field>\n\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/role/role-create/role-create.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/role/role-create/role-create.component.ts ***!
  \***********************************************************/
/*! exports provided: RoleCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleCreateComponent", function() { return RoleCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_alert_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-alert-module */ "./node_modules/angular-alert-module/fesm5/alerts.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/api.service */ "./src/app/_services/api.service.ts");
/* harmony import */ var _role_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../role-data.service */ "./src/app/role/role-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RoleCreateComponent = /** @class */ (function () {
    function RoleCreateComponent(roleDataService, router, route, api, formBuilder, alerts) {
        var _this = this;
        this.roleDataService = roleDataService;
        this.router = router;
        this.route = route;
        this.api = api;
        this.formBuilder = formBuilder;
        this.alerts = alerts;
        // will contain all users data
        this.users = [];
        // will contain all allowed user roles
        this.allowedRoles = [];
        // Variables to host data about the queried model in the URL
        this.roleModel = '';
        this.roleModelType = '';
        this.roleModelId = '';
        // Check which model (organization, project) we are creating for
        this.route.url.subscribe(function (params) {
            // Is it an organization or a project
            // Read from the url parameter
            _this.roleModelType = params[1].path;
            _this.roleModelId = params[2].path;
        });
    }
    RoleCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get the allowed user roles
        this.roleDataService.getAllowedRoles().subscribe(function (resp) {
            _this.allowedRoles = resp;
        }, function (err) {
            if (err['status'] == 401) {
                localStorage.clear();
                _this.router.navigate(['/user/login']);
            }
        });
        this.thisForm = this.formBuilder.group({
            'user': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            'role': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        // Get the queried model from the URL
        // Creating a role for a user in either:
        // - an organization
        // - a project
        // Get the queried project
        if (this.roleModelType == 'project') {
            this.api.getProject(this.roleModelId).subscribe(function (resp) {
                // Errors
                if (resp['success'] === undefined || resp['success'] == false) {
                    _this.alerts.setMessage(resp['msg'], 'error');
                    _this.router.navigate(['/roles/' + _this.roleModelType + '/' + _this.roleModelId]);
                }
                else if (resp['data'] === undefined || !Object.keys(resp['data']).length) {
                    _this.alerts.setMessage('Error fetching data', 'error');
                    _this.router.navigate(['/roles/' + _this.roleModelType + '/' + _this.roleModelId]);
                }
                else {
                    // Save the data locally
                    _this.roleModel = resp['data'];
                }
            }, function (err) {
                if (err['status'] == 401) {
                    localStorage.clear();
                    _this.router.navigate(['/user/login']);
                }
                // else, some error
                _this.alerts.setMessage('Error', 'error');
                _this.router.navigate(['/roles/' + _this.roleModelType + '/' + _this.roleModelId]);
            });
        }
        else if (this.roleModelType == 'org') {
            this.api.getOrganization(this.roleModelId).subscribe(function (resp) {
                // Errors
                if (resp['success'] === undefined || resp['success'] == false) {
                    _this.alerts.setMessage(resp['msg'], 'error');
                    _this.router.navigate(['/roles/' + _this.roleModelType + '/' + _this.roleModelId]);
                }
                else if (resp['data'] === undefined || !Object.keys(resp['data']).length) {
                    _this.alerts.setMessage('Error fetching data', 'error');
                    _this.router.navigate(['/roles/' + _this.roleModelType + '/' + _this.roleModelId]);
                }
                else {
                    // Save the data locally
                    _this.roleModel = resp['data'];
                }
            }, function (err) {
                if (err['status'] == 401) {
                    localStorage.clear();
                    _this.router.navigate(['/user/login']);
                }
                // any other error
                _this.alerts.setMessage('Error', 'error');
                _this.router.navigate(['/roles/' + _this.roleModelType + '/' + _this.roleModelId]);
            });
        }
        // Get all users to populate the dropdown control for users
        this.api.getUsers().subscribe(function (resp) {
            // Errors
            if (resp['success'] === undefined || resp['success'] == false) {
                _this.alerts.setMessage(resp['msg'], 'error');
                _this.router.navigate(['/roles/' + _this.roleModelType + '/' + _this.roleModelId]);
            }
            else if (resp['data'] === undefined || !resp['data'].length) {
                _this.alerts.setMessage('No valid users found', 'error');
                _this.router.navigate(['/roles/' + _this.roleModelType + '/' + _this.roleModelId]);
            }
            else {
                // Save the data locally
                _this.users = resp['data'];
            }
        }, function (err) {
            if (err['status'] == 401) {
                localStorage.clear();
                _this.router.navigate(['/user/login']);
            }
        });
    };
    Object.defineProperty(RoleCreateComponent.prototype, "f", {
        get: function () { return this.thisForm.controls; },
        enumerable: true,
        configurable: true
    });
    RoleCreateComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        this.api.postUserRole(this.roleModelType, this.roleModelId, form).subscribe(function (resp) {
            // Ok
            if (resp['success'] !== undefined && resp['success'] == true) {
                _this.alerts.setMessage(resp['msg'], 'success');
            }
            else {
                var error = ('error' in resp) ? resp['error'] : '';
                var errorMsg = ('msg' in resp) ? resp['msg'] : '';
                // Duplicate unique fields
                if (error && error.code == 11000) {
                    var errorField = '';
                    for (var fieldKey in error.field) {
                        errorField = fieldKey;
                    }
                    _this.alerts.setMessage('Field must be unique: ' + errorField, 'error');
                }
                else if (errorMsg) {
                    _this.alerts.setMessage(errorMsg, 'error');
                }
            }
            _this.router.navigate(['/roles/' + _this.roleModelType + '/' + _this.roleModelId]);
        }, function (err) {
            if (err['status'] == 401) {
                localStorage.clear();
                _this.router.navigate(['/user/login']);
            }
        });
    };
    RoleCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-role-create',
            template: __webpack_require__(/*! ./role-create.component.html */ "./src/app/role/role-create/role-create.component.html"),
            styles: [__webpack_require__(/*! ./role-create.component.css */ "./src/app/role/role-create/role-create.component.css")]
        }),
        __metadata("design:paramtypes", [_role_data_service__WEBPACK_IMPORTED_MODULE_5__["RoleDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            angular_alert_module__WEBPACK_IMPORTED_MODULE_3__["AlertsService"]])
    ], RoleCreateComponent);
    return RoleCreateComponent;
}());



/***/ }),

/***/ "./src/app/role/role-data.service.ts":
/*!*******************************************!*\
  !*** ./src/app/role/role-data.service.ts ***!
  \*******************************************/
/*! exports provided: RoleDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleDataService", function() { return RoleDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var RoleDataService = /** @class */ (function () {
    function RoleDataService() {
        this.allowedRoles = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([
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
    }
    RoleDataService.prototype.getAllowedRoles = function () {
        return this.allowedRoles.asObservable();
    };
    RoleDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], RoleDataService);
    return RoleDataService;
}());



/***/ }),

/***/ "./src/app/role/role-detail/role-detail.component.css":
/*!************************************************************!*\
  !*** ./src/app/role/role-detail/role-detail.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/role/role-detail/role-detail.component.html":
/*!*************************************************************!*\
  !*** ./src/app/role/role-detail/role-detail.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <form [formGroup]=\"thisForm\" (ngSubmit)=\"onFormSubmit(thisForm.value)\">\n                \n                <mat-toolbar>\n                    <span>{{ roleModelType | titlecase}}</span>\n                    <span>&nbsp;{{'| ' + roleModel?.fullname }} > Edit Role</span>\n                </mat-toolbar>\n\n                <div class=\"button-row\">\n                    <a mat-raised-button color=\"primary\" [routerLink]=\"['/roles', roleModelType, roleModelId]\"><mat-icon>list</mat-icon></a>\n                </div>\n\n                <div class=\"button-row\">\n                    <button type=\"submit\" [disabled]=\"!thisForm.valid\" mat-raised-button color=\"primary\"><mat-icon>save</mat-icon></button>\n                    <a mat-raised-button color=\"warn\" (click)=\"deleteEntry()\"><mat-icon>delete_forever</mat-icon></a>\n                </div>\n\n                <div class=\"row query-info\">\n                    <div class=\"col-lg-2\">\n                        <label>User</label>\n                        <h6>{{data.user?.firstname + ' ' + data.user?.lastname}}</h6>\n                    </div>\n                </div>\n\n                <mat-form-field class=\"example-full-width\">\n                    <mat-label>Role</mat-label>\n                    <mat-select formControlName=\"role\" [errorStateMatcher]=\"matcher\">\n                        <mat-option *ngFor=\"let role of allowedRoles\" [value]=\"role.value\">\n                            {{role.text}} \n                        </mat-option>\n                    </mat-select>\n                    <mat-error>\n                        <div *ngIf=\"f.role.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.role.errors.required\">Required</div>\n                        </div>\n                    </mat-error>\n                </mat-form-field>\n\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/role/role-detail/role-detail.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/role/role-detail/role-detail.component.ts ***!
  \***********************************************************/
/*! exports provided: RoleDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleDetailComponent", function() { return RoleDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/api.service */ "./src/app/_services/api.service.ts");
/* harmony import */ var _dialogs_dialog_delete_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_dialogs/dialog-delete.component */ "./src/app/_dialogs/dialog-delete.component.ts");
/* harmony import */ var angular_alert_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-alert-module */ "./node_modules/angular-alert-module/fesm5/alerts.js");
/* harmony import */ var _role_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../role-data.service */ "./src/app/role/role-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RoleDetailComponent = /** @class */ (function () {
    function RoleDetailComponent(roleDataService, router, route, api, formBuilder, dialog, alerts) {
        var _this = this;
        this.roleDataService = roleDataService;
        this.router = router;
        this.route = route;
        this.api = api;
        this.formBuilder = formBuilder;
        this.dialog = dialog;
        this.alerts = alerts;
        this.data = [];
        // will contain all allowed user roles
        this.allowedRoles = [];
        // Variables to host data about the queried model in the URL
        this.roleModel = '';
        this.roleModelType = '';
        this.roleModelId = '';
        this.route.url.subscribe(function (params) {
            // Is it an organization or a project
            // Read from the url parameter
            _this.roleModelType = params[1].path;
            _this.roleModelId = params[2].path;
        });
    }
    RoleDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Create form
        this.thisForm = this.formBuilder.group({
            'role': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        // Get the allowed user roles
        this.roleDataService.getAllowedRoles().subscribe(function (resp) {
            _this.allowedRoles = resp;
        }, function (err) {
            if (err['status'] == 401) {
                localStorage.clear();
                _this.router.navigate(['/user/login']);
            }
        });
        // Get data of the queried user's role
        this.getData(this.route.snapshot.params['id']);
        /////////////
        // Get the queried project
        /////////////
        if (this.roleModelType == 'project') {
            this.api.getProject(this.roleModelId).subscribe(function (resp) {
                // Errors
                if (resp['success'] === undefined || resp['success'] == false) {
                    _this.alerts.setMessage(resp['msg'], 'error');
                    _this.router.navigate(['/roles/' + _this.roleModelType + '/' + _this.roleModelId]);
                }
                else if (resp['data'] === undefined || !Object.keys(resp['data']).length) {
                    _this.alerts.setMessage('Error fetching data', 'error');
                    _this.router.navigate(['/roles/' + _this.roleModelType + '/' + _this.roleModelId]);
                }
                else {
                    // Save the data locally
                    _this.roleModel = resp['data'];
                }
            }, function (err) {
                if (err['status'] == 401) {
                    localStorage.clear();
                    _this.router.navigate(['/user/login']);
                }
            });
        }
        else if (this.roleModelType == 'org') {
            this.api.getOrganization(this.roleModelId).subscribe(function (resp) {
                // Errors
                if (resp['success'] === undefined || resp['success'] == false) {
                    _this.alerts.setMessage(resp['msg'], 'error');
                    _this.router.navigate(['/roles/' + _this.roleModelType + '/' + _this.roleModelId]);
                }
                else if (resp['data'] === undefined || !Object.keys(resp['data']).length) {
                    _this.alerts.setMessage('Error fetching data', 'error');
                    _this.router.navigate(['/roles/' + _this.roleModelType + '/' + _this.roleModelId]);
                }
                else {
                    // Save the data locally
                    _this.roleModel = resp['data'];
                }
            }, function (err) {
                if (err['status'] == 401) {
                    localStorage.clear();
                    _this.router.navigate(['/user/login']);
                }
            });
        }
    };
    Object.defineProperty(RoleDetailComponent.prototype, "f", {
        get: function () { return this.thisForm.controls; },
        enumerable: true,
        configurable: true
    });
    // Get data via API
    RoleDetailComponent.prototype.getData = function (id) {
        var _this = this;
        this.api.getUserRole(id, this.roleModelType, this.roleModelId).subscribe(function (resp) {
            // Errors
            if (resp['success'] === undefined || resp['success'] == false) {
                _this.alerts.setMessage(resp['msg'], 'error');
                _this.router.navigate(['/roles/' + _this.roleModelType + '/' + _this.roleModelId]);
            }
            else if (resp['data'] === undefined || !Object.keys(resp['data']).length) {
                _this.alerts.setMessage('Error fetching data', 'error');
                _this.router.navigate(['/roles/' + _this.roleModelType + '/' + _this.roleModelId]);
            }
            else {
                // Save a copy of the data to be used locally
                _this.data = resp['data'];
                // Update the form values
                _this.thisForm.setValue({
                    role: (resp['data'].role !== undefined && resp['data'].role) ? resp['data'].role : 'member'
                });
            }
        }, function (err) {
            if (err['status'] == 401) {
                localStorage.clear();
                _this.router.navigate(['/user/login']);
            }
        });
    };
    // Form submit
    RoleDetailComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        // Update via API
        this.api.putUserRole(this.route.snapshot.params['id'], this.roleModelType, this.roleModelId, form)
            .subscribe(function (resp) {
            // Ok
            if (resp['success'] !== undefined && resp['success'] == true) {
                _this.alerts.setMessage(resp['msg'], 'success');
            }
            else {
                _this.alerts.setMessage(resp['msg'], 'error');
            }
        }, function (err) {
            if (err['status'] == 401) {
                localStorage.clear();
                _this.router.navigate(['/user/login']);
            }
        });
    };
    // Delete entry
    RoleDetailComponent.prototype.deleteEntry = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_dialog_delete_component__WEBPACK_IMPORTED_MODULE_5__["DialogDeleteComponent"]);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result !== undefined && result == true) {
                // Call the API to delete the role
                _this.api.deleteUserRole(_this.data['_id'], _this.roleModelType, _this.roleModelId)
                    .subscribe(function (resp) {
                    // Success
                    if (resp['success'] !== undefined && resp['success'] == true) {
                        _this.alerts.setMessage(resp['msg'], 'success');
                        _this.router.navigate(['/roles/' + _this.roleModelType + '/' + _this.roleModelId]);
                    }
                    else {
                        _this.alerts.setMessage(resp['msg'], 'error');
                    }
                }, function (err) {
                    if (err['status'] == 401) {
                        localStorage.clear();
                        _this.router.navigate(['/user/login']);
                    }
                });
            }
        });
    };
    RoleDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-role-detail',
            template: __webpack_require__(/*! ./role-detail.component.html */ "./src/app/role/role-detail/role-detail.component.html"),
            styles: [__webpack_require__(/*! ./role-detail.component.css */ "./src/app/role/role-detail/role-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_role_data_service__WEBPACK_IMPORTED_MODULE_7__["RoleDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], angular_alert_module__WEBPACK_IMPORTED_MODULE_6__["AlertsService"]])
    ], RoleDetailComponent);
    return RoleDetailComponent;
}());



/***/ }),

/***/ "./src/app/role/role-home/role-home.component.css":
/*!********************************************************!*\
  !*** ./src/app/role/role-home/role-home.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/role/role-home/role-home.component.html":
/*!*********************************************************!*\
  !*** ./src/app/role/role-home/role-home.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/role/role-home/role-home.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/role/role-home/role-home.component.ts ***!
  \*******************************************************/
/*! exports provided: RoleHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleHomeComponent", function() { return RoleHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RoleHomeComponent = /** @class */ (function () {
    function RoleHomeComponent() {
    }
    RoleHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-role-home',
            template: __webpack_require__(/*! ./role-home.component.html */ "./src/app/role/role-home/role-home.component.html"),
            styles: [__webpack_require__(/*! ./role-home.component.css */ "./src/app/role/role-home/role-home.component.css")]
        })
    ], RoleHomeComponent);
    return RoleHomeComponent;
}());



/***/ }),

/***/ "./src/app/role/role-list/role-list.component.css":
/*!********************************************************!*\
  !*** ./src/app/role/role-list/role-list.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/role/role-list/role-list.component.html":
/*!*********************************************************!*\
  !*** ./src/app/role/role-list/role-list.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <mat-toolbar>\n        <span>{{ roleModelType | titlecase}}</span>\n        <span>&nbsp;{{'| ' + roleModel?.fullname }} > Roles</span>\n    </mat-toolbar>\n\n    <div class=\"button-row\">\n        <a mat-raised-button color=\"primary\" [routerLink]=\"['/roles','create',roleModelType, roleModelId]\"><mat-icon>add</mat-icon></a>\n    </div>\n\n    <div class=\"example-container mat-elevation-z8\">\n        <table mat-table #table matSort [dataSource]=\"dataSource\">\n\n            <ng-container matColumnDef=\"edit\">\n                <th mat-header-cell *matHeaderCellDef>Edit</th>\n                <td mat-cell *matCellDef=\"let element\">\n                    <a mat-icon-button color=\"primary\" [routerLink]=\"['/roles',element._id,roleModelType,roleModelId]\">\n                        <mat-icon class=\"mat-18\">edit</mat-icon>\n                    </a>\n                </td>\n            </ng-container> \n\n            <ng-container matColumnDef=\"role\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>role</th>\n                <td mat-cell *matCellDef=\"let element\">{{element.role}}</td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"user\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>User</th>\n                <td mat-cell *matCellDef=\"let element\">{{element.user.firstname + ' ' + element.user.lastname}}</td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        </table>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/role/role-list/role-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/role/role-list/role-list.component.ts ***!
  \*******************************************************/
/*! exports provided: RoleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleListComponent", function() { return RoleListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var angular_alert_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-alert-module */ "./node_modules/angular-alert-module/fesm5/alerts.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services/api.service */ "./src/app/_services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RoleListComponent = /** @class */ (function () {
    function RoleListComponent(api, route, router, alerts) {
        var _this = this;
        this.api = api;
        this.route = route;
        this.router = router;
        this.alerts = alerts;
        // Columns to display
        this.displayedColumns = [
            'edit',
            'role',
            'user'
        ];
        // Variables to host data about the queried model in the URL
        this.roleModel = '';
        this.roleModelType = '';
        this.roleModelId = '';
        // Source for the table data
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        // Check which model (organization, project) we are creating for
        this.roleModelId = route.snapshot.params.id;
        this.route.url.subscribe(function (params) {
            // Is it an organization or a project
            // Read from the url parameter
            _this.roleModelType = params[0].path;
        });
    }
    RoleListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Provide sorting to the data source
        this.dataSource.sort = this.sort;
        // Get the data
        this.api.getUserRoles(this.roleModelType, this.roleModelId).subscribe(function (resp) {
            // Populate the data source
            if (resp['success'] !== undefined && resp['success'] == true
                && resp['data'] !== undefined) {
                _this.dataSource.data = resp['data'];
            }
        }, function (err) {
            if (err['status'] == 401) {
                localStorage.clear();
                _this.router.navigate(['/user/login']);
            }
        });
        /////////////
        // Get the queried project
        if (this.roleModelType == 'project') {
            this.api.getProject(this.roleModelId).subscribe(function (resp) {
                // Errors
                if (resp['success'] === undefined || resp['success'] == false) {
                    _this.alerts.setMessage(resp['msg'], 'error');
                    _this.router.navigate(['/projects']);
                }
                else if (resp['data'] === undefined || !Object.keys(resp['data']).length) {
                    _this.alerts.setMessage('Error fetching data', 'error');
                    _this.router.navigate(['/projects']);
                }
                else {
                    // Save the data locally
                    _this.roleModel = resp['data'];
                }
            }, function (err) {
                if (err['status'] == 401) {
                    localStorage.clear();
                    _this.router.navigate(['/user/login']);
                }
                // any other error
                _this.alerts.setMessage('Invalid project', 'error');
                _this.router.navigate(['/projects']);
            });
        }
        else if (this.roleModelType == 'org') {
            this.api.getOrganization(this.roleModelId).subscribe(function (resp) {
                // Errors
                if (resp['success'] === undefined || resp['success'] == false) {
                    _this.alerts.setMessage(resp['msg'], 'error');
                    _this.router.navigate(['/organizations']);
                }
                else if (resp['data'] === undefined || !Object.keys(resp['data']).length) {
                    _this.alerts.setMessage('Error fetching data', 'error');
                    _this.router.navigate(['/organizations']);
                }
                else {
                    // Save the data locally
                    _this.roleModel = resp['data'];
                }
            }, function (err) {
                if (err['status'] == 401) {
                    localStorage.clear();
                    _this.router.navigate(['/user/login']);
                }
                // any other error
                _this.alerts.setMessage('Invalid organization', 'error');
                _this.router.navigate(['/organizations']);
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], RoleListComponent.prototype, "sort", void 0);
    RoleListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-role-list',
            template: __webpack_require__(/*! ./role-list.component.html */ "./src/app/role/role-list/role-list.component.html"),
            styles: [__webpack_require__(/*! ./role-list.component.css */ "./src/app/role/role-list/role-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], angular_alert_module__WEBPACK_IMPORTED_MODULE_4__["AlertsService"]])
    ], RoleListComponent);
    return RoleListComponent;
}());



/***/ }),

/***/ "./src/app/role/role-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/role/role-routing.module.ts ***!
  \*********************************************/
/*! exports provided: RoleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleRoutingModule", function() { return RoleRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _role_home_role_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./role-home/role-home.component */ "./src/app/role/role-home/role-home.component.ts");
/* harmony import */ var _role_list_role_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./role-list/role-list.component */ "./src/app/role/role-list/role-list.component.ts");
/* harmony import */ var _role_detail_role_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./role-detail/role-detail.component */ "./src/app/role/role-detail/role-detail.component.ts");
/* harmony import */ var _role_create_role_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./role-create/role-create.component */ "./src/app/role/role-create/role-create.component.ts");
/* harmony import */ var _role_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./role-data.service */ "./src/app/role/role-data.service.ts");
/* harmony import */ var _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_guards/auth-guard.service */ "./src/app/_guards/auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: 'roles',
        component: _role_home_role_home_component__WEBPACK_IMPORTED_MODULE_2__["RoleHomeComponent"],
        canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
        children: [
            {
                path: '',
                component: _role_home_role_home_component__WEBPACK_IMPORTED_MODULE_2__["RoleHomeComponent"]
            },
            {
                path: 'create/org/:roleModelId',
                component: _role_create_role_create_component__WEBPACK_IMPORTED_MODULE_5__["RoleCreateComponent"]
            },
            {
                path: 'create/project/:roleModelId',
                component: _role_create_role_create_component__WEBPACK_IMPORTED_MODULE_5__["RoleCreateComponent"]
            },
            {
                path: ':id/org/:roleModelId',
                component: _role_detail_role_detail_component__WEBPACK_IMPORTED_MODULE_4__["RoleDetailComponent"]
            },
            {
                path: ':id/project/:roleModelId',
                component: _role_detail_role_detail_component__WEBPACK_IMPORTED_MODULE_4__["RoleDetailComponent"]
            },
            {
                path: 'org/:id',
                component: _role_list_role_list_component__WEBPACK_IMPORTED_MODULE_3__["RoleListComponent"]
            },
            {
                path: 'project/:id',
                component: _role_list_role_list_component__WEBPACK_IMPORTED_MODULE_3__["RoleListComponent"]
            }
        ]
    }
];
var RoleRoutingModule = /** @class */ (function () {
    function RoleRoutingModule() {
    }
    RoleRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            providers: [_role_data_service__WEBPACK_IMPORTED_MODULE_6__["RoleDataService"]]
        })
    ], RoleRoutingModule);
    return RoleRoutingModule;
}());



/***/ }),

/***/ "./src/app/role/role.module.ts":
/*!*************************************!*\
  !*** ./src/app/role/role.module.ts ***!
  \*************************************/
/*! exports provided: RoleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleModule", function() { return RoleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialogs_dialog_delete_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_dialogs/dialog-delete.component */ "./src/app/_dialogs/dialog-delete.component.ts");
/* harmony import */ var _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_guards/auth-guard.service */ "./src/app/_guards/auth-guard.service.ts");
/* harmony import */ var _guards_admin_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_guards/admin-guard.service */ "./src/app/_guards/admin-guard.service.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _role_home_role_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./role-home/role-home.component */ "./src/app/role/role-home/role-home.component.ts");
/* harmony import */ var _role_create_role_create_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./role-create/role-create.component */ "./src/app/role/role-create/role-create.component.ts");
/* harmony import */ var _role_list_role_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./role-list/role-list.component */ "./src/app/role/role-list/role-list.component.ts");
/* harmony import */ var _role_detail_role_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./role-detail/role-detail.component */ "./src/app/role/role-detail/role-detail.component.ts");
/* harmony import */ var _role_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./role-routing.module */ "./src/app/role/role-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Generic imports






// Standard imports for all routes




// Role specific imports





var RoleModule = /** @class */ (function () {
    function RoleModule() {
    }
    RoleModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _role_routing_module__WEBPACK_IMPORTED_MODULE_14__["RoleRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"]
            ],
            declarations: [
                _role_home_role_home_component__WEBPACK_IMPORTED_MODULE_10__["RoleHomeComponent"],
                _role_create_role_create_component__WEBPACK_IMPORTED_MODULE_11__["RoleCreateComponent"],
                _role_list_role_list_component__WEBPACK_IMPORTED_MODULE_12__["RoleListComponent"],
                _role_detail_role_detail_component__WEBPACK_IMPORTED_MODULE_13__["RoleDetailComponent"]
            ],
            providers: [
                _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"],
                _guards_admin_guard_service__WEBPACK_IMPORTED_MODULE_8__["AdminGuard"]
            ],
            entryComponents: [_dialogs_dialog_delete_component__WEBPACK_IMPORTED_MODULE_6__["DialogDeleteComponent"]]
        })
    ], RoleModule);
    return RoleModule;
}());



/***/ }),

/***/ "./src/app/user/user-home/user-home.component.css":
/*!********************************************************!*\
  !*** ./src/app/user/user-home/user-home.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user-home/user-home.component.html":
/*!*********************************************************!*\
  !*** ./src/app/user/user-home/user-home.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/user/user-home/user-home.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/user/user-home/user-home.component.ts ***!
  \*******************************************************/
/*! exports provided: UserHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserHomeComponent", function() { return UserHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserHomeComponent = /** @class */ (function () {
    function UserHomeComponent() {
    }
    UserHomeComponent.prototype.ngOnInit = function () {
    };
    UserHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-home',
            template: __webpack_require__(/*! ./user-home.component.html */ "./src/app/user/user-home/user-home.component.html"),
            styles: [__webpack_require__(/*! ./user-home.component.css */ "./src/app/user/user-home/user-home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserHomeComponent);
    return UserHomeComponent;
}());



/***/ }),

/***/ "./src/app/user/user-login/user-login.component.css":
/*!**********************************************************!*\
  !*** ./src/app/user/user-login/user-login.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n  padding-top: 40px;\r\n  padding-bottom: 40px;\r\n  background-color: #eee;\r\n}\r\n\r\n.form-signin {\r\n  max-width: 330px;\r\n  padding: 15px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.form-signin .form-signin-heading,\r\n.form-signin .checkbox {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.form-signin .checkbox {\r\n  font-weight: normal;\r\n}\r\n\r\n.form-signin .form-control {\r\n  position: relative;\r\n  height: auto;\r\n  box-sizing: border-box;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n}\r\n\r\n.form-signin .form-control:focus {\r\n  z-index: 2;\r\n}\r\n\r\n.form-signin input[type=\"email\"] {\r\n  margin-bottom: -1px;\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n\r\n.form-signin input[type=\"password\"] {\r\n  margin-bottom: 10px;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n\r\n.form-signin p {\r\n  margin-top: 10px;\r\n}"

/***/ }),

/***/ "./src/app/user/user-login/user-login.component.html":
/*!***********************************************************!*\
  !*** ./src/app/user/user-login/user-login.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <form class=\"form-signin\" [formGroup]=\"thisForm\" (ngSubmit)=\"onFormSubmit(thisForm.value)\">\n        <mat-form-field>\n            <input matInput placeholder=\"Enter your email\" formControlName=\"email\" [errorStateMatcher]=\"matcher\" required>\n            <mat-error>\n                <span *ngIf=\"!thisForm.get('email').valid && thisForm.get('email').touched\">Required</span>\n            </mat-error>\n        </mat-form-field>\n        \n        <mat-form-field>\n            <input matInput placeholder=\"Enter your password\" formControlName=\"password\" [type]=\"hide ? 'password' : 'text'\">\n            <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n                <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n            </button>\n            <mat-error>\n                <span *ngIf=\"!thisForm.get('password').valid && thisForm.get('password').touched\">Required</span>\n            </mat-error>\n        </mat-form-field>\n        \n        <div class=\"button-row\">\n            <button type=\"submit\" [disabled]=\"!thisForm.valid\" mat-raised-button color=\"primary\">Login</button>\n        </div>\n        \n\t\t<p>Not a member? <a [routerLink]=\"['/user/register']\">Register here</a></p>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/user/user-login/user-login.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/user/user-login/user-login.component.ts ***!
  \*********************************************************/
/*! exports provided: UserLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginComponent", function() { return UserLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/api.service */ "./src/app/_services/api.service.ts");
/* harmony import */ var angular_alert_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-alert-module */ "./node_modules/angular-alert-module/fesm5/alerts.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserLoginComponent = /** @class */ (function () {
    function UserLoginComponent(router, route, api, formBuilder, alerts) {
        this.router = router;
        this.route = route;
        this.api = api;
        this.formBuilder = formBuilder;
        this.alerts = alerts;
    }
    UserLoginComponent.prototype.ngOnInit = function () {
        // Create form
        this.thisForm = this.formBuilder.group({
            'email': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    Object.defineProperty(UserLoginComponent.prototype, "f", {
        get: function () { return this.thisForm.controls; },
        enumerable: true,
        configurable: true
    });
    // Form submit
    UserLoginComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        this.api.loginUser(form).subscribe(function (resp) {
            var msg_status = (resp['success'] !== undefined && resp['success'] == true) ? 'success' : 'error';
            if (resp['success'] !== undefined && resp['success'] == true
                && resp['token'] !== undefined && resp['token']) {
                localStorage.setItem('jwtToken', 'JWT ' + resp['token']);
                // Proceed to the main landing page for authorized users
                _this.router.navigate(['/dashboard']);
            }
            // Set alert message
            _this.alerts.setMessage(resp['msg'], msg_status);
        }, function (err) { });
    };
    UserLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-login',
            template: __webpack_require__(/*! ./user-login.component.html */ "./src/app/user/user-login/user-login.component.html"),
            styles: [__webpack_require__(/*! ./user-login.component.css */ "./src/app/user/user-login/user-login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], angular_alert_module__WEBPACK_IMPORTED_MODULE_4__["AlertsService"]])
    ], UserLoginComponent);
    return UserLoginComponent;
}());



/***/ }),

/***/ "./src/app/user/user-profile/user-profile.component.css":
/*!**************************************************************!*\
  !*** ./src/app/user/user-profile/user-profile.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user-profile/user-profile.component.html":
/*!***************************************************************!*\
  !*** ./src/app/user/user-profile/user-profile.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<form [formGroup]=\"thisForm\" (ngSubmit)=\"onFormSubmit(thisForm.value)\">\n\n\t\t<mat-form-field class=\"example-full-width\">\n\t\t\t<input matInput placeholder=\"firstname\" formControlName=\"firstname\" [errorStateMatcher]=\"matcher\">\n\t\t\t<mat-error>\n\t\t\t\t<span *ngIf=\"f.firstname.touched && f.firstname.errors?.required\">Required</span>\n\t\t\t\t<span *ngIf=\"f.firstname.touched && f.firstname.errors?.maxlength\">Maximum of 50 characters</span>\n\t\t\t</mat-error>\n\t\t</mat-form-field>\n\n\t\t<mat-form-field class=\"example-full-width\">\n\t\t\t<input matInput placeholder=\"lastname\" formControlName=\"lastname\" [errorStateMatcher]=\"matcher\">\n\t\t\t<mat-error>\n\t\t\t\t<span *ngIf=\"f.lastname.touched && f.lastname.errors?.required\">Required</span>\n\t\t\t\t<span *ngIf=\"f.lastname.touched && f.lastname.errors?.maxlength\">Maximum of 50 characters</span>\n\t\t\t</mat-error>\n\t\t</mat-form-field>\n\n\t\t<mat-form-field class=\"example-full-width\">\n\t\t\t<input matInput type=\"email\" placeholder=\"Password\" formControlName=\"password\">\n\t\t</mat-form-field>\n\n\t\t<div class=\"button-row\">\n\t\t\t<button type=\"submit\" [disabled]=\"!thisForm.valid\" mat-raised-button color=\"primary\"><mat-icon>save</mat-icon></button>\n\t\t</div>\n\t</form>\n</div>"

/***/ }),

/***/ "./src/app/user/user-profile/user-profile.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/user-profile/user-profile.component.ts ***!
  \*************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/api.service */ "./src/app/_services/api.service.ts");
/* harmony import */ var angular_alert_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-alert-module */ "./node_modules/angular-alert-module/fesm5/alerts.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(router, route, api, formBuilder, dialog, alerts) {
        this.router = router;
        this.route = route;
        this.api = api;
        this.formBuilder = formBuilder;
        this.dialog = dialog;
        this.alerts = alerts;
        this.data = [];
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Create form
        this.thisForm = this.formBuilder.group({
            'firstname': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)],
            'lastname': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)],
            'password': [null]
        });
        // Update the form values
        this.api.getLoggedInUser().subscribe(function (resp) {
            // Errors
            if (resp['success'] === undefined || resp['success'] == false) {
                _this.alerts.setMessage(resp['msg'], 'error');
                _this.router.navigate(['/dashboard']);
            }
            else if (resp['data'] === undefined || !Object.keys(resp['data']).length) {
                _this.alerts.setMessage('Error fetching data', 'error');
                _this.router.navigate(['/dashboard']);
            }
            else {
                // Save the data locally
                _this.data = resp['data'];
                _this.thisForm.setValue({
                    firstname: (resp['data'].firstname !== undefined && resp['data'].firstname) ? resp['data'].firstname : false,
                    lastname: (resp['data'].lastname !== undefined && resp['data'].lastname) ? resp['data'].lastname : '',
                    password: ''
                });
            }
        }, function (err) {
            if (err['status'] == 401) {
                localStorage.clear();
                _this.router.navigate(['/user/login']);
            }
        });
    };
    Object.defineProperty(UserProfileComponent.prototype, "f", {
        get: function () { return this.thisForm.controls; },
        enumerable: true,
        configurable: true
    });
    // Form submit
    UserProfileComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        // Update project via API
        this.api.putLoggedInUser(form)
            .subscribe(function (resp) {
            // Ok
            if (resp['success'] !== undefined && resp['success'] == true) {
                _this.alerts.setMessage(resp['msg'], 'success');
            }
            else {
                var error = ('error' in resp) ? resp['error'] : '';
                var errorMsg = ('msg' in resp) ? resp['msg'] : '';
                // Duplicate unique fields
                if (error && error.code == 11000) {
                    var errorField = '';
                    for (var fieldKey in error.field) {
                        errorField = fieldKey;
                    }
                    _this.alerts.setMessage('Field must be unique: ' + errorField, 'error');
                }
                else if (errorMsg) {
                    _this.alerts.setMessage(errorMsg, 'error');
                }
            }
        }, function (err) {
            if (err['status'] == 401) {
                localStorage.clear();
                _this.router.navigate(['/user/login']);
            }
        });
    };
    UserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/user/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/user/user-profile/user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], angular_alert_module__WEBPACK_IMPORTED_MODULE_5__["AlertsService"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/user/user-register/user-register.component.css":
/*!****************************************************************!*\
  !*** ./src/app/user/user-register/user-register.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user-register/user-register.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/user/user-register/user-register.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-6 offset-md-3\">\n            <h3>Register</h3>\n\n            <form [formGroup]=\"thisForm\" (ngSubmit)=\"onFormSubmit(thisForm.value)\">\n\n                <mat-form-field class=\"example-full-width\">\n                    <input matInput placeholder=\"Firstname\" formControlName=\"firstname\" [errorStateMatcher]=\"matcher\">\n                    <mat-error>\n                        <span *ngIf=\"f.firstname.touched && f.firstname.errors?.required\">Required</span>\n                        <span *ngIf=\"f.firstname.touched && f.firstname.errors?.maxlength\">Maximum of 50 characters</span>\n                    </mat-error>\n                </mat-form-field>\n\n                <mat-form-field class=\"example-full-width\">\n                    <input matInput placeholder=\"Lastname\" formControlName=\"lastname\" [errorStateMatcher]=\"matcher\">\n                    <mat-error>\n                        <span *ngIf=\"f.lastname.touched && f.lastname.errors?.required\">Required</span>\n                        <span *ngIf=\"f.lastname.touched && f.lastname.errors?.maxlength\">Maximum of 50 characters</span>\n                    </mat-error>\n                </mat-form-field>\n\n                <mat-form-field class=\"example-full-width\">\n                    <input matInput type=\"email\" placeholder=\"Email\" formControlName=\"email\" [errorStateMatcher]=\"matcher\">\n                    <mat-error>\n                        <span *ngIf=\"f.email.touched && f.email.errors?.required\">Required</span>\n                        <span *ngIf=\"f.email.touched && f.email.errors?.email\">Invalid email</span>\n                        <span *ngIf=\"f.email.touched && f.email.errors?.maxlength\">Maximum of 256 characters</span>\n                    </mat-error>\n                </mat-form-field>\n\n                <mat-form-field class=\"example-full-width\">\n                    <input matInput placeholder=\"Password\" formControlName=\"password\" [errorStateMatcher]=\"matcher\">\n                    <mat-error>\n                        <span *ngIf=\"f.password.touched && f.password.errors?.required\">Required</span>\n                        <span *ngIf=\"f.password.touched && f.password.errors?.minlength\">Minimum 6 characters</span>\n                    </mat-error>\n                </mat-form-field>\n\n                <mat-form-field class=\"example-full-width\">\n                    <input matInput placeholder=\"Confirm Password\" formControlName=\"confirmPassword\" [errorStateMatcher]=\"matcher\">\n                    <mat-error>\n                        <span *ngIf=\"f.confirmPassword.touched && f.confirmPassword.errors?.required\">Required</span>\n                        <span *ngIf=\"f.confirmPassword.touched && f.confirmPassword.errors?.mustMatch\">Passwords must match</span>\n                    </mat-error>\n                </mat-form-field>\n\n                <div class=\"button-row\">\n                    <button type=\"submit\" [disabled]=\"!thisForm.valid\" mat-raised-button color=\"primary\"><mat-icon>done</mat-icon></button>\n                </div>\n\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/user/user-register/user-register.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/user/user-register/user-register.component.ts ***!
  \***************************************************************/
/*! exports provided: UserRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegisterComponent", function() { return UserRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_alert_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-alert-module */ "./node_modules/angular-alert-module/fesm5/alerts.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/api.service */ "./src/app/_services/api.service.ts");
/* harmony import */ var _helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_helpers/must-match.validator */ "./src/app/_helpers/must-match.validator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserRegisterComponent = /** @class */ (function () {
    function UserRegisterComponent(alerts, formBuilder, router, route, api) {
        this.alerts = alerts;
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.api = api;
    }
    UserRegisterComponent.prototype.ngOnInit = function () {
        this.thisForm = this.formBuilder.group({
            'firstname': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]],
            'lastname': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]],
            'email': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(256)]],
            'password': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            'confirmPassword': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }, {
            validator: Object(_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_5__["MustMatch"])('password', 'confirmPassword')
        });
    };
    Object.defineProperty(UserRegisterComponent.prototype, "f", {
        get: function () { return this.thisForm.controls; },
        enumerable: true,
        configurable: true
    });
    UserRegisterComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        this.api.registerUser(form).subscribe(function (resp) {
            if (resp['success'] !== undefined && resp['success'] == true) {
                _this.router.navigate(['/user/login']);
            }
            else {
                var error = ('error' in resp) ? resp['error'] : '';
                var errorMsg = ('msg' in resp) ? resp['msg'] : '';
                // Duplicate unique fields
                if (error && error.code == 11000) {
                    var errorField = '';
                    for (var fieldKey in error.field) {
                        errorField = fieldKey;
                    }
                    _this.alerts.setMessage('Field must be unique: ' + errorField, 'error');
                }
                else if (errorMsg) {
                    _this.alerts.setMessage(errorMsg, 'error');
                }
            }
        }, function (err) {
            if (err['status'] == 401) {
                localStorage.clear();
                _this.router.navigate(['/user/login']);
            }
        });
    };
    UserRegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-register',
            template: __webpack_require__(/*! ./user-register.component.html */ "./src/app/user/user-register/user-register.component.html"),
            styles: [__webpack_require__(/*! ./user-register.component.css */ "./src/app/user/user-register/user-register.component.css")]
        }),
        __metadata("design:paramtypes", [angular_alert_module__WEBPACK_IMPORTED_MODULE_3__["AlertsService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], UserRegisterComponent);
    return UserRegisterComponent;
}());



/***/ }),

/***/ "./src/app/user/user-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/user/user-routing.module.ts ***!
  \*********************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_home_user_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-home/user-home.component */ "./src/app/user/user-home/user-home.component.ts");
/* harmony import */ var _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-login/user-login.component */ "./src/app/user/user-login/user-login.component.ts");
/* harmony import */ var _user_register_user_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-register/user-register.component */ "./src/app/user/user-register/user-register.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user/user-profile/user-profile.component.ts");
/* harmony import */ var _guards_redirect_login_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_guards/redirect-login-guard.service */ "./src/app/_guards/redirect-login-guard.service.ts");
/* harmony import */ var _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_guards/auth-guard.service */ "./src/app/_guards/auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: 'user',
        component: _user_home_user_home_component__WEBPACK_IMPORTED_MODULE_2__["UserHomeComponent"],
        children: [
            {
                path: '',
                component: _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_3__["UserLoginComponent"]
            },
            {
                path: 'login',
                canActivate: [_guards_redirect_login_guard_service__WEBPACK_IMPORTED_MODULE_6__["RedirectLoginGuard"]],
                component: _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_3__["UserLoginComponent"]
            },
            {
                path: 'register',
                canActivate: [_guards_redirect_login_guard_service__WEBPACK_IMPORTED_MODULE_6__["RedirectLoginGuard"]],
                component: _user_register_user_register_component__WEBPACK_IMPORTED_MODULE_4__["UserRegisterComponent"]
            },
            {
                path: 'profile',
                canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
                component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__["UserProfileComponent"],
            }
        ]
    }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_guards/auth-guard.service */ "./src/app/_guards/auth-guard.service.ts");
/* harmony import */ var _guards_admin_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_guards/admin-guard.service */ "./src/app/_guards/admin-guard.service.ts");
/* harmony import */ var _guards_redirect_login_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_guards/redirect-login-guard.service */ "./src/app/_guards/redirect-login-guard.service.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _user_home_user_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-home/user-home.component */ "./src/app/user/user-home/user-home.component.ts");
/* harmony import */ var _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-login/user-login.component */ "./src/app/user/user-login/user-login.component.ts");
/* harmony import */ var _user_register_user_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-register/user-register.component */ "./src/app/user/user-register/user-register.component.ts");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/user/user-routing.module.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user/user-profile/user-profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Generic imports






// Standard imports for all routes




// User specific imports





var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _user_routing_module__WEBPACK_IMPORTED_MODULE_13__["UserRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
            ],
            declarations: [
                _user_home_user_home_component__WEBPACK_IMPORTED_MODULE_10__["UserHomeComponent"],
                _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_11__["UserLoginComponent"],
                _user_register_user_register_component__WEBPACK_IMPORTED_MODULE_12__["UserRegisterComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_14__["UserProfileComponent"]
            ],
            providers: [
                _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"],
                _guards_admin_guard_service__WEBPACK_IMPORTED_MODULE_7__["AdminGuard"],
                _guards_redirect_login_guard_service__WEBPACK_IMPORTED_MODULE_8__["RedirectLoginGuard"]
            ]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\patri\Desktop\jenplane\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map