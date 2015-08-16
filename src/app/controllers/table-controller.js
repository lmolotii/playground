Dessert.Controllers.controller('TableController',
    ['$scope','DessertService',
        function($scope, dessertService) {
            $scope.setTable = function() {
                dessertService.getRemotePies(function(result) {
                    $scope.pies = result;
                });
            };

            $scope.pies = null;

}]);