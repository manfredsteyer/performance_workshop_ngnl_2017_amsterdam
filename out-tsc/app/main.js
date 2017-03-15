import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import runtime from 'serviceworker-webpack-plugin/lib/runtime';
if ('serviceWorker' in navigator) {
    var registration = runtime.register();
}
console.info('environment.production', environment.production);
if (environment.production) {
    enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=main.js.map