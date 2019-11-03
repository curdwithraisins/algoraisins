import { isToeplitzMatrix } from './index';
import { expect } from 'chai';

describe('raisin_28', () => {
    it("should return true if matrix is a Toeplitz Matrix", () => {
        let res = isToeplitzMatrix([[1,2,3,4,8], [5,1,2,3,4], [4,5,1,2,3], [7,4,5,1,2]]);
        expect(res).to.eql(true);
    });

    it("should return false if matrix isn't a Toeplitz Matrix", () => {
        let res = isToeplitzMatrix([[1,2,3,4,8], [5,1,9,3,4], [4,5,1,2,3], [7,4,5,1,2]]);
        expect(res).to.eql(false);
    });
});