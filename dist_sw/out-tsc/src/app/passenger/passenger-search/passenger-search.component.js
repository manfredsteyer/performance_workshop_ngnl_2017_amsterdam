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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var passenger_service_1 = require("./passenger.service");
var PassengerSearchComponent = (function () {
    function PassengerSearchComponent(passengerService, route) {
        this.passengerService = passengerService;
        this.name = "Doe";
        route.queryParams.subscribe(function (p) {
            // console.debug('queryParams', p);
        });
    }
    Object.defineProperty(PassengerSearchComponent.prototype, "passengers", {
        // cmp.passengers
        get: function () {
            return this.passengerService.passengers;
        },
        enumerable: true,
        configurable: true
    });
    PassengerSearchComponent.prototype.select = function (f) {
        this.selectedPassenger = f;
    };
    PassengerSearchComponent.prototype.search = function () {
        this.passengerService.find(this.name);
    };
    PassengerSearchComponent.prototype.disableButton = function (event) {
        console.log(event);
    };
    return PassengerSearchComponent;
}());
PassengerSearchComponent = __decorate([
    core_1.Component({
        selector: 'passenger-search',
        templateUrl: './passenger-search.component.html',
        styleUrls: ['./passenger-search.component.css']
    }),
    __metadata("design:paramtypes", [passenger_service_1.PassengerService, router_1.ActivatedRoute])
], PassengerSearchComponent);
exports.PassengerSearchComponent = PassengerSearchComponent;
//# sourceMappingURL=passenger-search.component.js.map