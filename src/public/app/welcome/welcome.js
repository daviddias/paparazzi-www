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
    .controller('WelcomeCtrl', function($stateParams) {
        console.log('SPEAKING FROM Welcome CONTROLLER')    
    });
