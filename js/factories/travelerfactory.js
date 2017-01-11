'use strict';

angular
    .module('tw4')
    .factory('travelerfactory', Travelerfactory);

Travelerfactory.$inject = ['$q','travelerService'];

function Travelerfactory($q, travelerService) {
    var result = [];

    var factory = {
        getSearch: getSearch,
        result: result
    };

    return factory;

    
    function getSearch(travel) {
        var deferred = $q.defer();

        travelerService.getSearch(travel).then(function(context) {
            deferred.resolve(context.data);
            var count
            angular.forEach(context.data.routes, function(value) {
                value.id = result.length + 1;
                result.push(value);
                });
        });        

        return deferred.promise;
    }
    
}