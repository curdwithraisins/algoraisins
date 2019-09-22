import { pascalsRow, pascalsRowWithSpace } from './index';
import { expect } from 'chai';

describe('raisin_27', () => {
    it("should return Pascale's numbers for a specified row", () => {
        let res = pascalsRowWithSpace(8);
        expect(res).to.eql([1, 7, 21, 35, 35, 21, 7, 1]);
    });

    it("should return Pascale's numbers for a specified row with constant space", () => {
        let res = pascalsRow(5);
        expect(res).to.eql([1, 4, 6, 4, 1]);
    });
});