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
var must_match_validator_1 = require("../../_helpers/must-match.validator");
var SignupComponent = /** @class */ (function () {
    function SignupComponent(formBuilder, router, route, api) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.api = api;
        this.message = '';
        this.submitted = false;
    }
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.registerForm = this.formBuilder.group({
            firstName: ['', forms_1.Validators.required],
            lastName: ['', forms_1.Validators.required],
            email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            password: ['', [forms_1.Validators.required, forms_1.Validators.minLength(6)]],
            confirmPassword: ['', forms_1.Validators.required]
        }, {
            validator: must_match_validator_1.MustMatch('password', 'confirmPassword')
        });
        this.api.checkLogin().subscribe(function (resp) {
            // If user is logged in, redirect him
            if (resp["success"] == true) {
                _this.router.navigate(['organizations']);
            }
        }, function (err) {
            _this.message = err['msg'];
        });
    };
    Object.defineProperty(SignupComponent.prototype, "f", {
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        var data = JSON.stringify(this.registerForm.value);
        this.api.signup(data).subscribe(function (resp) {
            if (resp['success'] == true) {
                _this.router.navigate(['login']);
            }
        }, function (err) {
            _this.message = err['msg'];
        });
    };
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'app-signup',
            templateUrl: './signup.component.html',
            styleUrls: ['./signup.component.css']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, router_1.Router, router_1.ActivatedRoute, api_service_1.ApiService])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=signup.component.js.map