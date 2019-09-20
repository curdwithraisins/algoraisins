import { calculateSteps } from './index';
import { expect } from 'chai';

describe('raisin_26', () => {
    it('should return a number of steps', () => {
        let res = calculateSteps(3571);
        expect(res).to.eql(1);
        res = calculateSteps(1234);
        expect(res).to.eql(3);
        res = calculateSteps(6432);
        expect(res).to.eql(7);
    });
});