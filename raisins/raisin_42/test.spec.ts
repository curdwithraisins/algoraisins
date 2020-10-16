import { expect } from 'chai';
import { binarySearch } from './index';

describe('raisin_42', () => {
    it('should return an index of the target value in the sorted array', () => {
        const res = binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33);
        expect(res).to.eql(3);
    });

    it('should return a first index of the target value in the sorted array', () => {
        const res = binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 0);
        expect(res).to.eql(0);
    });

    it('should return a last index of the target value in the sorted array', () => {
        const res = binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 73);
        expect(res).to.eql(9);
    });

    it('should return a middle index of the target value in the sorted array', () => {
        const res = binarySearch([5, 23, 111], 23);
        expect(res).to.eql(1);
    });
});
