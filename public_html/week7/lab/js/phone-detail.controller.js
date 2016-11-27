(function() {
   
    'use strict';
    angular
            .module('app')
            .controller('PhoneDetailController', PhoneDetailController);
    
    PhoneDetailController.$inject = ['$routeParams'];
    
    function PhoneDetailController($routeParams){
        var vm = this;
        
        vm.phone = {};
        var id = $routeParams.phoneId;
        
        activate();
        
        function activate(){}
        
    }
    
})();

    