import {
    fibonacci,
    simplifiedFibonacci,
    staircase,
    staircaseWithCache,
} from './index';
import { expect } from 'chai';

describe('raisin_10', () => {
    describe('fibonacci', () => {
        it('should returns a number of unique ways to climb the staircase with 1 or 2 steps', () => {
            const res = fibonacci(4);
            expect(res).to.eql(5);
        });

        it('fibonacci and simplifiedFibonacci should be equal', () => {
            const f1 = fibonacci(5);
            const f2 = simplifiedFibonacci(5);
            expect(f1).to.eql(f2);
        });
    });

    describe('staircase', () => {
        it('staircase should returns a number of unique ways to climb the staircase', () => {
            const res = staircase(4, [1, 2]);
            expect(res).to.eql(5);
        });

        it('staircaseWithCache should returns a number of unique ways to climb the staircase', () => {
            const res = staircase(4, [1, 3, 5]);
            expect(res).to.eql(3);
        });


        it('staircase should equal staircaseWithCache', () => {
            const res1 = staircase(4, [1, 2]);
            const res2 = staircaseWithCache(4, [1, 2]);
            expect(res1).to.eql(res2);
        });
    });
});