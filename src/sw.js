var date = new Date();
console.info('Service Worker started ... ' + date.toDateString());

/*
var context = self;
context.addEventListener('install', function(event) { event.waitUntil(context.skipWaiting()) });
context.addEventListener('activate', function(event) { event.waitUntil(context.clients.claim())});

var toolbox = require('sw-toolbox');

toolbox.options.debug = true;
toolbox.router.get('/(.*)', toolbox.networkOnly, {origin: 'http://www.angular.at'});
toolbox.router.default = toolbox.cacheFirst;
*/