Dessert.Directives
    .directive('sizeCheck',
        function () {
            return {
                restrict: 'A',
                scope: false,
                require: 'ngModel',
                link: function (scope,element,attrs, ngModelController){

                    ngModelController.$parsers.push(function(val){
                        if(parseInt(val) !== NaN){
                            if(parseInt(val) > parseInt(attrs.sizeCheck)) {
                                ngModelController.$setValidity("tooBig",false);
                                return undefined;
                            } else {
                                ngModelController.$setValidity("tooBig", true);
                                return val;
                            }
                        } else {
                            return val;
                        }
                    });
                }
            }

        });