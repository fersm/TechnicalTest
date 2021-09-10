'use strict'

const assert = require('assert');

const Two = require('../Exercises/Two');

describe('Increasing Sequence', () => {
    it('Return True', () => {
        const input = [6, 23, 58];
        assert.ok(Two.CanObtainStrictlyIncreasingSequence(input));
    });

    it('Return True', () => {
        const input = [1, 3, 5, 4];
        assert.equal(Two.CanObtainStrictlyIncreasingSequence(input), true);
    });

    it('Return False', () => {
        const input = [-1, -10, 5, 2];
        assert.equal(Two.CanObtainStrictlyIncreasingSequence(input), false);
    });

    it('Return True', () => {
        const input = [1, 2, 3, 3, 8, 12];
        assert.ok(Two.CanObtainStrictlyIncreasingSequence(input));
    });

    it('Return False', () => {
        const input = [5, 15, 10, 5];
        assert.equal(Two.CanObtainStrictlyIncreasingSequence(input), false);
    });

    it('Return True', () => {
        const input = [8, 12, 9, 10];
        assert.ok(Two.CanObtainStrictlyIncreasingSequence(input));
    });

    it('Return True', () => {
        const input = [1, 2, 3, 4, 99, 5, 6];
        assert.ok(Two.CanObtainStrictlyIncreasingSequence(input));
    });

    it('Return True', () => {
        const input = [8, 9, 8, 10];
        assert.ok(Two.CanObtainStrictlyIncreasingSequence(input));
    });

    it('Return True', () => {
        const input = [9, 8, 9, 10];
        assert.ok(Two.CanObtainStrictlyIncreasingSequence(input));
    });

    it('Return True', () => {
        const input = [1, 2];
        assert.ok(Two.CanObtainStrictlyIncreasingSequence(input));
    });
});