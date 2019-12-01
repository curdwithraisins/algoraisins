import { countChange } from './index';
import { expect } from 'chai';

describe('raisin_31', () => {
    it("should return a number of combinations", () => {
        let res = countChange(4, [1,2]);
        expect(res).to.eql(3);
        res = countChange(300, [5,10,20,50,100,200,500]);
        expect(res).to.eql(1022);
    });

    it("should return 0 if no variants", () => {
        let res = countChange(4, [5,10]);
        expect(res).to.eql(0);
    });
});