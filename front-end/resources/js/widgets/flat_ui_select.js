(function() {
  'use strict';

  angular
    .module('app.widgets')
    .directive('selectApprovedUsers', selectApprovedUsers);

    selectApprovedUsers.$inject = ['$q', '$rootScope', 'commonsDataService', 'admin_users_service_api'];
    /*@ngInject*/
    function selectApprovedUsers($q, $rootScope, commonsDataService, admin_users_service_api) {
      var directive = {
        restrict: 'AEC',
        link    : link
      };

      return directive;

      function link(scope, element, attrs) {
        element.val(attrs.selectApprovedUsers);
        element.select2();

        element.on('change', function(e) {
          console.log(attrs.id);
          var status = element.val();
          $q.all([statusChange(attrs.id, status)])
            .then(function(respons) {

            });
        });

        function statusChange(id, status) {
          return commonsDataService
          .httpPUTRouteParams('farmer/status', id, {status: status}, admin_users_service_api)
          .then(function(response) {
            return response;
          });
        }
      }
    }
}());
