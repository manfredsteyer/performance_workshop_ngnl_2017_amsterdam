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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var app_tokens_1 = require("../../app.tokens");
var angular_oauth2_oidc_1 = require("angular-oauth2-oidc");
var FlightService = (function () {
    function FlightService(oauthService, http, baseUrl) {
        this.oauthService = oauthService;
        this.http = http;
        this.baseUrl = baseUrl;
        this.flights = [];
    }
    FlightService.prototype.delay = function () {
        var ONE_MINUTE = 1000 * 60;
        var firstFlight = this.flights[0];
        var oldDate = new Date(firstFlight.date);
        oldDate.setTime(oldDate.getTime() + ONE_MINUTE * 15);
        firstFlight.date = oldDate.toISOString();
        /*
        let newDate: Date = new Date(oldDate.getTime() + 1000 * 60 * 15);
        let newFlight: Flight = { ...oldFlight, date: newDate.toISOString() };
        let newFlights: Flight[] = [ newFlight, ...oldFlights.slice(1) ];
  
        this.flights = newFlights;
        */
    };
    FlightService.prototype.findById = function (id) {
        // let url = this.baseUrl + '/api/secureflight';
        // let url = '/data/flight.json';
        var url = this.baseUrl + '/api/flight';
        var headers = new http_1.Headers();
        headers.set('Accept', 'text/json');
        headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken());
        var search = new http_1.URLSearchParams();
        search.set('id', id);
        return this
            .http
            .get(url, { headers: headers, search: search })
            .map(function (resp) { return resp.json(); });
    };
    FlightService.prototype.find = function (from, to) {
        var _this = this;
        var url = this.baseUrl + '/api/flight';
        // let url = this.baseUrl + '/api/secureflight';
        // let url = '/data/flights.json';
        var headers = new http_1.Headers();
        headers.set('Accept', 'text/json');
        headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken());
        var search = new http_1.URLSearchParams();
        search.set('from', from);
        search.set('to', to);
        this
            .http
            .get(url, { headers: headers, search: search })
            .map(function (resp) { return resp.json(); })
            .subscribe(function (flights) {
            _this.flights = flights;
        }, function (err) {
            console.warn(err);
        });
    };
    return FlightService;
}());
FlightService = __decorate([
    core_1.Injectable(),
    __param(2, core_1.Inject(app_tokens_1.BASE_URL)),
    __metadata("design:paramtypes", [angular_oauth2_oidc_1.OAuthService,
        http_1.Http, String])
], FlightService);
exports.FlightService = FlightService;
//# sourceMappingURL=flight.service.js.map