import { maxSum } from './index';
import { expect } from 'chai';

describe('raisin_16', () => {
    it('should return max sum of non-adjacent numbers', () => {
        let res = maxSum([2, 4, 6, 2, 5]);
        expect(res).to.eql(13);
        res = maxSum([5, 1, 1, 5]);
        expect(res).to.eql(10);
    })
});