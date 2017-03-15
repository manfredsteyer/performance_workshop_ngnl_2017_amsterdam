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
var FlightClickWithWarningDirective = (function () {
    function FlightClickWithWarningDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.warning = 'Are you sure?';
        this.flightClickWithWarning = new core_1.EventEmitter();
    }
    FlightClickWithWarningDirective.prototype.ngOnInit = function () {
        // Warnung: Direkter DOM-Zugriff!
        // this.elementRef.nativeElement.setAttribute('class', 'btn btn-danger');
        // Indirekter DOM-Zugriff über Renderer
        this.renderer.setElementAttribute(this.elementRef.nativeElement, 'class', 'btn btn-danger');
    };
    FlightClickWithWarningDirective.prototype.handleClick = function ($event) {
        console.log('handleClick', $event);
        if (confirm(this.warning)) {
            this.flightClickWithWarning.emit();
        }
    };
    return FlightClickWithWarningDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FlightClickWithWarningDirective.prototype, "warning");
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], FlightClickWithWarningDirective.prototype, "flightClickWithWarning");
__decorate([
    core_1.HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FlightClickWithWarningDirective.prototype, "handleClick");
FlightClickWithWarningDirective = __decorate([
    core_1.Directive({
        selector: '[flightClickWithWarning]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer])
], FlightClickWithWarningDirective);
exports.FlightClickWithWarningDirective = FlightClickWithWarningDirective;
//# sourceMappingURL=flight-click-with-warning.directive.js.map