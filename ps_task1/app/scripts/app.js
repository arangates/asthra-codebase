'use strict';

var angularApp = angular.module('psTest', ['ui.bootstrap', '$strap.directives']);

angularApp

.config(function ($routeProvider) {

    $routeProvider
        .when('/forms/create', {
            templateUrl: 'views/create.html',
            controller: 'CreateCtrl'
        })
        .otherwise({
            redirectTo: '/forms/create'
        });

})

.run(['$rootScope',  function() {}]);


