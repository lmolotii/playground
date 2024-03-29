describe('nsStateful', function () {
    var $rootScope,
        $scope,
        $compile,
        el,
        dessertLog,
        $body = $('body'),
        simpleHtml = '<button ns-stateful="red"></button>';

    beforeEach(function () {
        module.apply(this, Dessert.Dependencies);
        inject(function ($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $compile = $injector.get('$compile');
            dessertLog = $injector.get('DessertLog');
            el = $compile(angular.element(simpleHtml))($scope);
        });

        $body.append(el);
        $rootScope.$digest();
    });

    it('It should be able to toggle the class based on click', function () {
        expect(el.hasClass("red")).toBeFalsy();
        el.click();
        $scope.$digest();
        expect(el.hasClass("red")).toBeTruthy();
        el.click();
        $scope.$digest();
        expect(el.hasClass("red")).toBeFalsy();
        el.click();
        $scope.$digest();
        expect(el.hasClass("red")).toBeTruthy();
    });

    it('It should throw exception on empty class name.', function () {
        expect(function () {
            $compile(angular.element('<a ns-stateful></a>'))($scope);
        }).toThrow();

    });

    describe('Methods', function () {

        var parentScope;

        beforeEach(function(){
           parentScope = $scope.$$childHead;
        });

        describe('logNodeBehavior', function () {
            it('It should add the message to dessertLog when called with the message.', function () {
                expect(dessertLog.messages).toEqual([]);
                parentScope.logNodeBehavior("Message");
                expect(dessertLog.messages.length).toEqual(1);
                expect(dessertLog.messages).toContain("Message");
            });
        });
        
    });
});