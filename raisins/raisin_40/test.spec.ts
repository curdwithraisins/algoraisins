import { twoNumberSum1, twoNumberSum2, twoNumberSum3 } from './index';
import { expect } from 'chai';

describe('raisin_40', () => {
    describe('twoNumberSum1', () => {
        it('should find two values which sum up to the target value', () => {
            const res = twoNumberSum1([1, 10, 3, 2, 5, 6], 15);
            expect(res).to.eql([10, 5]);
        });

        it('should return empty array if no values sum up to the target value', () => {
            const res = twoNumberSum1([1, 1, 3, 2, 5, 6], 15);
            expect(res).to.eql([]);
        });
    });

    describe('twoNumberSum2', () => {
        it('should find two values which sum up to the target value', () => {
            const res = twoNumberSum2([1, 10, 3, 2, 5, 6], 15);
            expect(res).to.eql([10, 5]);
        });

        it('should return empty array if no values sum up to the target value', () => {
            const res = twoNumberSum2([1, 1, 3, 2, 5, 6], 15);
            expect(res).to.eql([]);
        });
    });

    describe('twoNumberSum3', () => {
        it('should find two values which sum up to the target value', () => {
            const res = twoNumberSum3([1, 10, 3, 2, 5, 6], 15);
            expect(res).to.eql([5, 10]);
        });

        it('should return empty array if no values sum up to the target value', () => {
            const res = twoNumberSum3([1, 1, 3, 2, 5, 6], 15);
            expect(res).to.eql([]);
        });
    });
});
