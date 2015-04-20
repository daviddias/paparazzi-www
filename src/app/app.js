var angular = require('angular');

var app = angular.module('paparrazi', [require('angular-ui-router')]);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/404');

    $stateProvider
        .state('landing', {
            url: '/',
            templateUrl: 'partials/landing.html'
        })
        .state('landing.contact-form', {
            // url: '/list',
            templateUrl: 'partials/landing.contact-form.html',
            controller: function($scope) {
                //$scope.items = ['A', 'List', 'Of', 'Items'];
            }
        })
        .state('404', {
            url: '/404',
            templateUrl: 'partials/404.html',
            controller: function($scope) {
                //
            }
        });
});
