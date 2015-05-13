var angular = require('angular');
var states = require('./states');

var app = angular.module('razzi', [require('angular-ui-router')]);

app.config(function($stateProvider, $urlRouterProvider) {
    states.notFound($stateProvider, $urlRouterProvider);
    states.home($stateProvider, $urlRouterProvider);
});
