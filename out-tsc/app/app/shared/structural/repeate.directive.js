var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
var RepeateDirective = (function () {
    function RepeateDirective(templateRef, viewContainer) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
    }
    Object.defineProperty(RepeateDirective.prototype, "flightRepeateOf", {
        set: function (items) {
            this.viewContainer.clear();
            var i = 0;
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var item = items_1[_i];
                i++;
                var context = {
                    $implicit: item,
                    index: i - 1,
                    odd: (i % 2 === 1)
                };
                this.viewContainer
                    .createEmbeddedView(this.templateRef, context);
            }
        },
        enumerable: true,
        configurable: true
    });
    return RepeateDirective;
}());
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], RepeateDirective.prototype, "flightRepeateOf", null);
RepeateDirective = __decorate([
    Directive({
        selector: '[flightRepeate]'
    }),
    __metadata("design:paramtypes", [TemplateRef,
        ViewContainerRef])
], RepeateDirective);
export { RepeateDirective };
//# sourceMappingURL=repeate.directive.js.map