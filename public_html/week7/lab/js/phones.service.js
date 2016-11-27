(function() {
   
    'use strict';
    angular
            .module('app')
            .factory('PhonesService', PhonesService);
    
    PhonesService.$inject = ['$http', 'REQUEST'];
    
    function PhonesService($http, REQUEST){
        
        var url = REQUEST.Phones;
        var service = {
            'getPhones': getPhones,
        };
        
        return service;
        
        function getPhones(){
            return $http.get(url)
                    .then(getPhonesComplete, getPhonesFailed);
            
        function getPhonesComplete(response) {
            return response.data;
        } 
        
        function getPhonesFailed(error) {
            return [];
        }
        }
    }
    
})();

    