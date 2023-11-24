import { expect } from 'chai';
import { maxSubArray } from './index';

describe('raisin_46', () => {
    it('should return a valid Number', () => {
        let res = maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);
        expect(res).to.eql(6);
        res = maxSubArray([1]);
        expect(res).to.eql(1);
        res = maxSubArray([5,4,-1,7,8]);
        expect(res).to.eql(23);
    });
});
