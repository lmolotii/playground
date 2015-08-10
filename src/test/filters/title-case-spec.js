/**
 * Created by Leonid on 8/10/2015.
 */
describe('titleCase', function () {
    var $filter,
        filter;

    beforeEach(function () {
        module('filters');
        inject(function ($injector) {
            $filter = $injector.get('$filter');
            filter = $filter('titleCase');
        });
    });

    it('It should return undefined if undefined.', function () {
        expect(filter(undefined)).toBeUndefined();
    });

    it('It should return null if null', function () {
        expect(filter(null)).toBeNull();
    });

    it('It should return blank if blank.', function () {
        expect(filter("")).toEqual("");
    });

    it('It should change casting of lower case word.', function () {
        expect(filter("john kofman")).toEqual("John Kofman");
    });

    it('It should change casting of upper case word.', function () {
        expect(filter("JOHN KOFMAN")).toEqual("John Kofman");
    });

    it('It should change casting of random word.', function () {
        expect(filter("jOhN kOfMaN")).toEqual("John Kofman");
    });

});