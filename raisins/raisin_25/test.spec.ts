import { largestNum } from './index';
import { expect } from 'chai';

describe('raisin_25', () => {
    it('should create a largest number', () => {
        const res = largestNum([10, 7, 76, 415]);
        expect(res).to.eql(77641510);
    });
});