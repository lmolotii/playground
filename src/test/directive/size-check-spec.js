describe('sizeCheck', function () {
    var $rootScope,
        $scope,
        el,
        $body = $('body'),
        simpleHtml = '<input ng-model="amountForTrade" size-check="10">';

    beforeEach(function () {
        module.apply(this, Dessert.Dependencies);
        inject(function ($injector, $compile) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            el = $compile(angular.element(simpleHtml))($scope);
        });

        $body.append(el);
        $rootScope.$digest();
    });

    afterEach(function () {
        $body.empty();
    });

    it('It should add an invalid class for when the value is greater than 10.', function () {
        el.val("11");
        el.trigger("input");
        $scope.$digest();
        expect(el.hasClass('ng-invalid')).toBeTruthy();
        expect(el.hasClass('ng-invalid-too-big')).toBeTruthy();
    });

    it('It should add a valid class for when the value is less than 10.', function () {
        el.val("9");
        el.trigger("input");
        $scope.$digest();
        expect(el.hasClass('ng-valid')).toBeTruthy();
        expect(el.hasClass('ng-valid-too-big')).toBeTruthy();
    });

    it('It should be valid for a non number.', function () {
        el.val("Mike");
        el.trigger("input");
        $scope.$digest();
        expect(el.hasClass('ng-valid')).toBeTruthy();
        expect(el.hasClass('ng-valid-too-big')).toBeTruthy();
    });
});