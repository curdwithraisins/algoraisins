import {
    estimatedP
} from './index';
import { expect } from 'chai';

describe('raisin_13', () => {
    it('estimate π should be equal to 3.14', () => {
        expect(estimatedP()).to.eql(+Math.PI.toFixed(3));
    })
});