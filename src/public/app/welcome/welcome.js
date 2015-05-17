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
    .controller('WelcomeCtrl', function($scope, $stateParams, $timeout) {
      
        var socket = io(http://localhost:3000);

        $scope.waiting = false;
        $scope.received = false;

        $scope.submit = function(url) {
            $scope.waiting = true;
            console.log(url);  

            //$timeout(function() {
            //    $scope.waiting = false; 
            //    $scope.received = true;
            //},1000);

            //1. get token
            //2. register in websockets with the token
            //3. submit the url 
            //4. wait for it to get the image back
        }
    });
