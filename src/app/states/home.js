var controllers = require('./../controllers');

module.exports = function($stateProvider, $urlRouterProvider) {
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
        });

};
