var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, EventEmitter, Output } from '@angular/core';
var DateComponent = (function () {
    function DateComponent() {
        this.dateChange = new EventEmitter();
        console.debug('date in constructor', this.date);
    }
    DateComponent.prototype.ngOnInit = function () {
        console.debug('date in ngOnInit', this.date);
    };
    DateComponent.prototype.ngOnChanges = function (change) {
        console.debug('date in ngOnChanges', this.date);
        // if(change.date) { ... }
        var date = new Date(this.date);
        this.day = date.getDate();
        this.month = date.getMonth() + 1;
        this.year = date.getFullYear();
        this.hour = date.getHours();
        this.minute = date.getMinutes();
    };
    DateComponent.prototype.apply = function () {
        var date = new Date(this.year, this.month - 1, this.day, this.hour, this.minute);
        this.dateChange.next(date.toISOString());
    };
    return DateComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], DateComponent.prototype, "date", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], DateComponent.prototype, "dateChange", void 0);
DateComponent = __decorate([
    Component({
        selector: 'flight-date-component',
        templateUrl: './date.component.html'
    }),
    __metadata("design:paramtypes", [])
], DateComponent);
export { DateComponent };
//# sourceMappingURL=date.component.js.map