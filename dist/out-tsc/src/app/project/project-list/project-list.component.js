"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var api_service_1 = require("../../_services/api.service");
var router_1 = require("@angular/router");
var collections_1 = require("@angular/cdk/collections");
require("rxjs/add/operator/filter");
var angular_alert_module_1 = require("angular-alert-module");
var ProjectListComponent = /** @class */ (function () {
    function ProjectListComponent(api, router, route, alerts) {
        this.api = api;
        this.router = router;
        this.route = route;
        this.alerts = alerts;
        this.displayedColumns = ['title', 'description', 'organization'];
        this.dataSource = new ProjectDataSource(this.api);
    }
    ProjectListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getProjects()
            .subscribe(function (res) {
            _this.projects = res;
        }, function (err) {
        });
        // Check get params if an entry was created
        // Inform via alert
        this.route.queryParams
            .filter(function (params) { return params.created; })
            .subscribe(function (params) {
            if (params.created == 1) {
                _this.alerts.setMessage('Successfully created', 'success');
            }
            if (params.created == 2) {
                _this.alerts.setMessage('Successfully deleted', 'success');
            }
        });
    };
    ProjectListComponent = __decorate([
        core_1.Component({
            selector: 'app-project-list',
            templateUrl: './project-list.component.html',
            styleUrls: ['./project-list.component.css']
        }),
        __metadata("design:paramtypes", [api_service_1.ApiService, router_1.Router, router_1.ActivatedRoute, angular_alert_module_1.AlertsService])
    ], ProjectListComponent);
    return ProjectListComponent;
}());
exports.ProjectListComponent = ProjectListComponent;
var ProjectDataSource = /** @class */ (function (_super) {
    __extends(ProjectDataSource, _super);
    function ProjectDataSource(api) {
        var _this = _super.call(this) || this;
        _this.api = api;
        return _this;
    }
    ProjectDataSource.prototype.connect = function () {
        return this.api.getProjects();
    };
    ProjectDataSource.prototype.disconnect = function () {
    };
    return ProjectDataSource;
}(collections_1.DataSource));
exports.ProjectDataSource = ProjectDataSource;
//# sourceMappingURL=project-list.component.js.map