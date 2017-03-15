import { Observable } from 'rxjs/Observable';
var CustomPreloadingStrategy = (function () {
    function CustomPreloadingStrategy() {
    }
    CustomPreloadingStrategy.prototype.preload = function (route, fn) {
        //return Observable.of(true).delay(7000).flatMap(_ => fn());
        if (route.data['preload']) {
            return fn();
        }
        return Observable.of(false);
    };
    return CustomPreloadingStrategy;
}());
export { CustomPreloadingStrategy };
//# sourceMappingURL=custom-preloading.strategy.js.map