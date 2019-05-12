import { paintCost } from './index';
import { expect } from 'chai';

describe('raisin_20', () => {
    it('should return a cost of painting', () => {
        const costMatrix = [
            [1, 3, 8, 2],
            [2, 9, 1, 4],
            [7, 2, 9, 1]
        ];
        const res = paintCost(costMatrix);
        expect(res).to.eql(0);
    });
});