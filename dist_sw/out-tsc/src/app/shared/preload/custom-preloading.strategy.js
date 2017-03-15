"use strict";
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
exports.CustomPreloadingStrategy = CustomPreloadingStrategy;
//# sourceMappingURL=custom-preloading.strategy.js.map