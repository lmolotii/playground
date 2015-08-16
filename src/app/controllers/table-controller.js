Dessert.Controllers.controller('TableController',
    ['$scope','DessertService',
        function($scope, dessertService) {
            $scope.setTable = function() {
                dessertService.getRemotePies(function(result) {
                    $scope.pies = result;
                });
            };

            $scope.getSilverWare = function(id) {
                return { '0': 'Fork', '1': 'Spoon', '2': 'Knife'}[String(id)] || 'None';
            };

            $scope.pies = null;

}]);