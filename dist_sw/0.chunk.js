webpackJsonp([0,5],{

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flight_search_flight_search_component__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flight_card_flight_card_component__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__flight_edit_flight_edit_component__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__flight_booking_routes__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__flight_booking_component__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__flight_search_flight_service__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__flight_search_flight_resolver__ = __webpack_require__(529);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightBookingModule", function() { return FlightBookingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var FlightBookingModule = (function () {
    function FlightBookingModule() {
    }
    return FlightBookingModule;
}());
FlightBookingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_7__flight_booking_routes__["a" /* FlightBookingRouterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__flight_search_flight_search_component__["a" /* FlightSearchComponent */],
            __WEBPACK_IMPORTED_MODULE_2__flight_card_flight_card_component__["a" /* FlightCardComponent */],
            __WEBPACK_IMPORTED_MODULE_3__flight_edit_flight_edit_component__["a" /* FlightEditComponent */],
            __WEBPACK_IMPORTED_MODULE_8__flight_booking_component__["a" /* FlightBookingComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__flight_search_flight_service__["a" /* FlightService */],
            __WEBPACK_IMPORTED_MODULE_10__flight_search_flight_resolver__["a" /* FlightResolver */]
        ],
        exports: []
    })
], FlightBookingModule);

//# sourceMappingURL=flight-booking.module.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_tokens__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_oauth2_oidc__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_oauth2_oidc___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular_oauth2_oidc__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightService; });
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.set('Accept', 'text/json');
        headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken());
        var search = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.set('Accept', 'text/json');
        headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken());
        var search = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__app_tokens__["a" /* BASE_URL */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angular_oauth2_oidc__["OAuthService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular_oauth2_oidc__["OAuthService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _b || Object, String])
], FlightService);

var _a, _b;
//# sourceMappingURL=flight.service.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightBookingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FlightBookingComponent = (function () {
    function FlightBookingComponent() {
    }
    return FlightBookingComponent;
}());
FlightBookingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'flight-booking',
        template: __webpack_require__(534)
    })
], FlightBookingComponent);

//# sourceMappingURL=flight-booking.component.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flight_search_flight_service__ = __webpack_require__(525);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FlightEditComponent = (function () {
    function FlightEditComponent(flightService, route) {
        this.flightService = flightService;
        this.route = route;
        this.exitWarning = {
            show: false,
            resolve: null
        };
    }
    FlightEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (p) {
            _this.id = p['id'];
        });
        this.route.data.subscribe(function (data) {
            var flight = data['flight'];
            if (flight) {
                _this.flight = flight;
            }
            else {
                _this.flight = {};
            }
        });
    };
    FlightEditComponent.prototype.save = function () {
        console.warn('save is not implemented');
    };
    FlightEditComponent.prototype.decide = function (decision) {
        this.exitWarning.show = false;
        this.exitWarning.resolve(decision);
    };
    FlightEditComponent.prototype.canDeactivate = function () {
        var _this = this;
        this.exitWarning.show = true;
        return new Promise(function (resolve) {
            _this.exitWarning.resolve = resolve;
        });
    };
    FlightEditComponent.prototype.remove = function () {
        console.log('remove is not implemented');
    };
    return FlightEditComponent;
}());
FlightEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(536)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__flight_search_flight_service__["a" /* FlightService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__flight_search_flight_service__["a" /* FlightService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], FlightEditComponent);

var _a, _b;
//# sourceMappingURL=flight-edit.component.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flight_service__ = __webpack_require__(525);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightSearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FlightSearchComponent = (function () {
    function FlightSearchComponent(flightService, route) {
        this.flightService = flightService;
        this.from = 'Hamburg';
        this.to = 'Graz';
        this.date = (new Date()).toISOString();
        route.queryParams.subscribe(function (p) {
            // console.debug('queryParams', p);
        });
    }
    FlightSearchComponent.prototype.delay = function () {
        this.flightService.delay();
    };
    Object.defineProperty(FlightSearchComponent.prototype, "flights", {
        // cmp.flights
        get: function () {
            return this.flightService.flights;
        },
        enumerable: true,
        configurable: true
    });
    FlightSearchComponent.prototype.select = function (f) {
        this.selectedFlight = f;
    };
    FlightSearchComponent.prototype.search = function () {
        this.flightService
            .find(this.from, this.to);
        // .map(function(resp) { return resp.json() })
    };
    FlightSearchComponent.prototype.disableButton = function (event) {
        console.log(event);
    };
    return FlightSearchComponent;
}());
FlightSearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'flight-search',
        template: __webpack_require__(537),
        styles: [__webpack_require__(533)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__flight_service__["a" /* FlightService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__flight_service__["a" /* FlightService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], FlightSearchComponent);

var _a, _b;
//# sourceMappingURL=flight-search.component.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flight_service__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FlightResolver = (function () {
    function FlightResolver(flightService) {
        this.flightService = flightService;
    }
    FlightResolver.prototype.resolve = function (route, state) {
        var id = route.params['id'];
        if (id == '0') {
            return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].of(null);
        }
        return this.flightService.findById(id);
    };
    return FlightResolver;
}());
FlightResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__flight_service__["a" /* FlightService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__flight_service__["a" /* FlightService */]) === "function" && _a || Object])
], FlightResolver);

var _a;
//# sourceMappingURL=flight.resolver.js.map

/***/ }),

/***/ 530:
/***/ (function(module, exports) {

//# sourceMappingURL=flight.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flight_search_flight_search_component__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flight_edit_flight_edit_component__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__flight_booking_component__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__flight_search_flight_resolver__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_deactivation_leave_component_guard__ = __webpack_require__(93);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightBookingRouterModule; });






var FLIGHT_BOOKING_ROUTES = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__flight_booking_component__["a" /* FlightBookingComponent */],
        // canActivateChild: [AuthChildGuard],
        children: [
            {
                path: '',
                redirectTo: 'flight-search',
                pathMatch: 'full'
            },
            {
                path: 'flight-search',
                component: __WEBPACK_IMPORTED_MODULE_1__flight_search_flight_search_component__["a" /* FlightSearchComponent */]
            },
            {
                path: 'flight-edit/:id',
                component: __WEBPACK_IMPORTED_MODULE_2__flight_edit_flight_edit_component__["a" /* FlightEditComponent */],
                // canActivate: [AuthGuard],
                canDeactivate: [__WEBPACK_IMPORTED_MODULE_5__shared_deactivation_leave_component_guard__["a" /* LeaveComponentGuard */]],
                data: {
                    restricted: true // Custom Property
                },
                resolve: {
                    flight: __WEBPACK_IMPORTED_MODULE_4__flight_search_flight_resolver__["a" /* FlightResolver */]
                }
            }
        ]
    }
];
var FlightBookingRouterModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forChild(FLIGHT_BOOKING_ROUTES);
//# sourceMappingURL=flight-booking.routes.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_flight__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_flight___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__entities_flight__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FlightCardComponent = (function () {
    function FlightCardComponent(zone, element) {
        this.zone = zone;
        this.element = element;
        this.selectedItemChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    FlightCardComponent.prototype.select = function () {
        this.selectedItemChange.emit(this.item);
    };
    FlightCardComponent.prototype.check = function () {
        this.blink();
        return null;
    };
    FlightCardComponent.prototype.blink = function () {
        // Vorsicht: Direkter DOM-Zugriff !!!
        var _this = this;
        this.element.nativeElement.firstChild.style.backgroundColor = 'crimson';
        this.zone.runOutsideAngular(function () {
            setTimeout(function () {
                _this.element.nativeElement.firstChild.style.backgroundColor = 'lightsteelblue';
            }, 1000);
        });
    };
    return FlightCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__entities_flight__["Flight"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__entities_flight__["Flight"]) === "function" && _a || Object)
], FlightCardComponent.prototype, "item", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__entities_flight__["Flight"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__entities_flight__["Flight"]) === "function" && _b || Object)
], FlightCardComponent.prototype, "selectedItem", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], FlightCardComponent.prototype, "selectedItemChange", void 0);
FlightCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'flight-card',
        template: __webpack_require__(535),
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object])
], FlightCardComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=flight.card.component.js.map

/***/ }),

/***/ 533:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)();
// imports


// module
exports.push([module.i, "\r\ninput.ng-valid {\r\n    border-left-style: solid;\r\n    border-left-color: forestgreen;\r\n    border-left-width: 5px;\r\n}\r\n\r\ninput.ng-invalid {\r\n    border-left-style: solid;\r\n    border-left-color: hotpink;\r\n    border-left-width: 5px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 534:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-3\">\n    <ul class=\"nav nav-pills nav-stacked\" style=\"margin-top:20px;\">\n        <li routerLinkActive=\"active\"><a [routerLink]=\"['./flight-search']\">Search Flights</a></li>\n        <li routerLinkActive=\"active\"><a [routerLink]=\"['./flight-edit', 0]\">Add Flight</a></li>\n    </ul>\n</div>\n\n<div class=\"col-md-9\">\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 535:
/***/ (function(module, exports) {

module.exports = "<div style=\"padding:20px;\"\n    [ngStyle]=\"{ 'background-color': (item == selectedItem) ? 'orange' : 'lightsteelblue'}\">\n    <h2>{{item.from}} - {{item.to}}</h2>\n    <p>Flight No. #{{item.id}}</p>\n    <p>Date: {{item.date | date:'dd.MM.yyyy HH:mm'}}</p>\n\n    <div style=\"height:40px\">\n        <p>\n            <input type=\"button\"\n                   value=\"Auswählen\"\n                   class=\"btn btn-default\"\n                   (click)=\"select()\"/>\n        </p>\n    </div>\n\n    <ng-content></ng-content>\n\n    {{check()}}\n\n</div>\n"

/***/ }),

/***/ 536:
/***/ (function(module, exports) {

module.exports = "<h1>Edit Flight</h1>\n\n<div *ngIf=\"exitWarning.show\" class=\"alert alert-warning\" style=\"position: fixed; top:20px; width:400px; z-index:10\">\n    <div>\n      Do you really want to leave?\n    </div>\n    <div>\n        <a href=\"javascript:void(0)\" (click)=\"decide(true)\" class=\"btn btn-danger\">Sure</a>\n        <a href=\"javascript:void(0)\" (click)=\"decide(false)\" class=\"btn btn-default\">Nope</a>\n    </div>\n</div>\n\n<!--\n<div *ngIf=\"flight\">\n-->\n<div *ngIf=\"message\">\n    {{message}}\n</div>\n\n<div class=\"form-group\">\n    <label>Id</label>\n    <input class=\"form-control\" [(ngModel)]=\"flight.id\">\n</div>\n<div class=\"form-group\">\n    <label>From</label>\n    <input class=\"form-control\" [(ngModel)]=\"flight.from\">\n</div>\n<div class=\"form-group\">\n    <label>To</label>\n    <input class=\"form-control\" [(ngModel)]=\"flight.to\">\n</div>\n<div class=\"form-group\">\n    <label>Datum</label>\n    <input class=\"form-control\" [(ngModel)]=\"flight.date\">\n</div>\n<div class=\"form-group\">\n    <button class=\"btn btn-primary\" (click)=\"save()\">Save</button>\n    <button flightTooltip2=\"This action is irreversible!\" (flightClickWithWarning)=\"remove()\">Remove</button>\n    <ng-template #tooltip>\n        <flight-tooltip>\n            This action is irreversible.\n        </flight-tooltip>\n        <!--\n        <div>\n            This action is irreversible.\n        </div>\n        -->\n    </ng-template>\n</div>\n<!--\n</div>\n-->\n"

/***/ }),

/***/ 537:
/***/ (function(module, exports) {

module.exports = "<h1>Search Flights</h1>\n\n<form #f=\"ngForm\" novalidate flightRoundTrip>\n\n    <div *ngIf=\"f?.control?.hasError('round-trip')\">\n        Round trips arn't allowed.\n    </div>\n\n    <div class=\"form-group\">\n        <label>From</label>\n        <input class=\"form-control\"\n               [(ngModel)]=\"from\"\n               name=\"from\">\n    </div>\n\n    <div class=\"form-group\">\n        <label>To</label>\n        <input class=\"form-control\" [(ngModel)]=\"to\" name=\"to\" flightE2eLocator=\"to\">\n    </div>\n\n    <div class=\"form-group\">\n        <button\n            class=\"btn btn-primary\"\n            name=\"btnSearch\"\n            [disabled]=\"!f.valid\"\n            (click)=\"search()\">Search\n        </button>\n      <button\n        class=\"btn btn-primary\"\n        name=\"btnSearch\"\n        [disabled]=\"!f.valid\"\n        (click)=\"delay()\">Delay\n      </button>\n    </div>\n\n</form>\n\n<div class=\"row\">\n    <div *ngFor=\"let f of flights\" class=\"col-sm-6 col-md-4 col-lg-3 \">\n        <flight-card [item]=\"f\"\n                     [(selectedItem)]=\"selectedFlight\">\n\n            <a class=\"btn btn-default\"\n               [routerLink]=\"['../flight-edit', f.id]\">Edit</a>\n\n        </flight-card>\n\n    </div>\n</div>\n\n\n<div class=\"row\" style=\"margin-top:40px\">\n<pre>Your Flight\n----------------------\n{{selectedFlight | json}}\n</pre>\n</div>\n"

/***/ })

});
//# sourceMappingURL=0.chunk.js.map