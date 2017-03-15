import { CustomPreloadingStrategy } from './shared/preload/custom-preloading.strategy';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FlightHistoryComponent } from './flight-history/flight-history.component';
var APP_ROUTES = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'flight-booking',
        loadChildren: './flight-booking/flight-booking.module#FlightBookingModule',
        // component: FlightBookingComponent
        data: {
            preload: false
        }
    },
    {
        path: 'history',
        component: FlightHistoryComponent,
        outlet: 'aux'
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
export var AppRouterModule = RouterModule.forRoot(APP_ROUTES, { preloadingStrategy: CustomPreloadingStrategy });
// export let AppRouterModule = RouterModule.forRoot(APP_ROUTES, { useHash: true, enableTracing: true});
//# sourceMappingURL=app.routes.js.map