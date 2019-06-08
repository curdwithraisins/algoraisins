import { distinctArray } from './index';
import { expect } from 'chai';

describe('raisin_22', () => {
    it('should return a subarray of distinct values', () => {
        const res = distinctArray([5, 1, 3, 5, 2, 3, 4, 1]);
        expect(res).to.eql([5, 2, 3, 4, 1]);
    });
});