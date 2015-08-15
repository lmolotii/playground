angular.module('pie',[]).controller('PieController',
    ['$scope',
        function($scope){

            function compareAndWarn(newVal, oldVal) {
                var props = [];
                if(newVal && oldVal) {
                    for(var key in newVal) {
                        if(newVal.hasOwnProperty(key) && (newVal[key] > oldVal[key])) {
                            props.push(key.charAt(0).toUpperCase() + key.slice(1));
                        }
                    }
                }
                return props;
            }

            $scope.$watch('nutritionalValue', function(newVal,oldVal) {
                var props = compareAndWarn(newVal,oldVal);
                if(props && props.length) {
                    $scope.warning = props.join(", ") + " have gone up!";
                } else {
                    $scope.warning = null;
                }
            },true);

            $scope.eatSlice = function () {
                if ($scope.slices) {
                    $scope.slices--;
                }
            };

            this.requestFlavor = function(flavor) {
                $scope.lastRequestFlavor = flavor;
            };

            $scope.lastRequestFlavor;
            $scope.nutritionalValue = {calories: 500, fat: 200, carbs: 100};
            $scope.warning = null;
            $scope.slices = 8;
        }]);
