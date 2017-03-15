var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Passenger } from '../../entities/passenger';
var PassengerCardComponent = (function () {
    function PassengerCardComponent() {
        this.selectedItemChange = new EventEmitter();
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
    Input(),
    __metadata("design:type", Passenger)
], PassengerCardComponent.prototype, "item", void 0);
__decorate([
    Input(),
    __metadata("design:type", Passenger)
], PassengerCardComponent.prototype, "selectedItem", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], PassengerCardComponent.prototype, "selectedItemChange", void 0);
PassengerCardComponent = __decorate([
    Component({
        selector: 'passenger-card',
        templateUrl: './passenger-card.component.html'
    })
], PassengerCardComponent);
export { PassengerCardComponent };
//# sourceMappingURL=passenger.card.component.js.map