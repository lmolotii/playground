Dessert.Controllers.controller('PlaceMatController',
    ['$scope',
        function($scope) {
            $scope.fork = $scope.getSilverWare(0);
            $scope.spoon = $scope.getSilverWare(1);
            $scope.knife = $scope.getSilverWare(2);
        }]);