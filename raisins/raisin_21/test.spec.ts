import { intersec } from './index';
import { expect } from 'chai';
import List from '../../data-structures/LinkedList';

describe('raisin_20', () => {
    it('should return a cost of painting', () => {
        const listA = new List(1);
        listA.add(5).add(8).add(10);
        const listB = new List(3);
        listB.add(4).add(8).add(10);
        const res = intersec(listA, listB);
        expect(res.current).to.eql(8);
    });
});