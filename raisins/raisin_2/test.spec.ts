import { divF, subF } from './index';
import { expect } from 'chai';

describe('raisin_2', () => {
    it('should return an array where each number is the product of all the numbers in the original array except the one at i (with division)', () => {
        let res = divF([1, 2, 3, 4, 5]);
        expect(res).to.eql([120, 60, 40, 30, 24]);
        res = divF([3, 2, 1]);
        expect(res).to.eql([2, 3, 6]);
    });

    it('should return an array where each number is the product of all the numbers in the original array except the one at i (with subtract)', () => {
        let res = subF([1, 2, 3, 4, 5]);
        expect(res).to.eql([120, 60, 40, 30, 24]);
        res = subF([3, 2, 1]);
        expect(res).to.eql([2, 3, 6]);
    });
});