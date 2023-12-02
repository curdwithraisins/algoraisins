import { expect } from 'chai';
import { searchInsert } from './index';

describe('raisin_51', () => {
    it('should return a correct position', () => {
        let res = searchInsert([1,3,5,6], 5);
        expect(res).to.eql(2);
        res = searchInsert([1,3,5,6], 2);
        expect(res).to.eql(1);
    });

    it('should return -1', () => {
        let res = searchInsert([1,3,4,5,6], 10);
        expect(res).to.eql(-1);
    });
});
