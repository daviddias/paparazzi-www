angular.module('404', [])

    .config(function ($stateProvider) {
        $stateProvider
            .state('404', {
                url: '/404',
                views: {
                    'menu@': {
                        controller: 'MenuCtrl as menuCtrl',
                        templateUrl: 'app/menu/menu.tmpl.html'
                    },
                    'main@': {
                        controller: 'NotFoundCtrl as notFoundCtrl', 
                        templateUrl: 'app/404/404.tmpl.html'
                    }
                }
            });
    
    })
    .controller('NotFoundCtrl', function NotFoundCtrl(){
        console.log('Not Found');
    });
