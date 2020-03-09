import { getLargestMod } from './index';
import { expect } from 'chai';

describe('raisin_35', () => {
    describe('get largest set of mods', () => {
        it("should return a correct set", () => {
            let res = getLargestMod([3, 5, 10, 20, 21]);
            expect(res).to.eql([5, 10, 20]);
        });
    });
});