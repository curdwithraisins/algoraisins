import { sortedList } from './index';
import { expect } from 'chai';
import { LinkedList } from '../../data-structures/LinkedList';

describe('raisin_23', () => {
    it('should return sorted list', () => {
        const list = new LinkedList();
        const resList = new LinkedList();
        list.append(4).append(5).append(8).append(1).append(9);
        resList.append(4).append(1).append(5).append(8).append(9);
        const res = sortedList(5, list);
        expect(res).to.eql(resList);
    });
});