var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
var CityValidatorDirective = CityValidatorDirective_1 = (function () {
    function CityValidatorDirective() {
    }
    CityValidatorDirective.prototype.validate = function (c) {
        var formGroup = c.root;
        var otherValueCtrl = formGroup.controls['to'];
        if (!otherValueCtrl) {
            return {};
        }
        var otherValue = otherValueCtrl.value;
        if (otherValue === c.value) {
            return {
                city: 'rundflug'
            };
        }
        if (!this.city) {
            return {};
        }
        var allowed = this.city.split(','); // ['Graz', 'Hamburg', 'Wien', 'Frankfurt'];
        if (allowed.indexOf(c.value) === -1) {
            return {
                city: true
            };
        }
        return {};
    };
    return CityValidatorDirective;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], CityValidatorDirective.prototype, "city", void 0);
CityValidatorDirective = CityValidatorDirective_1 = __decorate([
    Directive({
        selector: '[flightCity]',
        providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: CityValidatorDirective_1,
                multi: true
            }
        ]
    }),
    __metadata("design:paramtypes", [])
], CityValidatorDirective);
export { CityValidatorDirective };
var CityValidatorDirective_1;
//# sourceMappingURL=city.validator.js.map