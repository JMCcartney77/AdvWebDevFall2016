(function() {
   
    'use strict';
    angular
            .module('app')
            .controller('PhoneListController', PhoneListController);
    
    PhoneListController.$inject = ['PhonesService'];
    
    function PhoneListController(PhonesService){
        var vm = this;
        
        vm.phones = [];
        
        activate();
        
        function activate(){
            PhonesService.getPhones().then(function(reponse) {
                vm.phones = response;
            });
        }
        
    }
    
})();

    

    
    
    
    
    
    
    
