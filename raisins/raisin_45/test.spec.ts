import { expect } from 'chai';
import { convertRomanNumber } from './index';

describe('raisin_45', () => {
    it('should return a valid Number', () => {
        let res = convertRomanNumber('III');
        expect(res).to.eql(3);
        res = convertRomanNumber("LVIII");
        expect(res).to.eql(58);
        res = convertRomanNumber("MCMXCIV");
        expect(res).to.eql(1994);
    });
});
