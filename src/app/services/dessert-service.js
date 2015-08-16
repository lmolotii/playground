Dessert.Services.factory('DessertService',
    ['nsServiceExtensions',
        function(nsServiceExtensions){
            return {
                getRemotePies: function() {
                    return nsServiceExtensions.request({
                        url: 'remote/pies',
                        method: 'GET'
                    });
                }
            };
        }]);