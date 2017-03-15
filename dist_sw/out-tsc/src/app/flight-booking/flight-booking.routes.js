"use strict";
var router_1 = require("@angular/router");
var flight_search_component_1 = require("./flight-search/flight-search.component");
var flight_edit_component_1 = require("./flight-edit/flight-edit.component");
var flight_booking_component_1 = require("./flight-booking.component");
var flight_resolver_1 = require("./flight-search/flight.resolver");
var leave_component_guard_1 = require("../shared/deactivation/leave-component-guard");
var FLIGHT_BOOKING_ROUTES = [
    {
        path: '',
        component: flight_booking_component_1.FlightBookingComponent,
        // canActivateChild: [AuthChildGuard],
        children: [
            {
                path: '',
                redirectTo: 'flight-search',
                pathMatch: 'full'
            },
            {
                path: 'flight-search',
                component: flight_search_component_1.FlightSearchComponent
            },
            {
                path: 'flight-edit/:id',
                component: flight_edit_component_1.FlightEditComponent,
                // canActivate: [AuthGuard],
                canDeactivate: [leave_component_guard_1.LeaveComponentGuard],
                data: {
                    restricted: true // Custom Property
                },
                resolve: {
                    flight: flight_resolver_1.FlightResolver
                }
            }
        ]
    }
];
exports.FlightBookingRouterModule = router_1.RouterModule.forChild(FLIGHT_BOOKING_ROUTES);
//# sourceMappingURL=flight-booking.routes.js.map