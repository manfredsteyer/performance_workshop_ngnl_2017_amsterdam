var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ViewContainerRef, Input, HostListener, Renderer, ComponentFactoryResolver, Injector } from '@angular/core';
import { TooltipComponent } from './tooltip.component';
var Tooltip2Directive = (function () {
    function Tooltip2Directive(viewContainer, renderer, injector, componentFactoryResolver) {
        this.viewContainer = viewContainer;
        this.renderer = renderer;
        this.injector = injector;
        this.componentFactoryResolver = componentFactoryResolver;
    }
    Tooltip2Directive.prototype.handleMouseover = function ($event) {
        var compFactory = this.componentFactoryResolver.resolveComponentFactory(TooltipComponent);
        var textNode = document.createTextNode(this.message);
        this.componentRef = this.viewContainer.createComponent(compFactory, null, this.injector, [[textNode]]);
        var nativeElement = this.componentRef.location.nativeElement;
        var left = $event.target.offsetLeft + 'px';
        var top = ($event.target.offsetTop + $event.target.offsetHeight + 5) + 'px';
        this.renderer.setElementStyle(nativeElement, 'position', 'absolute');
        this.renderer.setElementStyle(nativeElement, 'left', left);
        this.renderer.setElementStyle(nativeElement, 'top', top);
        this.renderer.setElementStyle(nativeElement, 'width', '200px');
    };
    Tooltip2Directive.prototype.handleMouseout = function () {
        this.componentRef.destroy();
    };
    return Tooltip2Directive;
}());
__decorate([
    Input('flightTooltip2'),
    __metadata("design:type", String)
], Tooltip2Directive.prototype, "message", void 0);
__decorate([
    HostListener('mouseover', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Tooltip2Directive.prototype, "handleMouseover", null);
__decorate([
    HostListener('mouseout'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Tooltip2Directive.prototype, "handleMouseout", null);
Tooltip2Directive = __decorate([
    Directive({
        selector: '[flightTooltip2]'
    }),
    __metadata("design:paramtypes", [ViewContainerRef,
        Renderer,
        Injector,
        ComponentFactoryResolver])
], Tooltip2Directive);
export { Tooltip2Directive };
//# sourceMappingURL=tooltip2.directive.js.map