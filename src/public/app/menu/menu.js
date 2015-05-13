angular.module('razzi.menu', [
  'razzi.menu.home',
  'razzi.menu.home.form'
])

    .config(function($stateProvider) {
        $stateProvider
            .state('razzi.menu', {
                url: '/',
                views: {
                    'menu@': {
                        controller: 'MenuCtrl as menuCtrl',
                        templateUrl: 'app/menu/menu.tmpl.html'
                    },
                    'main@': {
                        controller: 'HomeCtrl as homeCrtl', 
                        templateUrl: 'app/menu/home/home.tmpl.html'
                    }
                }
            });
    
    })
    .controller('MenuCtrl', function MenuCtrl() {
        console.log('wohoo');
    });
