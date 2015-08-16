Dessert.Directives.directive('nsStateful',
    ['DessertLog',
    function (dessertLog) {
        return  {
            restrict: 'A',
            scope: true,
            link: function(scope, element,attrs) {
                if(!attrs.nsStateful) {
                    throw "You must provide a class name in order to use the nsStateful directives";
                }

                element.bind('click', function (e) {
                    scope.$apply(function () {
                        if(!element.hasClass(attrs.nsStateful)){
                            element.addClass(attrs.nsStateful);
                        } else {
                            element.removeClass(attrs.nsStateful);
                        }
                    });
                });

                scope.logNodeBehavior = function(message) {
                    dessertLog.messages.push(message);
                };
            }
        }
}]);