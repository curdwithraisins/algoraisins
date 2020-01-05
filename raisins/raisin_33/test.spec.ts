import { removeNode } from './index';
import { expect } from 'chai';
import { LinkedList } from '../../data-structures/LinkedList';

describe('raisin_33', () => {
    it("should remove node from the middle of the list", () => {
        const list = new LinkedList().append(1).append(2).append(3).append(4);
        let res = removeNode(list, 2);
        expect(res).to.eql(new LinkedList().append(1).append(3).append(4));
    });

    it("should remove node from the beginning of the list", () => {
        const list = new LinkedList().append(1).append(2).append(3).append(4);
        let res = removeNode(list, 4);
        expect(res).to.eql(new LinkedList().append(1).append(2).append(3));
    });

    it("should remove node from the end of the list", () => {
        const list = new LinkedList().append(1).append(2).append(3).append(4);
        let res = removeNode(list, 1);
        expect(res).to.eql(new LinkedList().append(2).append(3).append(4));
    });
});