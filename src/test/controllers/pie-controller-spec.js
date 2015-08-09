/**
 * Created by Leonid on 8/9/2015.
 */
describe('Pie-controller', function () {
    var $rootscope,
        $scope,
        controller;

    beforeEach(function () {
        module('pie');
        inject(function($injector){
            $rootscope = $injector.get('$rootScope');
            $scope = $rootscope.$new();
            controller=$injector.get('$controller')("PieController",{$scope: $scope})
        });
    });

    describe('Initialization', function () {
        it('It should initialize slices to 8.', function () {
            expect($scope.slices).toEqual(8);
        });
    });

    describe('Action handlers', function () {

        describe('Slice eating function', function () {
            it('It should decrease slices to 7.', function () {
                $scope.eatSlice();
                expect($scope.slices).toEqual(7);
            });
        });

        describe("Zero balance of slices", function () {
            it('It shouldn\'t reduce 0.', function () {
                $scope.slices=0;
                $scope.eatSlice();
                expect($scope.slices).toEqual(0);
            });
        });

    });
});