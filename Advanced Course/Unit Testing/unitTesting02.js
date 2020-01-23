const expect = require("chai").expect;

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

describe('isOddOrEvenFunction',function() {
    it('Test with odd string length, should return odd.', function() {
        let expectedResult = isOddOrEven('oddString');

        expect(expectedResult).to.equal('odd', 'Function did not return odd result!');
    });

    it('Test with even string length, should return even.', function() {
        let expectedResult = isOddOrEven('evenString');

        expect(expectedResult).to.equal('even', 'Function did not return even result!');
    });

    it('Test with number as parameter, should return undefined.', function() {
        let expectedResult = isOddOrEven(100);

        expect(expectedResult).to.equal(undefined, "Function did not return the correct result!")
    });

    it('Test with empty string, should return undefined.', function(){
        let expectedResult = isOddOrEven();

        expect(expectedResult).to.equal(undefined, 'Function did not return correct result!');
    });

    it('Testing with object, should return undefined', function() {
        let expectedResult = isOddOrEven({result: 'undefinedResult'});

        expect(expectedResult).to.equal(undefined, 'Function did not return the correct result!');
    });
});