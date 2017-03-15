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
var E2eLocatorDirective = (function () {
    function E2eLocatorDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    Object.defineProperty(E2eLocatorDirective.prototype, "flightE2eLocator", {
        set: function (flightE2eLocator) {
            this.renderer.setElementAttribute(this.el.nativeElement, 'flightE2eLocator', flightE2eLocator);
        },
        enumerable: true,
        configurable: true
    });
    return E2eLocatorDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], E2eLocatorDirective.prototype, "flightE2eLocator");
E2eLocatorDirective = __decorate([
    core_1.Directive({ selector: '[flightE2eLocator]' }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer])
], E2eLocatorDirective);
exports.E2eLocatorDirective = E2eLocatorDirective;
//# sourceMappingURL=e2e-locator.directive.js.map