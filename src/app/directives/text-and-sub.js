Dessert.Templates.directive('nsTextAndSub',
    function () {
        return {
            restrict: 'E',
            templateUrl: 'src/app/directives/text-and-sub.html',
            scope: {
                text: "@",
                sub: "@"
            },
            link: function(scope,element,arts) {

            }

        }
});