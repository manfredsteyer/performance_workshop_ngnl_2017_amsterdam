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
var flight_service_1 = require("../flight-search/flight.service");
var FlightEditComponent = (function () {
    function FlightEditComponent(flightService, route) {
        this.flightService = flightService;
        this.route = route;
        this.exitWarning = {
            show: false,
            resolve: null
        };
    }
    FlightEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (p) {
            _this.id = p['id'];
        });
        this.route.data.subscribe(function (data) {
            var flight = data['flight'];
            if (flight) {
                _this.flight = flight;
            }
            else {
                _this.flight = {};
            }
        });
    };
    FlightEditComponent.prototype.save = function () {
        console.warn('save is not implemented');
    };
    FlightEditComponent.prototype.decide = function (decision) {
        this.exitWarning.show = false;
        this.exitWarning.resolve(decision);
    };
    FlightEditComponent.prototype.canDeactivate = function () {
        var _this = this;
        this.exitWarning.show = true;
        return new Promise(function (resolve) {
            _this.exitWarning.resolve = resolve;
        });
    };
    FlightEditComponent.prototype.remove = function () {
        console.log('remove is not implemented');
    };
    return FlightEditComponent;
}());
FlightEditComponent = __decorate([
    core_1.Component({
        templateUrl: './flight-edit.component.html'
    }),
    __metadata("design:paramtypes", [flight_service_1.FlightService, router_1.ActivatedRoute])
], FlightEditComponent);
exports.FlightEditComponent = FlightEditComponent;
//# sourceMappingURL=flight-edit.component.js.map