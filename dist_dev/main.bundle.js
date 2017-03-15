webpackJsonp([2,5],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PassengerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PassengerComponent = (function () {
    function PassengerComponent() {
    }
    return PassengerComponent;
}());
PassengerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'passenger',
        template: __webpack_require__(196)
    })
], PassengerComponent);

//# sourceMappingURL=passenger.component.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TooltipComponent = (function () {
    function TooltipComponent() {
    }
    return TooltipComponent;
}());
TooltipComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'flight-tooltip',
        template: "\n        <div class=\"tooltip-bg\">\n            <b>Tipp:</b>\n            <ng-content></ng-content>\n        </div>\n    ",
        styles: ["\n        .tooltip-bg {\n            background-color: yellow; \n            border: solid 2px darkkhaki\n        }\n    "]
    })
], TooltipComponent);

//# sourceMappingURL=tooltip.component.js.map

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./flight-booking/flight-booking.module": [
		523,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 160;


/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(187);




console.info('environment.production', __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production);
if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_oauth2_oidc__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_oauth2_oidc___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular_oauth2_oidc__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(router, oauthService, translate) {
        this.router = router;
        this.oauthService = oauthService;
        this.translate = translate;
        this.info = 'Welt';
        this.showWaitInfo = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.initNgTranslate();
        this.initRouterEvents();
        this.initAuth();
    };
    AppComponent.prototype.initNgTranslate = function () {
        /*
        this.translate.addLangs(['en', 'de']);
        this.translate.setDefaultLang('de');
        this.translate.use('de');
        */
    };
    AppComponent.prototype.initRouterEvents = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* NavigationStart */]) {
                _this.showWaitInfo = true;
            }
            if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* NavigationEnd */]
                || event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* NavigationCancel */]
                || event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* NavigationError */]) {
                _this.showWaitInfo = false;
            }
        });
    };
    AppComponent.prototype.initAuth = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'flight-app',
        template: __webpack_require__(191),
        styles: [__webpack_require__(189)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular_oauth2_oidc__["OAuthService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular_oauth2_oidc__["OAuthService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["d" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["d" /* TranslateService */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_tokens__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routes__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__flight_history_flight_history_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_translate__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular_oauth2_oidc__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular_oauth2_oidc___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular_oauth2_oidc__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__passenger_passenger_module__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__core_core_module__ = __webpack_require__(167);
/* unused harmony export createLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














/*
import runtime from 'serviceworker-webpack-plugin/lib/runtime';

if ('serviceWorker' in navigator) {
  const registration = runtime.register();
}
*/
function createLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_10_ng2_translate__["a" /* TranslateStaticLoader */](http, './i18n', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_13__core_core_module__["a" /* CoreModule */],
            __WEBPACK_IMPORTED_MODULE_7__app_routes__["a" /* AppRouterModule */],
            __WEBPACK_IMPORTED_MODULE_11_angular_oauth2_oidc__["OAuthModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_10_ng2_translate__["b" /* TranslateModule */].forRoot({
                provide: __WEBPACK_IMPORTED_MODULE_10_ng2_translate__["c" /* TranslateLoader */],
                useFactory: createLoader,
                deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"]]
            }),
            //    FlightBookingModule, // <-- Would prevent lazy loading
            __WEBPACK_IMPORTED_MODULE_12__passenger_passenger_module__["a" /* PassengerModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__flight_history_flight_history_component__["a" /* FlightHistoryComponent */]
        ],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_5__app_tokens__["a" /* BASE_URL */], useValue: 'http://www.angular.at' }
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* AppComponent */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flight_history_flight_history_component__ = __webpack_require__(95);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouterModule; });



var APP_ROUTES = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'flight-booking',
        loadChildren: './flight-booking/flight-booking.module#FlightBookingModule',
    },
    {
        path: 'history',
        component: __WEBPACK_IMPORTED_MODULE_2__flight_history_flight_history_component__["a" /* FlightHistoryComponent */],
        outlet: 'aux'
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
var AppRouterModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(APP_ROUTES /*,
 { preloadingStrategy: CustomPreloadingStrategy, useHash: false } */);
// export let AppRouterModule = RouterModule.forRoot(APP_ROUTES, { useHash: true, enableTracing: true});
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_deactivation_leave_component_guard__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_preload_custom_preloading_strategy__ = __webpack_require__(177);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
CoreModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [],
        declarations: [],
        providers: [
            __WEBPACK_IMPORTED_MODULE_1__shared_deactivation_leave_component_guard__["a" /* LeaveComponentGuard */],
            __WEBPACK_IMPORTED_MODULE_2__shared_preload_custom_preloading_strategy__["a" /* CustomPreloadingStrategy */],
        ],
        exports: []
    })
], CoreModule);

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Passenger; });
var Passenger = (function () {
    function Passenger() {
    }
    return Passenger;
}());

//# sourceMappingURL=passenger.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_passenger__ = __webpack_require__(168);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PassengerCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PassengerCardComponent = (function () {
    function PassengerCardComponent() {
        this.selectedItemChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    PassengerCardComponent.prototype.isSelected = function () {
        if (this.selectedItem) {
            return this.selectedItem === this.item ? 'yes' : 'no';
        }
    };
    PassengerCardComponent.prototype.select = function () {
        this.selectedItemChange.emit(this.item);
    };
    return PassengerCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__entities_passenger__["a" /* Passenger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__entities_passenger__["a" /* Passenger */]) === "function" && _a || Object)
], PassengerCardComponent.prototype, "item", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__entities_passenger__["a" /* Passenger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__entities_passenger__["a" /* Passenger */]) === "function" && _b || Object)
], PassengerCardComponent.prototype, "selectedItem", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], PassengerCardComponent.prototype, "selectedItemChange", void 0);
PassengerCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'passenger-card',
        template: __webpack_require__(193)
    })
], PassengerCardComponent);

var _a, _b;
//# sourceMappingURL=passenger.card.component.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__passenger_search_passenger_search_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__passenger_card_passenger_card_component__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__passenger_edit_passenger_edit_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__passenger_routes__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__passenger_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__passenger_search_passenger_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__passenger_search_passenger_resolver__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PassengerModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var PassengerModule = (function () {
    function PassengerModule() {
    }
    return PassengerModule;
}());
PassengerModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_7__passenger_routes__["a" /* PassengerBookingRouterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__passenger_search_passenger_search_component__["a" /* PassengerSearchComponent */],
            __WEBPACK_IMPORTED_MODULE_2__passenger_card_passenger_card_component__["a" /* PassengerCardComponent */],
            __WEBPACK_IMPORTED_MODULE_3__passenger_edit_passenger_edit_component__["a" /* PassengerEditComponent */],
            __WEBPACK_IMPORTED_MODULE_8__passenger_component__["a" /* PassengerComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__passenger_search_passenger_service__["a" /* PassengerService */],
            __WEBPACK_IMPORTED_MODULE_10__passenger_search_passenger_resolver__["a" /* PassengerResolver */]
        ],
        exports: []
    })
], PassengerModule);

//# sourceMappingURL=passenger.module.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__passenger_search_passenger_search_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__passenger_edit_passenger_edit_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__passenger_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__passenger_search_passenger_resolver__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_deactivation_leave_component_guard__ = __webpack_require__(93);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PassengerBookingRouterModule; });






var FLIGHT_BOOKING_ROUTES = [
    {
        path: 'passenger',
        component: __WEBPACK_IMPORTED_MODULE_3__passenger_component__["a" /* PassengerComponent */],
        // canActivateChild: [AuthChildGuard],
        children: [
            {
                path: '',
                redirectTo: 'passenger-search',
                pathMatch: 'full'
            },
            {
                path: 'passenger-search',
                component: __WEBPACK_IMPORTED_MODULE_1__passenger_search_passenger_search_component__["a" /* PassengerSearchComponent */]
            },
            {
                path: 'passenger-edit/:id',
                component: __WEBPACK_IMPORTED_MODULE_2__passenger_edit_passenger_edit_component__["a" /* PassengerEditComponent */],
                // canActivate: [AuthGuard],
                canDeactivate: [__WEBPACK_IMPORTED_MODULE_5__shared_deactivation_leave_component_guard__["a" /* LeaveComponentGuard */]],
                data: {
                    restricted: true // Custom Property
                },
                resolve: {
                    passenger: __WEBPACK_IMPORTED_MODULE_4__passenger_search_passenger_resolver__["a" /* PassengerResolver */]
                }
            }
        ]
    }
];
var PassengerBookingRouterModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forChild(FLIGHT_BOOKING_ROUTES);
//# sourceMappingURL=passenger.routes.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateValueAccessorDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DateValueAccessorDirective = DateValueAccessorDirective_1 = (function () {
    function DateValueAccessorDirective(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    DateValueAccessorDirective.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    DateValueAccessorDirective.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    DateValueAccessorDirective.prototype.blur = function () {
        this.onTouched();
    };
    // Parser: View --> Ctrl
    DateValueAccessorDirective.prototype.input = function (value) {
        // Write back to model
        if (value) {
            value = value.split(/\./);
            value = value[2] + '-' + value[1] + '-' + value[0];
        }
        this.onChange(value);
    };
    // Formatter: Ctrl --> View
    DateValueAccessorDirective.prototype.writeValue = function (value) {
        // Write to view
        if (value) {
            var date = new Date(value);
            value =
                date.getDate() + '.'
                    + (date.getMonth() + 1) + '.'
                    + date.getFullYear();
        }
        var normalizedValue = (value) ? value : '';
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
    };
    return DateValueAccessorDirective;
}());
DateValueAccessorDirective = DateValueAccessorDirective_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[flightDate]',
        providers: [{
                provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALUE_ACCESSOR */],
                useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return DateValueAccessorDirective_1; }),
                multi: true
            }]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object])
], DateValueAccessorDirective);

var DateValueAccessorDirective_1, _a, _b;
//# sourceMappingURL=date-value-accessor.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DateComponent = (function () {
    function DateComponent() {
        this.dateChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        console.debug('date in constructor', this.date);
    }
    DateComponent.prototype.ngOnInit = function () {
        console.debug('date in ngOnInit', this.date);
    };
    DateComponent.prototype.ngOnChanges = function (change) {
        console.debug('date in ngOnChanges', this.date);
        // if(change.date) { ... }
        var date = new Date(this.date);
        this.day = date.getDate();
        this.month = date.getMonth() + 1;
        this.year = date.getFullYear();
        this.hour = date.getHours();
        this.minute = date.getMinutes();
    };
    DateComponent.prototype.apply = function () {
        var date = new Date(this.year, this.month - 1, this.day, this.hour, this.minute);
        this.dateChange.next(date.toISOString());
    };
    return DateComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], DateComponent.prototype, "date", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], DateComponent.prototype, "dateChange", void 0);
DateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'flight-date-component',
        template: __webpack_require__(197)
    }),
    __metadata("design:paramtypes", [])
], DateComponent);

//# sourceMappingURL=date.component.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateControlComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DateControlComponent = (function () {
    function DateControlComponent(c) {
        this.c = c;
        this.onChange = function (_) { };
        this.onTouched = function () { };
        c.valueAccessor = this;
    }
    DateControlComponent.prototype.writeValue = function (value) {
        this.splitDate(value);
    };
    DateControlComponent.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    DateControlComponent.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    DateControlComponent.prototype.splitDate = function (dateString) {
        var date = new Date(dateString);
        this.day = date.getDate();
        this.month = date.getMonth() + 1;
        this.year = date.getFullYear();
        this.hour = date.getHours();
        this.minute = date.getMinutes();
    };
    DateControlComponent.prototype.apply = function () {
        var date = new Date(this.year, this.month - 1, this.day, this.hour, this.minute);
        this.onChange(date.toISOString());
        this.onTouched();
    };
    return DateControlComponent;
}());
DateControlComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'flight-date-control',
        template: __webpack_require__(198)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NgControl */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NgControl */]) === "function" && _a || Object])
], DateControlComponent);

var _a;
//# sourceMappingURL=date.control.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return E2eLocatorDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var E2eLocatorDirective = (function () {
    function E2eLocatorDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    Object.defineProperty(E2eLocatorDirective.prototype, "flightE2eLocator", {
        set: function (flightE2eLocator) {
            this.renderer.setElementAttribute(this.el.nativeElement, 'flightE2eLocator', flightE2eLocator);
        },
        enumerable: true,
        configurable: true
    });
    return E2eLocatorDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], E2eLocatorDirective.prototype, "flightE2eLocator", null);
E2eLocatorDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[flightE2eLocator]' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _b || Object])
], E2eLocatorDirective);

var _a, _b;
//# sourceMappingURL=e2e-locator.directive.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CityPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CityPipe = (function () {
    function CityPipe() {
    }
    CityPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var fmt = args[0]; // short, long
        var short, long;
        switch (value) {
            case 'Graz':
                long = 'Flughafen Graz Thalerhof';
                short = 'GRZ';
                break;
            case 'Hamburg':
                long = 'Airport Hamburg Fuhlsbüttl Helmut Schmidt';
                short = 'HAM';
                break;
            default:
                long = short = 'ROM';
        }
        if (fmt === 'short') {
            return short;
        }
        return long;
    };
    return CityPipe;
}());
CityPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'flightCity',
        pure: true
    })
], CityPipe);

//# sourceMappingURL=city.pipe.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomPreloadingStrategy; });
var CustomPreloadingStrategy = (function () {
    function CustomPreloadingStrategy() {
    }
    CustomPreloadingStrategy.prototype.preload = function (route, fn) {
        // return Observable.of(true).delay(7000).flatMap(_ => fn());
        if (true) {
            return fn();
        }
    };
    return CustomPreloadingStrategy;
}());

//# sourceMappingURL=custom-preloading.strategy.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepeateDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RepeateDirective = (function () {
    function RepeateDirective(templateRef, viewContainer) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
    }
    Object.defineProperty(RepeateDirective.prototype, "flightRepeateOf", {
        set: function (items) {
            this.viewContainer.clear();
            var i = 0;
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var item = items_1[_i];
                i++;
                var context = {
                    $implicit: item,
                    index: i - 1,
                    odd: (i % 2 === 1)
                };
                this.viewContainer
                    .createEmbeddedView(this.templateRef, context);
            }
        },
        enumerable: true,
        configurable: true
    });
    return RepeateDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], RepeateDirective.prototype, "flightRepeateOf", null);
RepeateDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[flightRepeate]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _b || Object])
], RepeateDirective);

var _a, _b;
//# sourceMappingURL=repeate.directive.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TooltipDirective = (function () {
    function TooltipDirective(viewContainer, renderer) {
        this.viewContainer = viewContainer;
        this.renderer = renderer;
    }
    TooltipDirective.prototype.handleMouseover = function ($event) {
        this.embeddedViewRef = this.viewContainer.createEmbeddedView(this.template);
        var nativeElement = this.embeddedViewRef.rootNodes.find(function (n) { return n.nodeType === 1; });
        if (!nativeElement) {
            return;
        }
        var left = $event.target.offsetLeft + 'px';
        var top = ($event.target.offsetTop + $event.target.offsetHeight + 5) + 'px';
        this.renderer.setElementStyle(nativeElement, 'position', 'absolute');
        this.renderer.setElementStyle(nativeElement, 'left', left);
        this.renderer.setElementStyle(nativeElement, 'top', top);
        this.renderer.setElementStyle(nativeElement, 'width', '200px');
    };
    TooltipDirective.prototype.handleMouseout = function () {
        this.embeddedViewRef.destroy();
    };
    return TooltipDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('flightTooltip'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) === "function" && _a || Object)
], TooltipDirective.prototype, "template", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseover', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TooltipDirective.prototype, "handleMouseover", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseout'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TooltipDirective.prototype, "handleMouseout", null);
TooltipDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[flightTooltip]'
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _c || Object])
], TooltipDirective);

var _a, _b, _c;
//# sourceMappingURL=tooltip.directive.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tooltip_component__ = __webpack_require__(101);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tooltip2Directive; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Tooltip2Directive = (function () {
    function Tooltip2Directive(viewContainer, renderer, injector, componentFactoryResolver) {
        this.viewContainer = viewContainer;
        this.renderer = renderer;
        this.injector = injector;
        this.componentFactoryResolver = componentFactoryResolver;
    }
    Tooltip2Directive.prototype.handleMouseover = function ($event) {
        var compFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_1__tooltip_component__["a" /* TooltipComponent */]);
        var textNode = document.createTextNode(this.message);
        this.componentRef = this.viewContainer.createComponent(compFactory, null, this.injector, [[textNode]]);
        var nativeElement = this.componentRef.location.nativeElement;
        var left = $event.target.offsetLeft + 'px';
        var top = ($event.target.offsetTop + $event.target.offsetHeight + 5) + 'px';
        this.renderer.setElementStyle(nativeElement, 'position', 'absolute');
        this.renderer.setElementStyle(nativeElement, 'left', left);
        this.renderer.setElementStyle(nativeElement, 'top', top);
        this.renderer.setElementStyle(nativeElement, 'width', '200px');
    };
    Tooltip2Directive.prototype.handleMouseout = function () {
        this.componentRef.destroy();
    };
    return Tooltip2Directive;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('flightTooltip2'),
    __metadata("design:type", String)
], Tooltip2Directive.prototype, "message", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseover', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Tooltip2Directive.prototype, "handleMouseover", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseout'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Tooltip2Directive.prototype, "handleMouseout", null);
Tooltip2Directive = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[flightTooltip2]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]) === "function" && _d || Object])
], Tooltip2Directive);

var _a, _b, _c, _d;
//# sourceMappingURL=tooltip2.directive.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnlessDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UnlessDirective = (function () {
    function UnlessDirective(templateRef, viewContainer) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
    }
    Object.defineProperty(UnlessDirective.prototype, "flightUnless", {
        set: function (condition) {
            if (!condition) {
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
            else {
                this.viewContainer.clear();
            }
        },
        enumerable: true,
        configurable: true
    });
    return UnlessDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], UnlessDirective.prototype, "flightUnless", null);
UnlessDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[flightUnless]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _b || Object])
], UnlessDirective);

var _a, _b;
//# sourceMappingURL=unless.directive.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsyncCityValidatorDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AsyncCityValidatorDirective = AsyncCityValidatorDirective_1 = (function () {
    function AsyncCityValidatorDirective() {
    }
    AsyncCityValidatorDirective.prototype.validate = function (ctrl) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                if (ctrl.value === 'Graz' || ctrl.value === 'Hamburg') {
                    resolve({});
                    return;
                }
                resolve({ 'async-city': false });
            }, 100);
        });
    };
    return AsyncCityValidatorDirective;
}());
AsyncCityValidatorDirective = AsyncCityValidatorDirective_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[flightAsyncCity]',
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* NG_ASYNC_VALIDATORS */],
                useExisting: AsyncCityValidatorDirective_1,
                multi: true
            }
        ]
    })
], AsyncCityValidatorDirective);

var AsyncCityValidatorDirective_1;
//# sourceMappingURL=async-city.validator.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CityValidatorDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CityValidatorDirective.prototype, "city", void 0);
CityValidatorDirective = CityValidatorDirective_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[flightCity]',
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NG_VALIDATORS */],
                useExisting: CityValidatorDirective_1,
                multi: true
            }
        ]
    }),
    __metadata("design:paramtypes", [])
], CityValidatorDirective);

var CityValidatorDirective_1;
//# sourceMappingURL=city.validator.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoundTripDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var RoundTripDirective = RoundTripDirective_1 = (function () {
    function RoundTripDirective() {
    }
    RoundTripDirective.prototype.validate = function (control) {
        var formGroup = control;
        var fromCtrl = formGroup.controls['from'];
        var toCtrl = formGroup.controls['to'];
        if (!fromCtrl || !toCtrl) {
            return {};
        }
        var from = fromCtrl.value;
        var to = toCtrl.value;
        if (from === to) {
            return {
                'round-trip': {
                    city: from
                }
            };
        }
        return {};
    };
    return RoundTripDirective;
}());
RoundTripDirective = RoundTripDirective_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[flightRoundTrip]',
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NG_VALIDATORS */], useExisting: RoundTripDirective_1, multi: true }]
    })
], RoundTripDirective);

var RoundTripDirective_1;
//# sourceMappingURL=roundtrip.validator.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationErrorsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidationErrorsComponent = (function () {
    function ValidationErrorsComponent() {
    }
    return ValidationErrorsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ValidationErrorsComponent.prototype, "errors", void 0);
ValidationErrorsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'flight-validation-errors',
        template: "\n        <div *ngIf=\"errors && errors.required\">\n            This field is required\n        </div>\n        <div *ngIf=\"errors && errors.minlength\">\n            Please enter at least {{ errors.minlength.expected }} characters\n        </div>\n        <div *ngIf=\"errors && errors.city\">\n            This city is now allowed\n        </div>\n    "
    })
], ValidationErrorsComponent);

//# sourceMappingURL=validation-errors.component.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightClickWithWarningDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FlightClickWithWarningDirective = (function () {
    function FlightClickWithWarningDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.warning = 'Are you sure?';
        this.flightClickWithWarning = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    FlightClickWithWarningDirective.prototype.ngOnInit = function () {
        // Warnung: Direkter DOM-Zugriff!
        // this.elementRef.nativeElement.setAttribute('class', 'btn btn-danger');
        // Indirekter DOM-Zugriff über Renderer
        this.renderer.setElementAttribute(this.elementRef.nativeElement, 'class', 'btn btn-danger');
    };
    FlightClickWithWarningDirective.prototype.handleClick = function ($event) {
        console.log('handleClick', $event);
        if (confirm(this.warning)) {
            this.flightClickWithWarning.emit();
        }
    };
    return FlightClickWithWarningDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], FlightClickWithWarningDirective.prototype, "warning", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], FlightClickWithWarningDirective.prototype, "flightClickWithWarning", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FlightClickWithWarningDirective.prototype, "handleClick", null);
FlightClickWithWarningDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[flightClickWithWarning]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _b || Object])
], FlightClickWithWarningDirective);

var _a, _b;
//# sourceMappingURL=flight-click-with-warning.directive.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)();
// imports


// module
exports.push([module.i, ".loading-indicator {\r\n    position: absolute;\r\n    left: 0px;\r\n    top: 0px;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: black;\r\n    opacity: 0.3;\r\n}\r\n\r\n.spinner {\r\n    width: 40px;\r\n    height: 40px;\r\n\r\n    position: relative;\r\n    margin: 100px auto;\r\n}\r\n\r\n.double-bounce1, .double-bounce2 {\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 50%;\r\n    background-color: #FFF;\r\n    opacity: 0.6;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n\r\n    -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\r\n    animation: sk-bounce 2.0s infinite ease-in-out;\r\n}\r\n\r\n.double-bounce2 {\r\n    -webkit-animation-delay: -1.0s;\r\n    animation-delay: -1.0s;\r\n}\r\n\r\n@-webkit-keyframes sk-bounce {\r\n    0%, 100% { -webkit-transform: scale(0.0) }\r\n    50% { -webkit-transform: scale(1.0) }\r\n}\r\n\r\n@keyframes sk-bounce {\r\n    0%, 100% {\r\n        transform: scale(0.0);\r\n        -webkit-transform: scale(0.0);\r\n    } 50% {\r\n          transform: scale(1.0);\r\n          -webkit-transform: scale(1.0);\r\n      }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)();
// imports


// module
exports.push([module.i, "\r\ninput.ng-valid {\r\n    border-left-style: solid;\r\n    border-left-color: forestgreen;\r\n    border-left-width: 5px;\r\n}\r\n\r\ninput.ng-invalid {\r\n    border-left-style: solid;\r\n    border-left-color: hotpink;\r\n    border-left-width: 5px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 191:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n    <ul class=\"nav navbar-nav\">\n        <li routerLinkActive=\"active\"><a [routerLink]=\"['/home', {showDetail:false}]\">Home</a></li>\n        <li routerLinkActive=\"active\"><a [routerLink]=\"['/flight-booking']\">Book a flight</a></li>\n        <li routerLinkActive=\"active\"><a [routerLink]=\"['/passenger']\">Passenger</a></li>\n        <li><a [routerLink]=\"[{outlets: { aux: ['history', {showDetail: true}] }}]\">Show History</a></li>\n        <li><a [routerLink]=\"[{outlets: { aux: null }}]\">Hide History</a></li>\n\n    </ul>\n</nav>\n\n<div class=\"container\">\n\n    <div class=\"row\">\n        <router-outlet></router-outlet>\n    </div>\n\n    <div class=\"row\">\n        <router-outlet name=\"aux\"></router-outlet>\n    </div>\n\n</div>\n\n<div class=\"loading-indicator\" *ngIf=\"showWaitInfo\">\n    <div class=\"spinner\">\n        <div class=\"double-bounce1\"></div>\n        <div class=\"double-bounce2\"></div>\n    </div>\n</div>\n"

/***/ }),

/***/ 192:
/***/ (function(module, exports) {

module.exports = "<h1>Welcome!</h1>\n"

/***/ }),

/***/ 193:
/***/ (function(module, exports) {

module.exports = "<div style=\"padding:20px;\"\n    [ngStyle]=\"{ 'background-color': (item == selectedItem) ? 'orange' : 'lightsteelblue'}\">\n    <h2>{{item.firstName}} - {{item.name}}</h2>\n    <p>Passenger No. #{{item.id}}</p>\n    <p>Bonus Miles {{item.bonusMiles}}</p>\n\n    <div style=\"height:40px\">\n        <p>\n            <input type=\"button\"\n                   value=\"Select\"\n                   class=\"btn btn-default\"\n                   (click)=\"select()\"/>\n        </p>\n    </div>\n\n    <ng-content></ng-content>\n\n</div>\n"

/***/ }),

/***/ 194:
/***/ (function(module, exports) {

module.exports = "<h1>Edit Passenger</h1>\n\n<div *ngIf=\"exitWarning.show\" class=\"alert alert-warning\" style=\"position: fixed; top:20px; width:400px; z-index:10\">\n    <div>\n      Do you really want to leave?\n    </div>\n    <div>\n        <a href=\"javascript:void(0)\" (click)=\"decide(true)\" class=\"btn btn-danger\">Sure</a>\n        <a href=\"javascript:void(0)\" (click)=\"decide(false)\" class=\"btn btn-default\">Nope</a>\n    </div>\n</div>\n\n<div *ngIf=\"message\">\n    {{message}}\n</div>\n\n<div class=\"form-group\">\n    <label>Id</label>\n    <input class=\"form-control\" [(ngModel)]=\"passenger.id\">\n</div>\n<div class=\"form-group\">\n    <label>First Name</label>\n    <input class=\"form-control\" [(ngModel)]=\"passenger.firstName\">\n</div>\n<div class=\"form-group\">\n    <label>Name</label>\n    <input class=\"form-control\" [(ngModel)]=\"passenger.name\">\n</div>\n<div class=\"form-group\">\n    <label>Bonus Miles</label>\n    <input class=\"form-control\" [(ngModel)]=\"passenger.bonusMiles\">\n</div>\n<div class=\"form-group\">\n    <button class=\"btn btn-primary\" (click)=\"save()\">Save</button>\n</div>\n"

/***/ }),

/***/ 195:
/***/ (function(module, exports) {

module.exports = "<h1>Search Passengers</h1>\n\n<form #f=\"ngForm\" novalidate passengerRoundTrip>\n\n    <div class=\"form-group\">\n        <label>Name</label>\n        <input class=\"form-control\"\n               [(ngModel)]=\"name\"\n               name=\"name\">\n    </div>\n\n    <div class=\"form-group\">\n        <button\n            class=\"btn btn-primary\"\n            name=\"btnSearch\"\n            [disabled]=\"!f.valid\"\n            (click)=\"search()\">Search\n        </button>\n    </div>\n\n</form>\n\n<div class=\"row\">\n    <div *ngFor=\"let f of passengers\" class=\"col-sm-6 col-md-4 col-lg-3 \">\n        <passenger-card [item]=\"f\"\n                     [(selectedItem)]=\"selectedPassenger\">\n\n            <a class=\"btn btn-default\"\n               [routerLink]=\"['../passenger-edit', f.id]\">Edit</a>\n\n        </passenger-card>\n\n    </div>\n</div>\n\n<div class=\"row\" style=\"margin-top:40px\">\n<pre>Your Passenger\n----------------------\n{{selectedPassenger | json}}\n</pre>\n</div>\n"

/***/ }),

/***/ 196:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-3\">\n    <ul class=\"nav nav-pills nav-stacked\" style=\"margin-top:20px;\">\n        <li routerLinkActive=\"active\"><a [routerLink]=\"['./passenger-search']\">Search Passengers</a></li>\n        <li routerLinkActive=\"active\"><a [routerLink]=\"['./passenger-edit', 0]\">Add Passenger</a></li>\n    </ul>\n</div>\n\n<div class=\"col-md-9\">\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 197:
/***/ (function(module, exports) {

module.exports = "<form class=\"form-inline\">\r\n    <input [(ngModel)]=\"day\" name=\"day\" maxlength=\"2\" style=\"width:50px\" class=\"form-control\" >\r\n    .\r\n    <input [(ngModel)]=\"month\" name=\"month\" maxlength=\"2\" style=\"width:50px\" class=\"form-control\">\r\n    .\r\n    <input [(ngModel)]=\"year\" name=\"year\" maxlength=\"4\" style=\"width:70px\" class=\"form-control\">\r\n\r\n    <input [(ngModel)]=\"hour\" name=\"hour\" maxlength=\"2\" style=\"width:50px\" class=\"form-control\">\r\n    :\r\n    <input [(ngModel)]=\"minute\" name=\"minute\" maxlength=\"2\" style=\"width:50px\" class=\"form-control\">\r\n\r\n    <input type=\"button\" value=\"Apply\" (click)=\"apply()\" class=\"btn btn-default\">\r\n</form>"

/***/ }),

/***/ 198:
/***/ (function(module, exports) {

module.exports = "<form class=\"form-inline\">\r\n <input [(ngModel)]=\"day\" name=\"day\" maxlength=\"2\" style=\"width:50px\" class=\"form-control\" >\r\n .\r\n <input [(ngModel)]=\"month\" name=\"month\" maxlength=\"2\" style=\"width:50px\" class=\"form-control\">\r\n .\r\n <input [(ngModel)]=\"year\" name=\"year\" maxlength=\"4\" style=\"width:70px\" class=\"form-control\">\r\n\r\n <input [(ngModel)]=\"hour\" name=\"hour\" maxlength=\"2\" style=\"width:50px\" class=\"form-control\">\r\n :\r\n <input [(ngModel)]=\"minute\" name=\"minute\" maxlength=\"2\" style=\"width:50px\" class=\"form-control\">\r\n\r\n <input type=\"button\" value=\"Apply\" (click)=\"apply()\" class=\"btn btn-default\">\r\n</form>"

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_tokens__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_oauth2_oidc__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_oauth2_oidc___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular_oauth2_oidc__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PassengerService; });
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
    PassengerService.prototype.find = function (name) {
        var _this = this;
        var url = this.baseUrl + '/api/passenger';
        // let url = this.baseUrl + '/api/securepassenger';
        // let url = '/data/passengers.json';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.set('Accept', 'text/json');
        headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken());
        var search = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__app_tokens__["a" /* BASE_URL */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angular_oauth2_oidc__["OAuthService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular_oauth2_oidc__["OAuthService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _b || Object, String])
], PassengerService);

var _a, _b;
//# sourceMappingURL=passenger.service.js.map

/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(161);


/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BASE_URL; });

var BASE_URL = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["OpaqueToken"]('BASE_URL');
//# sourceMappingURL=app.tokens.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaveComponentGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LeaveComponentGuard = (function () {
    function LeaveComponentGuard() {
    }
    LeaveComponentGuard.prototype.canDeactivate = function (component, route, state) {
        return component.canDeactivate();
    };
    return LeaveComponentGuard;
}());
LeaveComponentGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], LeaveComponentGuard);

//# sourceMappingURL=leave-component-guard.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_city_pipe__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validation_city_validator__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validation_roundtrip_validator__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__validation_async_city_validator__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__date_date_component__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__e2e_locator_e2e_locator_directive__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_translate__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__warning_flight_click_with_warning_directive__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__structural_repeate_directive__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__structural_unless_directive__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__structural_tooltip_directive__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__structural_tooltip_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__structural_tooltip2_directive__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__validation_validation_errors_component__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__date_date_control__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__date_date_value_accessor__ = __webpack_require__(172);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"] // ngFor, ngIf, ngStyle, ngClass, date, json
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__pipes_city_pipe__["a" /* CityPipe */],
            __WEBPACK_IMPORTED_MODULE_4__validation_city_validator__["a" /* CityValidatorDirective */],
            __WEBPACK_IMPORTED_MODULE_6__validation_async_city_validator__["a" /* AsyncCityValidatorDirective */],
            __WEBPACK_IMPORTED_MODULE_5__validation_roundtrip_validator__["a" /* RoundTripDirective */],
            __WEBPACK_IMPORTED_MODULE_7__date_date_component__["a" /* DateComponent */],
            __WEBPACK_IMPORTED_MODULE_17__date_date_control__["a" /* DateControlComponent */],
            __WEBPACK_IMPORTED_MODULE_18__date_date_value_accessor__["a" /* DateValueAccessorDirective */],
            __WEBPACK_IMPORTED_MODULE_8__e2e_locator_e2e_locator_directive__["a" /* E2eLocatorDirective */],
            __WEBPACK_IMPORTED_MODULE_10__warning_flight_click_with_warning_directive__["a" /* FlightClickWithWarningDirective */],
            __WEBPACK_IMPORTED_MODULE_11__structural_repeate_directive__["a" /* RepeateDirective */],
            __WEBPACK_IMPORTED_MODULE_12__structural_unless_directive__["a" /* UnlessDirective */],
            __WEBPACK_IMPORTED_MODULE_13__structural_tooltip_directive__["a" /* TooltipDirective */],
            __WEBPACK_IMPORTED_MODULE_14__structural_tooltip_component__["a" /* TooltipComponent */],
            __WEBPACK_IMPORTED_MODULE_15__structural_tooltip2_directive__["a" /* Tooltip2Directive */],
            __WEBPACK_IMPORTED_MODULE_16__validation_validation_errors_component__["a" /* ValidationErrorsComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__pipes_city_pipe__["a" /* CityPipe */],
            __WEBPACK_IMPORTED_MODULE_4__validation_city_validator__["a" /* CityValidatorDirective */],
            __WEBPACK_IMPORTED_MODULE_6__validation_async_city_validator__["a" /* AsyncCityValidatorDirective */],
            __WEBPACK_IMPORTED_MODULE_5__validation_roundtrip_validator__["a" /* RoundTripDirective */],
            __WEBPACK_IMPORTED_MODULE_7__date_date_component__["a" /* DateComponent */],
            __WEBPACK_IMPORTED_MODULE_17__date_date_control__["a" /* DateControlComponent */],
            __WEBPACK_IMPORTED_MODULE_18__date_date_value_accessor__["a" /* DateValueAccessorDirective */],
            __WEBPACK_IMPORTED_MODULE_8__e2e_locator_e2e_locator_directive__["a" /* E2eLocatorDirective */],
            __WEBPACK_IMPORTED_MODULE_9_ng2_translate__["b" /* TranslateModule */],
            __WEBPACK_IMPORTED_MODULE_10__warning_flight_click_with_warning_directive__["a" /* FlightClickWithWarningDirective */],
            __WEBPACK_IMPORTED_MODULE_11__structural_repeate_directive__["a" /* RepeateDirective */],
            __WEBPACK_IMPORTED_MODULE_12__structural_unless_directive__["a" /* UnlessDirective */],
            __WEBPACK_IMPORTED_MODULE_13__structural_tooltip_directive__["a" /* TooltipDirective */],
            __WEBPACK_IMPORTED_MODULE_14__structural_tooltip_component__["a" /* TooltipComponent */],
            __WEBPACK_IMPORTED_MODULE_15__structural_tooltip2_directive__["a" /* Tooltip2Directive */],
            __WEBPACK_IMPORTED_MODULE_16__validation_validation_errors_component__["a" /* ValidationErrorsComponent */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_14__structural_tooltip_component__["a" /* TooltipComponent */]
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightHistoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FlightHistoryComponent = (function () {
    function FlightHistoryComponent() {
    }
    return FlightHistoryComponent;
}());
FlightHistoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: "\n<div class=\"list-group\">\n  <a href=\"#\" class=\"list-group-item disabled\">\n    History\n  </a>\n  <a class=\"list-group-item\">Graz - Hamburg</a>\n  <a class=\"list-group-item\">Graz - Frankfurt</a>\n  <a class=\"list-group-item\">Hamburg - Graz</a>\n  <a class=\"list-group-item\">Frankfurt - Graz</a>\n</div>\n    "
    })
], FlightHistoryComponent);

//# sourceMappingURL=flight-history.component.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(route) {
        this.route = route;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (p) {
            _this.needLogin = (p['needLogin'] === 'true');
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(192)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__passenger_search_passenger_service__ = __webpack_require__(45);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PassengerEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PassengerEditComponent = (function () {
    function PassengerEditComponent(passengerService, route) {
        this.passengerService = passengerService;
        this.route = route;
        this.exitWarning = {
            show: false,
            resolve: null
        };
    }
    PassengerEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (p) {
            _this.id = p['id'];
        });
        this.route.data.subscribe(function (data) {
            var passenger = data['passenger'];
            if (passenger) {
                _this.passenger = passenger;
            }
            else {
                _this.passenger = {};
            }
        });
    };
    PassengerEditComponent.prototype.save = function () {
        console.warn('save is not implemented');
    };
    PassengerEditComponent.prototype.decide = function (decision) {
        this.exitWarning.show = false;
        this.exitWarning.resolve(decision);
    };
    PassengerEditComponent.prototype.canDeactivate = function () {
        var _this = this;
        this.exitWarning.show = true;
        return new Promise(function (resolve) {
            _this.exitWarning.resolve = resolve;
        });
    };
    PassengerEditComponent.prototype.remove = function () {
        console.log('remove is not implemented');
    };
    return PassengerEditComponent;
}());
PassengerEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(194)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__passenger_search_passenger_service__["a" /* PassengerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__passenger_search_passenger_service__["a" /* PassengerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], PassengerEditComponent);

var _a, _b;
//# sourceMappingURL=passenger-edit.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__passenger_service__ = __webpack_require__(45);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PassengerSearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PassengerSearchComponent = (function () {
    function PassengerSearchComponent(passengerService, route) {
        this.passengerService = passengerService;
        this.name = "Doe";
        route.queryParams.subscribe(function (p) {
            // console.debug('queryParams', p);
        });
    }
    Object.defineProperty(PassengerSearchComponent.prototype, "passengers", {
        // cmp.passengers
        get: function () {
            return this.passengerService.passengers;
        },
        enumerable: true,
        configurable: true
    });
    PassengerSearchComponent.prototype.select = function (f) {
        this.selectedPassenger = f;
    };
    PassengerSearchComponent.prototype.search = function () {
        this.passengerService.find(this.name);
    };
    PassengerSearchComponent.prototype.disableButton = function (event) {
        console.log(event);
    };
    return PassengerSearchComponent;
}());
PassengerSearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'passenger-search',
        template: __webpack_require__(195),
        styles: [__webpack_require__(190)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__passenger_service__["a" /* PassengerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__passenger_service__["a" /* PassengerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], PassengerSearchComponent);

var _a, _b;
//# sourceMappingURL=passenger-search.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__passenger_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PassengerResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PassengerResolver = (function () {
    function PassengerResolver(passengerService) {
        this.passengerService = passengerService;
    }
    PassengerResolver.prototype.resolve = function (route, state) {
        var id = route.params['id'];
        if (id == '0') {
            return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].of(null);
        }
        return this.passengerService.findById(id);
    };
    return PassengerResolver;
}());
PassengerResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__passenger_service__["a" /* PassengerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__passenger_service__["a" /* PassengerService */]) === "function" && _a || Object])
], PassengerResolver);

var _a;
//# sourceMappingURL=passenger.resolver.js.map

/***/ })

},[520]);
//# sourceMappingURL=main.bundle.js.map