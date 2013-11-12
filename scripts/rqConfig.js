require.config({
    baseUrl: 'scripts',
    paths: {
        'angular': 'libs/angular.min'
    },
    shim: {
        'angular': {
            exports: 'angular'
        }
    }
});

require(['angular', 'app'], function(angular, app) {
    angular.bootstrap(document, [app.name]);
});
