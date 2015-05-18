angular.module('razzi.welcome', [
])
    .config(function($stateProvider) {
        $stateProvider
            .state('razzi.welcome', {
                url: '/',
                views: {
                    'main@': {
                        templateUrl: 'app/welcome/welcome.tmpl.html',
                        controller: 'WelcomeCtrl as welcomeCtrl'
                    }
                }
            })
        ;
    })
    .controller('WelcomeCtrl', function($scope, $http, $state, $stateParams, $timeout) {
      
        //var socket = io('http://localhost:3000');

        $scope.waiting = false;
        $scope.received = false;

        $scope.submit = function(url) {
            $scope.waiting = true;
            console.log(url);  

            $http.get('http://localhost:9090/user/guest')
                .success(function(data, status, headers, config) {
                    // 2. register the token on the notification service 
                    // 3. submit the url
                    // 4. wait on socket.io to tell where the image is
                })
                .error(function(data, status, headers, config) {
                    console.log('err: ' , status);
                });

        }
    });
