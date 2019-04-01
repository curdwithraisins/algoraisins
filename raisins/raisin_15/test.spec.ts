import { subarrayMax } from './index';
import { expect } from 'chai';

describe('raisin_15', () => {
    it('should return an array of max numbers in subarray', () => {
        const arr = subarrayMax([2,3,2,5,8,1,6,2,3,6], 3);
        expect(arr).to.eql([3,5,8,8,8,6,6,6]);
    })
});