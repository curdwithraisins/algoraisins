import f from './index';
import { expect } from 'chai';

describe('raisin_1', () => {
    it('should return false if array is empty', () => {
        let res = f([], 17);
        expect(res).to.equal(false);
    });

    it('should return true if sum of two numbers in array equals k', () => {
        let res = f([10, 15, 3, 7], 17);
        expect(res).to.equal(true);
    });

    it('should return false if sum of two numbers in array doesn\'t equal k', () => {
        let res = f([10, 15, 3, 6], 17);
        expect(res).to.equal(false);
    });
});