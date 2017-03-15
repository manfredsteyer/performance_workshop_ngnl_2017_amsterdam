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
import { OAuthService } from 'angular-oauth2-oidc';
var PassengerService = (function () {
    function PassengerService(oauthService, http, baseUrl) {
        this.oauthService = oauthService;
        this.http = http;
        this.baseUrl = baseUrl;
        this.passengers = [];
    }
    PassengerService.prototype.findById = function (id) {
        // let url = this.baseUrl + '/api/securepassenger';
        // let url = '/data/passenger.json';
        var url = this.baseUrl + '/api/passenger';
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
    PassengerService.prototype.find = function (name) {
        var _this = this;
        var url = this.baseUrl + '/api/passenger';
        // let url = this.baseUrl + '/api/securepassenger';
        // let url = '/data/passengers.json';
        var headers = new Headers();
        headers.set('Accept', 'text/json');
        headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken());
        var search = new URLSearchParams();
        search.set('name', name);
        this
            .http
            .get(url, { headers: headers, search: search })
            .map(function (resp) { return resp.json(); })
            .subscribe(function (passengers) {
            _this.passengers = passengers;
        }, function (err) {
            console.warn(err);
        });
    };
    return PassengerService;
}());
PassengerService = __decorate([
    Injectable(),
    __param(2, Inject(BASE_URL)),
    __metadata("design:paramtypes", [OAuthService,
        Http, String])
], PassengerService);
export { PassengerService };
//# sourceMappingURL=passenger.service.js.map