import { cons, car, cdr } from './index';
import { expect } from 'chai';

describe('raisin_5', () => {
    it('car should return a', () => {
        const res = car(cons(3, 4));
        expect(res).to.eql(3);
    });

    it('cdr should return b', () => {
        const res = cdr(cons(3, 4));
        expect(res).to.eql(4);
    });
});