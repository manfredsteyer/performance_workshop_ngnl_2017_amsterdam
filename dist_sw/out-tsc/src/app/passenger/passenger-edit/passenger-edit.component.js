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
var passenger_service_1 = require("../passenger-search/passenger.service");
var PassengerEditComponent = (function () {
    function PassengerEditComponent(passengerService, route) {
        this.passengerService = passengerService;
        this.route = route;
        this.exitWarning = {
            show: false,
            resolve: null
        };
    }
    PassengerEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (p) {
            _this.id = p['id'];
        });
        this.route.data.subscribe(function (data) {
            var passenger = data['passenger'];
            if (passenger) {
                _this.passenger = passenger;
            }
            else {
                _this.passenger = {};
            }
        });
    };
    PassengerEditComponent.prototype.save = function () {
        console.warn('save is not implemented');
    };
    PassengerEditComponent.prototype.decide = function (decision) {
        this.exitWarning.show = false;
        this.exitWarning.resolve(decision);
    };
    PassengerEditComponent.prototype.canDeactivate = function () {
        var _this = this;
        this.exitWarning.show = true;
        return new Promise(function (resolve) {
            _this.exitWarning.resolve = resolve;
        });
    };
    PassengerEditComponent.prototype.remove = function () {
        console.log('remove is not implemented');
    };
    return PassengerEditComponent;
}());
PassengerEditComponent = __decorate([
    core_1.Component({
        templateUrl: './passenger-edit.component.html'
    }),
    __metadata("design:paramtypes", [passenger_service_1.PassengerService, router_1.ActivatedRoute])
], PassengerEditComponent);
exports.PassengerEditComponent = PassengerEditComponent;
//# sourceMappingURL=passenger-edit.component.js.map