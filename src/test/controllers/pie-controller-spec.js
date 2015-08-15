/**
 * Created by Leonid on 8/9/2015.
 */
describe('Pie-controller', function () {
    var $rootscope,
        $scope,
        dessertManager,
        controller;

    beforeEach(function () {
        module('pie','desserts');
        inject(function($injector){
            $rootscope = $injector.get('$rootScope');
            $scope = $rootscope.$new();
            dessertManager = $injector.get('DessertManager');
            controller = $injector.get('$controller')("PieController",{$scope: $scope})
        });

        $scope.$digest();
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
                $scope.slices = 0;
                $scope.eatSlice();
                expect($scope.slices).toEqual(0);
            });
        });

        describe('toggleMode', function () {
            var modeSpy;

            beforeEach(function () {
                return modeSpy = spyOn(dessertManager, 'mode').and.returnValue('pie');
            });

            it('It should switch mode to cake whenever the mode is equal to pie.', function () {
                $scope.toggleMode();
                expect(modeSpy).toHaveBeenCalledWith("cake");
            });

            it('It should switch the mode to pie whenever the mode is anything other pie.', function () {
                modeSpy = modeSpy.and.returnValue("cupcake");
                $scope.toggleMode();
                expect(modeSpy).toHaveBeenCalledWith("pie");
            });
            
        });

    });

    describe('Listeners', function () {

        describe('pieHasBeenDepleted', function () {

            it('It should set warning to "Red alert!".', function () {
                $rootscope.$broadcast('pieHasBeenDepleted');
                $scope.$digest();
                expect($scope.warning).toEqual("Red alert!");
            });

            it('It should set slices to 0.', function () {
                $rootscope.$broadcast('pieHasBeenDepleted');
                $scope.$digest();
                expect($scope.slices).toEqual(0);
            });
        });

    });

    describe('Watchers', function () {

        describe('nutritionalValue', function () {
            it('It should set the warning that carbs have gone up, when only carbs go up.', function () {
                $scope.nutritionalValue.carbs++;
                $scope.$digest();
                expect($scope.warning).toEqual("Carbs have gone up!");
            });

            it('It should set the warning that fat have gone up, wne only carbs go up.', function () {
                $scope.nutritionalValue.fat++;
                $scope.$digest();
                expect($scope.warning).toEqual("Fat have gone up!");
            });
            it('It should set the warning that calories have gone up, when only carbs go up.', function () {
                $scope.nutritionalValue.calories++;
                $scope.$digest();
                expect($scope.warning).toEqual("Calories have gone up!");
            });

            it('It should set the warning that a combination has gone up, when only carbs go up.', function () {
                $scope.nutritionalValue.calories++;
                $scope.nutritionalValue.fat++;
                $scope.nutritionalValue.carbs++;
                $scope.$digest();
                expect($scope.warning).toEqual("Calories, Fat, Carbs have gone up!");
            });
            it('It should set the warning to null if nothing goes up.', function () {
                expect($scope.warning).toBeNull();
            });
            it('It should set the warning to null if nothing has gone up, even if some thing gone up.', function () {
                $scope.nutritionalValue.calories--;
                $scope.nutritionalValue.fat--;
                $scope.nutritionalValue.carbs--;
                $scope.$digest();
                expect($scope.warning).toBeNull();
            });
        });
    });

    describe('Initialization', function () {
        it('It should instantiate nutritionalValue to its default.', function () {
            expect($scope.nutritionalValue).toEqual({calories: 500, fat: 200, carbs: 100});
        });

        it('It should instantiate warning to null.', function () {
            expect($scope.warning).toBeNull();
        });

        it('It should initialize slices to 8.', function () {
            expect($scope.slices).toEqual(8);
        });

        it('It should instantiate $scope.lastRequestFlavor.', function () {
            expect($scope.lastRequestFlavor).toBeUndefined();
        });
    });
});