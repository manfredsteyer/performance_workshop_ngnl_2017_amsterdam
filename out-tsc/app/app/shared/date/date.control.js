var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NgControl } from '@angular/forms';
var DateControlComponent = (function () {
    function DateControlComponent(c) {
        this.c = c;
        this.onChange = function (_) { };
        this.onTouched = function () { };
        c.valueAccessor = this;
    }
    DateControlComponent.prototype.writeValue = function (value) {
        this.splitDate(value);
    };
    DateControlComponent.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    DateControlComponent.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    DateControlComponent.prototype.splitDate = function (dateString) {
        var date = new Date(dateString);
        this.day = date.getDate();
        this.month = date.getMonth() + 1;
        this.year = date.getFullYear();
        this.hour = date.getHours();
        this.minute = date.getMinutes();
    };
    DateControlComponent.prototype.apply = function () {
        var date = new Date(this.year, this.month - 1, this.day, this.hour, this.minute);
        this.onChange(date.toISOString());
        this.onTouched();
    };
    return DateControlComponent;
}());
DateControlComponent = __decorate([
    Component({
        selector: 'flight-date-control',
        templateUrl: './date.control.html'
    }),
    __metadata("design:paramtypes", [NgControl])
], DateControlComponent);
export { DateControlComponent };
//# sourceMappingURL=date.control.js.map