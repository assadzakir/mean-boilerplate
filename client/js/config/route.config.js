'use strict';
angular.module('app')
    .config(['$stateProvider', '$urlRouterProvider',
        function ( $stateProvider,  $urlRouterProvider) {
            $urlRouterProvider
                .otherwise('/filter');

            $stateProvider
                .state('filter', {
                    url: '/filter',
                    templateUrl: 'views/filter.html',
                    controller : 'filterCtrl',
                    controllerAs : 'vm'
                })

        }
    ]);

