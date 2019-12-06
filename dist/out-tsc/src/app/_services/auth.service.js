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
var router_1 = require("@angular/router");
var jwt_decode_1 = require("jwt-decode");
var AuthService = /** @class */ (function () {
    function AuthService(_router) {
        this._router = _router;
    }
    AuthService.prototype.clear = function () {
        localStorage.clear();
    };
    AuthService.prototype.isAuthenticated = function () {
        return localStorage.getItem('jwtToken') != null;
    };
    AuthService.prototype.logout = function () {
        this.clear();
        this._router.navigate(['/login']);
    };
    AuthService.prototype.decode = function () {
        return jwt_decode_1.default(localStorage.getItem('jwtToken'));
    };
    AuthService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map