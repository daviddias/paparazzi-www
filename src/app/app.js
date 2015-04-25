var angular = require('angular');

var app = angular.module('paparrazi', [require('angular-ui-router')]);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/404');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'partials/home.html'
        })
       /*
        .state('home.contact-form', {
            url: '/list',
            templateUrl: 'partials/landing.contact-form.html',
            controller: function($scope) {
                //$scope.items = ['A', 'List', 'Of', 'Items'];
            }
        })
        */
        .state('404', {
            url: '/404',
            templateUrl: 'partials/404.html'
        });
});
