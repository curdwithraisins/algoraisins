import { iPAddressCombinator } from './index';
import { expect } from 'chai';

describe('raisin_24', () => {
    it('should return a list of valid IP address combinations', () => {
        const res = iPAddressCombinator('2542540123');
        expect(res).to.eql(['254.25.40.123', '254.254.0.123']);
    });

    it('should return an empty array if nothing valid', () => {
        const res = iPAddressCombinator('');
        expect(res).to.eql([]);
    });

    it('should return an empty array if string length shorter then 4', () => {
        const res = iPAddressCombinator('32');
        expect(res).to.eql([]);
    });

    it('should return only valid ip addresses', () => {
        const res = iPAddressCombinator('1234');
        expect(res).to.eql(['1.2.3.4']);
    });
});