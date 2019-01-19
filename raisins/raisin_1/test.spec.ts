import f from './index';
import { expect } from 'chai';

describe('test', () => {
    it('test test', () => {
        let res = f([10, 15, 3, 7], 17);
        expect(res).to.equal(true);
    })
});