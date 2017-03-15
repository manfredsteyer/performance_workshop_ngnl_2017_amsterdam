"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var city_pipe_1 = require("./pipes/city.pipe");
var city_validator_1 = require("./validation/city.validator");
var roundtrip_validator_1 = require("./validation/roundtrip.validator");
var async_city_validator_1 = require("./validation/async-city.validator");
var date_component_1 = require("./date/date.component");
var e2e_locator_directive_1 = require("./e2e-locator/e2e-locator.directive");
var ng2_translate_1 = require("ng2-translate");
var flight_click_with_warning_directive_1 = require("./warning/flight-click-with-warning.directive");
var repeate_directive_1 = require("./structural/repeate.directive");
var unless_directive_1 = require("./structural/unless.directive");
var tooltip_directive_1 = require("./structural/tooltip.directive");
var tooltip_component_1 = require("./structural/tooltip.component");
var tooltip2_directive_1 = require("./structural/tooltip2.directive");
var validation_errors_component_1 = require("./validation/validation-errors.component");
var date_control_1 = require("./date/date.control");
var date_value_accessor_1 = require("./date/date-value-accessor");
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_1.FormsModule,
            common_1.CommonModule // ngFor, ngIf, ngStyle, ngClass, date, json
        ],
        declarations: [
            city_pipe_1.CityPipe,
            city_validator_1.CityValidatorDirective,
            async_city_validator_1.AsyncCityValidatorDirective,
            roundtrip_validator_1.RoundTripDirective,
            date_component_1.DateComponent,
            date_control_1.DateControlComponent,
            date_value_accessor_1.DateValueAccessorDirective,
            e2e_locator_directive_1.E2eLocatorDirective,
            flight_click_with_warning_directive_1.FlightClickWithWarningDirective,
            repeate_directive_1.RepeateDirective,
            unless_directive_1.UnlessDirective,
            tooltip_directive_1.TooltipDirective,
            tooltip_component_1.TooltipComponent,
            tooltip2_directive_1.Tooltip2Directive,
            validation_errors_component_1.ValidationErrorsComponent
        ],
        exports: [
            city_pipe_1.CityPipe,
            city_validator_1.CityValidatorDirective,
            async_city_validator_1.AsyncCityValidatorDirective,
            roundtrip_validator_1.RoundTripDirective,
            date_component_1.DateComponent,
            date_control_1.DateControlComponent,
            date_value_accessor_1.DateValueAccessorDirective,
            e2e_locator_directive_1.E2eLocatorDirective,
            ng2_translate_1.TranslateModule,
            flight_click_with_warning_directive_1.FlightClickWithWarningDirective,
            repeate_directive_1.RepeateDirective,
            unless_directive_1.UnlessDirective,
            tooltip_directive_1.TooltipDirective,
            tooltip_component_1.TooltipComponent,
            tooltip2_directive_1.Tooltip2Directive,
            validation_errors_component_1.ValidationErrorsComponent
        ],
        entryComponents: [
            tooltip_component_1.TooltipComponent
        ]
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map