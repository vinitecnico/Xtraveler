'use strict';
angular
    .module('tw4')
    .controller('travelerController', TravelerController);

TravelerController.$inject = ['travelerfactory'];

function TravelerController(travelerfactory) {
    var vm = this;
    vm.title = 'Xtraveler';
    vm.init = init;
    vm.result = travelerfactory.result;
    vm.btn_getSearch = btn_getSearch;
    vm.travel = {
        currency: 'BRL'
    };

    function init() {        
    }

    function btn_getSearch(travel) {
        travelerfactory.getSearch(travel);
    }
}