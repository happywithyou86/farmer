(function() {
  'use strict';

  angular
    .module('app.login')
    .controller('Farmer', Farmer);

    Farmer.$inject = ['$rootScope'];

    /* @ngInject */
    function Farmer($rootScope) {
      var vm = this;

    }
}());
