import { ICostIndex, paintCost, minTwo, calculateCost } from './index';
import { expect } from 'chai';

describe('raisin_20', () => {
    it('should return a cost of painting', () => {
        const costMatrix = [
            [1, 3, 8, 2],
            [2, 9, 8, 4],
            [3, 4, 5, 3],
            [4, 6, 12, 7]
        ];
        const res = paintCost(costMatrix);
        expect(res).to.eql(11);
    });

    describe('minTwo', () => {
        it('should return an array of two min values with index', () => {
            const costMatrix = [1, 3, 8, 2];
            const res = minTwo(costMatrix);
            expect(res).to.eql([{v: 1, i: 0}, {v: 2, i: 3}]);
        });
    });

    describe('calculateCost', () => {
        it('should calculate cost of values', () => {
            const startCost: ICostIndex[] = [{v: 1, i: 0}, {v: 2, i: 3}];
            const secondCost: [ICostIndex, ICostIndex] = [{v: 3, i: 3}, {v: 5, i: 2}];
            const res = calculateCost(startCost, secondCost);
            expect(res).to.eql([{v: 4, i: 3}, {v: 7, i: 2}]);
        });
    });
});