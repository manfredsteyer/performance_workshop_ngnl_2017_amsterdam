var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BASE_URL } from './app.tokens';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app.routes';
import { HomeComponent } from './home/home.component';
import { FlightHistoryComponent } from './flight-history/flight-history.component';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { OAuthModule } from 'angular-oauth2-oidc';
import { PassengerModule } from './passenger/passenger.module';
import { CoreModule } from './core/core.module';
export function createLoader(http) {
    return new TranslateStaticLoader(http, './i18n', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        imports: [
            BrowserModule,
            HttpModule,
            FormsModule,
            ReactiveFormsModule,
            SharedModule,
            CoreModule,
            AppRouterModule,
            OAuthModule.forRoot(),
            TranslateModule.forRoot({
                provide: TranslateLoader,
                useFactory: createLoader,
                deps: [Http]
            }),
            // FlightBookingModule, // <-- Would prevent lazy loading
            PassengerModule
        ],
        declarations: [
            AppComponent,
            HomeComponent,
            FlightHistoryComponent
        ],
        providers: [
            { provide: BASE_URL, useValue: 'http://www.angular.at' }
        ],
        bootstrap: [
            AppComponent
        ]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map