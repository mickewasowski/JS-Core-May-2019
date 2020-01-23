const expect = require('chai').expect;

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

describe('lookupChar', function() {
    it('Testing with invalid string', function(){
        let expectedResult = lookupChar(213, 1);

        expect(expectedResult).to.equal(undefined, 'Function did not return correct result!');
    });

    it('Testing with invalid index', function(){
        let expectedResult = lookupChar('Peter', 'invalid');

        expect(expectedResult).to.equal(undefined, 'Function did not return correct result!');
    });

    it('Testing with negative index', function(){
        let expectedResult = lookupChar('Peter', -1);

        expect(expectedResult).to.equal('Incorrect index', 'Function did not return correct result!');
    });

    it('Testing with number equal to the string length as index', function(){
        let expectedResult = lookupChar('Peter', 5);

        expect(expectedResult).to.equal('Incorrect index', 'Function did not return correct result!');
    });

    it('Testing with number greater than the string length as index', function(){
        let expectedResult = lookupChar('Peter', 6);

        expect(expectedResult).to.equal('Incorrect index', 'Function did not return correct result!');
    });

    it('Testing with double as index', function(){
        let expectedResult = lookupChar('InvalidInput', 3.14);

        expect(expectedResult).to.equal(undefined, 'Function did not return correct result!');
    });

    it('Testing with valid input', function(){
        let expectedResult = lookupChar('Peter', 3);

        expect(expectedResult).to.equal('e', 'Function did not return correct result!');
    });

    it('Testing with valid input', function(){
        let expectedResult = lookupChar('ValidInput', 6);

        expect(expectedResult).to.equal('n', 'Function did not return correct result!');
    });
});