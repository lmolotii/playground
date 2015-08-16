describe('DessertManager', function () {
    var values,
        factory;

    beforeEach(function () {
        module.apply(this, Dessert.Dependencies);
        inject(function ($injector) {
            values = $injector.get('DessertValues');
            factory = $injector.get('DessertManager');
        });
    });

    describe('DessertValues', function () {
        it('It should instantiated with 3 pie flavors.', function () {
            expect(values.pies.length).toEqual(3);
        });
    });
});