(function() {
   
    'use strict';
    angular
            .module('app')
            .controller('PhoneListController', PhoneListController);
    
    PhoneListController.$inject = ['PhonesService'];
    //Phone List Controller 
    function PhoneListController(PhonesService){
        var vm = this;
        
        vm.phones = [];
        
        activate();
        //get the phone, then display it
        function activate(){
            PhonesService.getPhones().then(function(response) {
                vm.phones = response;
            });
        }
        
    }
    
})();

    

    
    
    
    
    
    
    
