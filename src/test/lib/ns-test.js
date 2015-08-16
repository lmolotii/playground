spyOnAngularService = function(service, methodName, result) {
    return spyOn(service,methodName).and.callFake(function(fn) {
        fn(result);
    });
};

spyOnAngularServiceError = function(service, methodName, result) {
    return spyOn(service,methodName).and.callFake(function(errorFn) {
        errorFn(result);
    });
};