angular.module('razzi.menu.home.form', [])

    .config(function ($stateProvider) {
        $stateProvider
            .state('razzi.menu.home.form', {
                url: '/',
                views: {
                }
            })
        ;
    })
    .controller('FormCtrl', function ($stateParams) {
        console.log('SPEAKING FROM FORM CONTROLLER');
    });
