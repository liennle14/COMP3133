
const assert = require('assert');
const { add, sub, mul, div } = require('../app/calculator');

describe('Calculator Tests', function() {
    describe('Addition', function() {
        it('add(5, 2) should return 7 PASS', function() {
            assert.equal(add(5, 2), 7); // Success test case
        });

        it('add(5, 2) should not return 8 FAIL', function() {
            assert.notEqual(add(5, 2), 8); // Fail test case
        });
    });

    describe('Subtraction', function() {
        it('sub(5, 2) should return 3 PASS', function() {
            assert.equal(sub(5, 2), 3); // Success test case
        });

        it('sub(5, 2) should not return 5 FAIL', function() {
            assert.notEqual(sub(5, 2), 5); // Fail test case
        });
    });

    describe('Multiplication', function() {
        it('mul(5, 2) should return 10 PASS', function() {
            assert.equal(mul(5, 2), 10); // Success test case
        });

        it('mul(5, 2) should not return 12 FAIL', function() {
            assert.notEqual(mul(5, 2), 12); // Fail test case
        });
    });

    describe('Division', function() {
        it('div(10, 2) should return 5 PASS', function() {
            assert.equal(div(10, 2), 5); // Success test case
        });

        it('div(10, 2) should not return 2 FAIL', function() {
            assert.notEqual(div(10, 2), 2); // Fail test case
        });
    });
});