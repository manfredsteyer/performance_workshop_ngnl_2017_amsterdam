var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy, ElementRef, NgZone } from '@angular/core';
var FlightCardComponent = (function () {
    function FlightCardComponent(zone, element) {
        this.zone = zone;
        this.element = element;
        this.selectedItemChange = new EventEmitter();
    }
    FlightCardComponent.prototype.ngOnChanges = function () {
        console.debug('on changes!');
    };
    FlightCardComponent.prototype.select = function () {
        this.selectedItemChange.emit(this.item);
    };
    FlightCardComponent.prototype.check = function () {
        this.blink();
        return null;
    };
    FlightCardComponent.prototype.blink = function () {
        var _this = this;
        // Vorsicht: Direkter DOM-Zugriff !!!
        // Renderer
        this.element.nativeElement.firstChild.style.backgroundColor = 'crimson';
        this.zone.runOutsideAngular(function () {
            setTimeout(function () {
                _this.element.nativeElement.firstChild.style.backgroundColor = 'lightsteelblue';
            }, 1000);
        });
    };
    return FlightCardComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Object)
], FlightCardComponent.prototype, "item", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], FlightCardComponent.prototype, "selectedItem", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], FlightCardComponent.prototype, "selectedItemChange", void 0);
FlightCardComponent = __decorate([
    Component({
        selector: 'flight-card',
        templateUrl: './flight-card.component.html',
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [NgZone, ElementRef])
], FlightCardComponent);
export { FlightCardComponent };
//# sourceMappingURL=flight.card.component.js.map