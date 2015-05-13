angular.module('razzi', [
    'ui.router',
    'razzi.menu',
    'razzi.menu.home',
    'razzi.menu.home.form',
    '404',
])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('razzi', {
                url: '',
                abstract: true
            })
        ;

        $urlRouterProvider.otherwise('/404');
    });
