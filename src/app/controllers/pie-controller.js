/**
 * Created by Leonid on 8/9/2015.
 */
angular.module('pie',[]).controller('PieController',
    ['$scope',
        function($scope){
            $scope.eatSlice = function () {
                if ($scope.slices) {
                    $scope.slices--;
                }
            };

            $scope.slices = 8;
        }]);
