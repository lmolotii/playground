describe('Table controller', function () {
    var $rootScope,
        $scope,
        dessertServiceSpy,
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
            dessertServiceSpy = spyOnAngularService($injector.get('DessertService'),'getRemotePies', {name: "It is a pie"});
            controller = $injector.get('$controller')('TableController', {$scope: $scope});
        });
    });

    describe('Action handlers.', function () {
        it('It should call DessertService getRemotePies method.', function () {
            $scope.setTable();
            expect(dessertServiceSpy).toHaveBeenCalled();
        });

        it('It should set the number of pies to the result of service call.', function () {
            $scope.setTable();
            expect($scope.pies).toEqual({name: "It is a pie"});
        });
    });

    describe('Initialization', function () {
        it('It should instantiate pies to null.', function () {
            expect($scope.pies).toBeNull();
        });
    });
});