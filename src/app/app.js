var angular = require('angular');

var app = angular.module('razzi', [require('angular-ui-router')]);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/404');

    $stateProvider
        .state('home', {
            url: '/',
            abstract: true,
            templateUrl: 'partials/home.html'
        })
        .state('home.index', {
            url: '',
            templateUrl: 'partials/home.contact-form.html',
            controller: function($scope, $state, $http) {
                $scope.submit = function(email) {

                    $http.post('http://localhost:9090/subscribe',
                            {email:'random@email.com'})
                        .success(function(data, status, headers, config) {
                            $state.go('home.contact-form-submited');
                        })
                        .error(function(data, status, headers, config) {
                            console.log('err: ' , status);
                        });
                };
            }
        })
        .state('home.contact-form-submited', {
            url: '',
            templateUrl: 'partials/home.contact-form-submitted.html',
            controller: function($scope) {

            }
        })
        .state('404', {
            url: '/404',
            templateUrl: 'partials/404.html'
        });
});
