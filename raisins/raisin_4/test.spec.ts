import { f } from './index';
import { expect } from 'chai';

describe('raisin_4', () => {
    it('return first missed positive number in array', () => {
        let res = f([3, 4, -1, 1]);
        expect(res).to.eql(2);
        res = f([1, 2, 0]);
        expect(res).to.eql(3);
    });
});