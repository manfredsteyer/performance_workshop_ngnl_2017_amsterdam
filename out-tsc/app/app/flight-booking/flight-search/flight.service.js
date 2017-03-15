var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
import { Injectable, Inject } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { BASE_URL } from '../../app.tokens';
import { Subject } from 'rxjs/Subject';
import { OAuthService } from 'angular-oauth2-oidc';
var FlightService = (function () {
    function FlightService(oauthService, http, baseUrl) {
        this.oauthService = oauthService;
        this.http = http;
        this.baseUrl = baseUrl;
        this.flights = [];
        this.flightSubject = new Subject();
        this.flights$ = this.flightSubject;
    }
    FlightService.prototype.delay = function () {
        var ONE_MINUTE = 1000 * 60;
        var firstFlight = this.flights[0];
        var oldDate = new Date(firstFlight.date);
        var newDate = new Date(oldDate.getTime() + ONE_MINUTE * 15);
        var newFlight = __assign({}, firstFlight, { date: newDate.toISOString() });
        var newFlights = [
            newFlight
        ].concat(this.flights.slice(1));
        this.flights = newFlights;
        this.flightSubject.next(this.flights);
        //oldDate.setTime(oldDate.getTime() + ONE_MINUTE * 15);
        //firstFlight.date = oldDate.toISOString();
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
        var headers = new Headers();
        headers.set('Accept', 'text/json');
        headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken());
        var search = new URLSearchParams();
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
        var headers = new Headers();
        headers.set('Accept', 'text/json');
        headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken());
        var search = new URLSearchParams();
        search.set('from', from);
        search.set('to', to);
        this
            .http
            .get(url, { headers: headers, search: search })
            .map(function (resp) { return resp.json(); })
            .subscribe(function (flights) {
            _this.flights = flights;
            _this.flightSubject.next(_this.flights);
        }, function (err) {
            console.warn(err);
        });
    };
    return FlightService;
}());
FlightService = __decorate([
    Injectable(),
    __param(2, Inject(BASE_URL)),
    __metadata("design:paramtypes", [OAuthService,
        Http, String])
], FlightService);
export { FlightService };
//# sourceMappingURL=flight.service.js.map