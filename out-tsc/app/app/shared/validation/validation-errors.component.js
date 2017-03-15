var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
var ValidationErrorsComponent = (function () {
    function ValidationErrorsComponent() {
    }
    return ValidationErrorsComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Object)
], ValidationErrorsComponent.prototype, "errors", void 0);
ValidationErrorsComponent = __decorate([
    Component({
        selector: 'flight-validation-errors',
        template: "\n        <div *ngIf=\"errors && errors.required\">\n            This field is required\n        </div>\n        <div *ngIf=\"errors && errors.minlength\">\n            Please enter at least {{ errors.minlength.expected }} characters\n        </div>\n        <div *ngIf=\"errors && errors.city\">\n            This city is now allowed\n        </div>\n    "
    })
], ValidationErrorsComponent);
export { ValidationErrorsComponent };
//# sourceMappingURL=validation-errors.component.js.map