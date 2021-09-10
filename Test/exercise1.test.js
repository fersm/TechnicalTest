'use strict'

const assert = require('assert');

const One = require('../Exercises/One');

describe('Largest Product', () =>{
    it('Return 30', () => {
        const input = [2, 5, 6];
        assert.equal(One.CalculateLargestProduct(input), 30);
    });

    it('Return 30 f', () => {
        const input = [2, 5, 6];
        assert.equal(One.CalculateLargestProduct(input), 30);
    });

    it('Return 1000', () => {
        const input = [-10, 3, 0, 20, 50, -32];

        assert.equal(One.CalculateLargestProduct(input), 1000);
    });

    it('Return 0', () => {
        const input = [-1000];
        assert.equal(One.CalculateLargestProduct(input), 0);
    });

    it('Return 0', () => {
        const input = [100, 3, 4, 23, 345, 64, 123, 74, 56, 88, 982];
        assert.equal(One.CalculateLargestProduct(input), 0);
    });

    it('Return -15', () => {
        const input = [85, -12, 58, -65, 7, -91, 5, -3];
        assert.equal(One.CalculateLargestProduct(input), -15);
    });

    it('Return 0', () => {
        const input = "nothing";
        assert.equal(One.CalculateLargestProduct(input), 0);
    });
});