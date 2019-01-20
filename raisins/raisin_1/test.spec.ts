import f from './index';
import { expect } from 'chai';

describe('raisin_1', () => {
    it('should return false if array is empty', () => {
        const res = f([], 17);
        expect(res).to.eql(false);
    });

    it('should return true if sum of two numbers in array equals k', () => {
        const res = f([10, 15, 3, 7], 17);
        expect(res).to.eql(true);
    });

    it('should return false if sum of two numbers in array doesn\'t equal k', () => {
        const res = f([10, 15, 3, 6], 17);
        expect(res).to.eql(false);
        expect(res).to.eql(false);
    });
});