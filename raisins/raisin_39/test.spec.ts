import { getBinaryForest } from './index';
import { expect } from 'chai';

describe('raisin_38', () => {
    describe('should return a list of all trees', () => {
        it('return correct number of trees', () => {
            const res = getBinaryForest(3);
            expect(res.length).to.eql(5);
        });
    });
});