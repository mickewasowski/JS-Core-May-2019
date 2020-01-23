const expect = require('chai').expect;

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

describe('mathEnforcer', function(){
    describe('addFive', function(){
        it('should return undefined with string value', function(){
            let expectedResult = mathEnforcer.addFive('invalid');

            expect(expectedResult).to.equal(undefined,'Function did not return correct result!');
        });

        it('should return undefined with object value', function(){
            let expectedResult = mathEnforcer.addFive({});

            expect(expectedResult).to.equal(undefined,'Function did not return correct result!');
        });

        it('should return 10', function(){
            let expectedResult = mathEnforcer.addFive(5);

            expect(expectedResult).to.equal(10,'Function did not return correct result!');
        });

        it('should return 10.5', function(){
            let expectedResult = mathEnforcer.addFive(5.5);

            expect(expectedResult).to.equal(10.5,'Function did not return correct result!');
        });

        it('should return 2', function(){
            let expectedResult = mathEnforcer.addFive(-3);

            expect(expectedResult).to.equal(2,'Function did not return correct result!');
        });

        it('should return -2.56', function(){
            let expectedResult = mathEnforcer.addFive(-7.5654684);

            expect(expectedResult).to.be.closeTo(-2.56,0.01,'Function did not return correct result!');
        });
    });

    describe('subtractTen', function(){
        it('should return undefined with string value', function(){
            let expectedResult = mathEnforcer.subtractTen('invalid');

            expect(expectedResult).to.equal(undefined,'Function did not return correct result!');
        });

        it('should return -5', function(){
            let expectedResult = mathEnforcer.subtractTen(5);

            expect(expectedResult).to.equal(-5,'Function did not return correct result!');
        });

        it('should return -4.5', function(){
            let expectedResult = mathEnforcer.subtractTen(5.5);

            expect(expectedResult).to.equal(-4.5,'Function did not return correct result!');
        });

        it('should return -13', function(){
            let expectedResult = mathEnforcer.subtractTen(-3);

            expect(expectedResult).to.equal(-13,'Function did not return correct result!');
        });

        it('should return -17.56', function(){
            let expectedResult = mathEnforcer.subtractTen(-7.5654684);

            expect(expectedResult).to.be.closeTo(-17.56,0.01,'Function did not return correct result!');
        });
    });

    describe('sum',function(){
        it('should return undefined with string value', function(){
            let expectedResult = mathEnforcer.sum('invalid',5);

            expect(expectedResult).to.equal(undefined,'Function did not return correct result!');
        });

        it('should return undefined with string value', function(){
            let expectedResult = mathEnforcer.sum(10,'5');

            expect(expectedResult).to.equal(undefined,'Function did not return correct result!');
        });

        it('should return 10', function(){
            let expectedResult = mathEnforcer.sum(5,5);

            expect(expectedResult).to.equal(10,'Function did not return correct result!');
        });

        it('should return -10', function(){
            let expectedResult = mathEnforcer.sum(-5,-5);

            expect(expectedResult).to.equal(-10,'Function did not return correct result!');
        });

        it('should return 0', function(){
            let expectedResult = mathEnforcer.sum(5,-5);

            expect(expectedResult).to.equal(0,'Function did not return correct result!');
        });

        it('should return 10.25', function(){
            let expectedResult = mathEnforcer.sum(5.25464,5);

            expect(expectedResult).to.be.closeTo(10.25,0.01,'Function did not return correct result!');
        });

        it('should return 10.45', function(){
            let expectedResult = mathEnforcer.sum(5.25464,5.2);

            expect(expectedResult).to.be.closeTo(10.45,0.01,'Function did not return correct result!');
        });
    });
});
