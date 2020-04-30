import { sortList } from './index';
import { expect } from 'chai';
import { LinkedList } from '../../data-structures/LinkedList';

describe('raisin_39', () => {
    it('return sort licked list', () => {
        const list = new LinkedList();
        list.append(1).append(3).append(-1).append(8);
        const res = sortList(list.head);
        expect(res.value).to.eql(-1);
    });

    it('should return null if list is empty', () => {
        const res = sortList();
        expect(res).to.eql(null);
    });

    it('should return node if list has only one element', () => {
        const list = new LinkedList();
        list.append(1);
        const res = sortList(list.head);
        expect(res).to.eql(list.head);
    });
});
