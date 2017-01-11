'use strict';

angular
    .module('tw4')
    .service('travelerService', TravelerService);

TravelerService.$inject = ['$filter', '$http'];

function TravelerService($filter, $http) {
    this.getSearch = getSearch;

    var config = {
        headers: {
            'X-Mashape-Key': 'w5nEKt8V0Qmsh1aN6wuExH3rdYeqp1E1Op5jsnYmilSvBJ94Jq',
        }
    };

    function getSearch(travel) {
        return $http({
            url: 'https://rome2rio12.p.mashape.com/Search',
            method: "GET",
            params: travel,
            headers: {
            'X-Mashape-Key': 'w5nEKt8V0Qmsh1aN6wuExH3rdYeqp1E1Op5jsnYmilSvBJ94Jq',
        }
        });
    }
}