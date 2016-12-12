(function () {

    'use strict';
    angular
            .module('app')
            .factory('PhonesService', PhonesService);
//Inject the HTML and REQUEST services
    PhonesService.$inject = ['$http', 'REQUEST'];

    function PhonesService($http, REQUEST) {

        var url = REQUEST.Phones;
        var service = {
            'getPhones': getPhones,
            'findPhone': findPhone
        };

        return service;
//Gets all phone info
        function getPhones() {
            return $http.get(url)
                    .then(getPhonesComplete, getPhonesFailed);

            function getPhonesComplete(response) {
                return response.data;
            }

            function getPhonesFailed(error) {
                return [];//return Error message
            }
        }
//Gets a signle phone
        function findPhone(id) {

            return getPhones()
                    .then(function (data) {
                        var results = {};

                        angular.forEach(data, function (value, key) {
                            if (!results.length) {
                                if (value.hasOwnProperty('id') && value.id === id) {
                                    results = angular.copy(value);
                                }
                            }
                        }, results);

                        return results;//displays the phone info for each phone
                    });
        }
    }

})();

    