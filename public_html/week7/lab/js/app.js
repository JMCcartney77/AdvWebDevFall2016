(function () {
    'use strict';
    angular
            .module('app', ['ngRoute'])
            .config(config);

    config.$inject = ['$routeProvider'];
                /* Our Route Provider Function */
    function config($routeProvider) {
        $routeProvider.
                when('/', { /* Provides the phone information, and puts it into the controller 'vm'*/
                    templateUrl: 'js/phone-list.template.html',
                    controller: 'PhoneListController',
                    controllerAs: 'vm'
                }).     /* Provides the phone picture, and puts it into the controller 'vm'*/
                        /*Displays both the information and the picture  */
                when('/phones/:phoneId', {
                    templateUrl: 'js/phone-detail.template.html',
                    controller: 'PhoneDetailController',
                    controllerAs: 'vm'
                }).     /*WIll bring us to the home page  */
                otherwise({
                    redirectTo: '/'
                });
    }

})();

