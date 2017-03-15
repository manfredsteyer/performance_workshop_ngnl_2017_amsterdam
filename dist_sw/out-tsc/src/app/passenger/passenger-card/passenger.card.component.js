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
var passenger_1 = require("../../entities/passenger");
var PassengerCardComponent = (function () {
    function PassengerCardComponent() {
        this.selectedItemChange = new core_1.EventEmitter();
    }
    PassengerCardComponent.prototype.isSelected = function () {
        if (this.selectedItem) {
            return this.selectedItem === this.item ? 'yes' : 'no';
        }
    };
    PassengerCardComponent.prototype.select = function () {
        this.selectedItemChange.emit(this.item);
    };
    return PassengerCardComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", passenger_1.Passenger)
], PassengerCardComponent.prototype, "item");
__decorate([
    core_1.Input(),
    __metadata("design:type", passenger_1.Passenger)
], PassengerCardComponent.prototype, "selectedItem");
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], PassengerCardComponent.prototype, "selectedItemChange");
PassengerCardComponent = __decorate([
    core_1.Component({
        selector: 'passenger-card',
        templateUrl: './passenger-card.component.html'
    })
], PassengerCardComponent);
exports.PassengerCardComponent = PassengerCardComponent;
//# sourceMappingURL=passenger.card.component.js.map