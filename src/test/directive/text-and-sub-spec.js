describe('nsTextAndSub', function () {
    var $rootScope,
        $scope,
        el,
        $el,
        $body = $('body'),
        simpleHtml = '<ns-text-and-sub text="{{scopeText}}" sub="{{scopeSub}}"></ns-text-and-sub>',
        $compile;

    beforeEach(function () {
        module('templates','directives');
        inject(function ($injector) {
            $rootScope = $injector.get('$rootScope');
            $compile = $injector.get('$compile');
            $scope = $rootScope.$new();
            el = $compile(angular.element(simpleHtml))($scope);
        });
        $body.append(el);
        $rootScope.$digest();
        $el = $('.text-and-sub');
    });

    afterEach(function() {
        $body.empty();
    });
    it('It should render the directive out in the dom.', function () {
        expect($el.length).toEqual(1);
    });

    it('It should render out the text when given in scope.', function () {
        var innerText = "John";
        $scope.scopeText = innerText;
        $scope.$digest();
        expect($el.find('h3').text()).toEqual(innerText);

    });

    it('It should render out the sub when given in scope.', function () {
        var innerText = "TV";
        $scope.scopeSub = innerText;
        $scope.$digest();
        expect($el.find('h5').text()).toEqual(innerText);
    });

    it('It should hide the sub text when it is not defined.', function () {
        expect($el.find('h5').is(':visible')).toBeFalsy();
    });

    it('It should show the sub text when it is defined.', function () {
        var innerText = "TV";
        $scope.scopeSub = innerText;
        $scope.$digest();
        expect($el.find('h5').is(':visible')).toBeTruthy();
    });
});