import { expect } from 'chai';
import { jump } from './index';

describe('raisin_52', () => {
    it('should return a correct number', () => {
        let res = jump([2,3,1,1,4]);
        expect(res).to.eql(2);
        res = jump([2,3,1,1,4]);
        expect(res).to.eql(2);
    });
});
