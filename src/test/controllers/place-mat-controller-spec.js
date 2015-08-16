describe('PlaceMatController', function () {
    var $rootScope,
        $scope,
        $controller,
        controller;

    beforeEach(function () {
        module.apply(this, Dessert.Dependencies);

        //create mock for 'nsServiceExtensions'
        module(function($provide) {
            $provide.factory('nsServiceExtensions', function() {
                var request = jasmine.createSpy('request').and.callFake(function() {
                    return 15;
                });

                return {
                    request: request
                };
            });
        });

        inject(function ($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $controller = $injector.get('$controller');
            $controller('TableController', {$scope: $scope});
            $scope = $scope.$new();
            controller = $controller('PlaceMatController',{$scope: $scope});
        });
    });

    describe('Initialize', function () {
        it('It should set $scope.spoon to "Spoon" .', function () {
            expect($scope.fork).toEqual("Fork");
        });

        it('It should set $scope.spoon to "Spoon" .', function () {
            expect($scope.spoon).toEqual("Spoon");
        });

        it('It should set $scope.spoon to "Spoon" .', function () {
            expect($scope.knife).toEqual("Knife");
        });
    });
});