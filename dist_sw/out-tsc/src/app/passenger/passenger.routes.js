"use strict";
var router_1 = require("@angular/router");
var passenger_search_component_1 = require("./passenger-search/passenger-search.component");
var passenger_edit_component_1 = require("./passenger-edit/passenger-edit.component");
var passenger_component_1 = require("./passenger.component");
var passenger_resolver_1 = require("./passenger-search/passenger.resolver");
var leave_component_guard_1 = require("../shared/deactivation/leave-component-guard");
var FLIGHT_BOOKING_ROUTES = [
    {
        path: 'passenger',
        component: passenger_component_1.PassengerComponent,
        // canActivateChild: [AuthChildGuard],
        children: [
            {
                path: '',
                redirectTo: 'passenger-search',
                pathMatch: 'full'
            },
            {
                path: 'passenger-search',
                component: passenger_search_component_1.PassengerSearchComponent
            },
            {
                path: 'passenger-edit/:id',
                component: passenger_edit_component_1.PassengerEditComponent,
                // canActivate: [AuthGuard],
                canDeactivate: [leave_component_guard_1.LeaveComponentGuard],
                data: {
                    restricted: true // Custom Property
                },
                resolve: {
                    passenger: passenger_resolver_1.PassengerResolver
                }
            }
        ]
    }
];
exports.PassengerBookingRouterModule = router_1.RouterModule.forChild(FLIGHT_BOOKING_ROUTES);
//# sourceMappingURL=passenger.routes.js.map