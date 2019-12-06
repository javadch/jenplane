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
var forms_1 = require("@angular/forms");
var api_service_1 = require("../../_services/api.service");
var angular_alert_module_1 = require("angular-alert-module");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_router, route, api, formBuilder, alerts) {
        this._router = _router;
        this.route = route;
        this.api = api;
        this.formBuilder = formBuilder;
        this.alerts = alerts;
        this.hide = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("jwtToken") !== null) {
            this._router.navigate(['/organizations']);
        }
        // Create form
        this.thisForm = this.formBuilder.group({
            'email': [null, [forms_1.Validators.required, forms_1.Validators.email]],
            'password': [null, forms_1.Validators.required]
        });
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        get: function () { return this.thisForm.controls; },
        enumerable: true,
        configurable: true
    });
    // Form submit
    LoginComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        this.api.login(form).subscribe(function (resp) {
            var msg_status = (resp["success"] === true) ? "success" : "error";
            if (resp['success'] == true) {
                // Add token to local storage
                localStorage.setItem("jwtToken", resp["token"]);
                // Proceed to the main landing page for authorized users
                _this._router.navigate(['organizations']);
            }
            // Set alert message
            _this.alerts.setMessage(resp['msg'], msg_status);
        }, function (err) {
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, api_service_1.ApiService, forms_1.FormBuilder, angular_alert_module_1.AlertsService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map