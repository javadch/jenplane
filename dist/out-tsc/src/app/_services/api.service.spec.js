"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var api_service_1 = require("./api.service");
describe('ApiService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [api_service_1.ApiService]
        });
    });
    it('should be created', testing_1.inject([api_service_1.ApiService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=api.service.spec.js.map