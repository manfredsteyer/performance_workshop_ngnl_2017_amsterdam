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
var TooltipDirective = (function () {
    function TooltipDirective(viewContainer, renderer) {
        this.viewContainer = viewContainer;
        this.renderer = renderer;
    }
    TooltipDirective.prototype.handleMouseover = function ($event) {
        this.embeddedViewRef = this.viewContainer.createEmbeddedView(this.template);
        var nativeElement = this.embeddedViewRef.rootNodes.find(function (n) { return n.nodeType === 1; });
        if (!nativeElement) {
            return;
        }
        var left = $event.target.offsetLeft + 'px';
        var top = ($event.target.offsetTop + $event.target.offsetHeight + 5) + 'px';
        this.renderer.setElementStyle(nativeElement, 'position', 'absolute');
        this.renderer.setElementStyle(nativeElement, 'left', left);
        this.renderer.setElementStyle(nativeElement, 'top', top);
        this.renderer.setElementStyle(nativeElement, 'width', '200px');
    };
    TooltipDirective.prototype.handleMouseout = function () {
        this.embeddedViewRef.destroy();
    };
    return TooltipDirective;
}());
__decorate([
    core_1.Input('flightTooltip'),
    __metadata("design:type", core_1.TemplateRef)
], TooltipDirective.prototype, "template");
__decorate([
    core_1.HostListener('mouseover', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TooltipDirective.prototype, "handleMouseover");
__decorate([
    core_1.HostListener('mouseout'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TooltipDirective.prototype, "handleMouseout");
TooltipDirective = __decorate([
    core_1.Directive({
        selector: '[flightTooltip]'
    }),
    __metadata("design:paramtypes", [core_1.ViewContainerRef, core_1.Renderer])
], TooltipDirective);
exports.TooltipDirective = TooltipDirective;
//# sourceMappingURL=tooltip.directive.js.map