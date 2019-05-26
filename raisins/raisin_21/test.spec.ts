import { intersec } from './index';
import { expect } from 'chai';
import { LinkedList } from '../../data-structures/LinkedList';

describe('raisin_20', () => {
    it('should return a cost of painting', () => {
        const listA = new LinkedList();
        listA.append(2).append(5).append(8).append(10);
        const listB = new LinkedList();
        listB.append(3).append(4).append(8).append(10);
        const res = intersec(listA, listB);
        expect(res.value).to.eql(8);
    });
});