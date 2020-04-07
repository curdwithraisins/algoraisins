import { isHappy } from './index';
import { expect } from 'chai';

describe('raisin_37', () => {
    describe('should return true', () => {
        it('return true for small number', () => {
            const res = isHappy(19);
            expect(res).to.eql(true);
        });

        it('return true for big number', () => {
            const res = isHappy(100000);
            expect(res).to.eql(true);
        });
    });

    describe('should return false', () => {
        it('return false for big number', () => {
            const res = isHappy(252352353);
            expect(res).to.eql(false);
        });
    });
});