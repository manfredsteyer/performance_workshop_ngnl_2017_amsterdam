var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Observable } from 'rxjs/Observable';
import { PassengerService } from './passenger.service';
import { Injectable } from '@angular/core';
var PassengerResolver = (function () {
    function PassengerResolver(passengerService) {
        this.passengerService = passengerService;
    }
    PassengerResolver.prototype.resolve = function (route, state) {
        var id = route.params['id'];
        if (id == '0') {
            return Observable.of(null);
        }
        return this.passengerService.findById(id);
    };
    return PassengerResolver;
}());
PassengerResolver = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PassengerService])
], PassengerResolver);
export { PassengerResolver };
//# sourceMappingURL=passenger.resolver.js.map