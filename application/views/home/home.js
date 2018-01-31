'use strict';

app.controller('homeCtrl', ['$rootScope', '$scope', 'logService', 'RESTService', '$state', '$stateParams', function($rootScope, $scope, logService, RESTService, $state, $stateParams) {
    
    $scope.ismaele = "ismaele";
    
    logService.info("Ismaele online");
    
}]);