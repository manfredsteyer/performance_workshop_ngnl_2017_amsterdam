var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
var TooltipComponent = (function () {
    function TooltipComponent() {
    }
    return TooltipComponent;
}());
TooltipComponent = __decorate([
    Component({
        selector: 'flight-tooltip',
        template: "\n        <div class=\"tooltip-bg\">\n            <b>Tipp:</b>\n            <ng-content></ng-content>\n        </div>\n    ",
        styles: ["\n        .tooltip-bg {\n            background-color: yellow; \n            border: solid 2px darkkhaki\n        }\n    "]
    })
], TooltipComponent);
export { TooltipComponent };
//# sourceMappingURL=tooltip.component.js.map