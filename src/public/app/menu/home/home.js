angular.module('razzi.menu.home', [
    'razzi.menu.home.form'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('razzi.menu.home', {
                url: '/',
                views: {
                    'homeplaceholder@': {
                        templateUrl: 'app/menu/home/form/form.tmpl.html',
                        controller: 'FormCtrl as formCtrl'
                    }
                }
            })
        ;
    })
    .controller('HomeCtrl', function($stateParams) {
        console.log('SPEAKING FROM HOME CONTROLLER')    
    });
