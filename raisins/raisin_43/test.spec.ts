import { expect } from 'chai';
import { maxNotSubsequent } from './index';

describe('raisin_43', () => {
    it('should return a max sum of non subsequent values', () => {
        let res = maxNotSubsequent([5, 5, 10, 100, 10, 5]);
        expect(res).to.eql(110);
        res = maxNotSubsequent([1, 2, 3]);
        expect(res).to.eql(4);
        res = maxNotSubsequent([5,  5, 10, 40, 50, 35]);
        expect(res).to.eql(80);
    });

    it('should return a max sum of non subsequent values if array has 2 values', () => {
        const res = maxNotSubsequent([1, 2]);
        expect(res).to.eql(2);
    });

    it('should return the array if array has 1 values', () => {
        const res = maxNotSubsequent([1]);
        expect(res).to.eql(1);
    });

    it('should return null if array is empty', () => {
        const res = maxNotSubsequent([]);
        expect(res).to.eql(null);
    });
});
