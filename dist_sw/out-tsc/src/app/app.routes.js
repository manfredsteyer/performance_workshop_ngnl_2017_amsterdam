"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var flight_history_component_1 = require("./flight-history/flight-history.component");
var APP_ROUTES = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'flight-booking',
        loadChildren: './flight-booking/flight-booking.module#FlightBookingModule'
    },
    {
        path: 'history',
        component: flight_history_component_1.FlightHistoryComponent,
        outlet: 'aux'
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
exports.AppRouterModule = router_1.RouterModule.forRoot(APP_ROUTES /*,
 { preloadingStrategy: CustomPreloadingStrategy, useHash: false } */);
// export let AppRouterModule = RouterModule.forRoot(APP_ROUTES, { useHash: true, enableTracing: true});
//# sourceMappingURL=app.routes.js.map