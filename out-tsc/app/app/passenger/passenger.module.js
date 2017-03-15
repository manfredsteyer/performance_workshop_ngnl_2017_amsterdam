var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { PassengerCardComponent } from './passenger-card/passenger.card.component';
import { PassengerEditComponent } from './passenger-edit/passenger-edit.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PassengerBookingRouterModule } from './passenger.routes';
import { PassengerComponent } from './passenger.component';
import { PassengerService } from './passenger-search/passenger.service';
import { PassengerResolver } from './passenger-search/passenger.resolver';
var PassengerModule = (function () {
    function PassengerModule() {
    }
    return PassengerModule;
}());
PassengerModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            SharedModule,
            PassengerBookingRouterModule
        ],
        declarations: [
            PassengerSearchComponent,
            PassengerCardComponent,
            PassengerEditComponent,
            PassengerComponent,
        ],
        providers: [
            PassengerService,
            PassengerResolver
        ],
        exports: []
    })
], PassengerModule);
export { PassengerModule };
//# sourceMappingURL=passenger.module.js.map