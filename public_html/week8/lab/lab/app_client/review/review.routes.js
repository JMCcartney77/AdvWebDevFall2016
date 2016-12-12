 (function() {

    'use strict'; 
    angular
        .module('app.employee')
        .config(config);
  
    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
      $routeProvider.
          when('/', {
              templateUrl: '/employee/employee-home.view.html',
              controller: 'EmployeeHomeController',
              controllerAs: 'vm'
          }).
                  
          otherwise({
            redirectTo: '/'
          });
    }

})();

/* To be done in next steps
         
          when('/add', {
              templateUrl: '/review/review-form.view.html',
              controller: 'ReviewCreateController',
              controllerAs: 'vm'
          }).
          when('/update/:id', {
              templateUrl: '/review/review-form.view.html',
              controller: 'ReviewUpdateController',
              controllerAs: 'vm'
          }).*/