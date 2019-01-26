import { decoder } from './index';
import { expect } from 'chai';

describe('raisin_6', () => {
    it('should reject un-decode', () => {
        const res = decoder('001');
        expect(res).to.eql(0);
    });

    it('should count options', () => {
        let res = decoder('111');
        expect(res).to.eql(3); // aaa, ak, ka
        res = decoder('12121');
        expect(res).to.eql(7); // ababa, auba, auu, abau, abla, laba, lla, lau
    });
});