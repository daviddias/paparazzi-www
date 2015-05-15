angular.module('razzi', [
    'ui.router',
    'razzi.welcome'
])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('razzi', {
                url: '',
                abstract: true
            })
        ;

        $urlRouterProvider.otherwise('/');
    })
    .run(function($rootScope) {
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {

            console.log('TO:', toState, toParams);
        });
    });
