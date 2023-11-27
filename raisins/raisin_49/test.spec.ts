import { expect } from 'chai';
import Node from '../../data-structures/Node';
import { rangeSumBST } from './index';

describe('raisin_49', () => {
    it('should return a true if balanced', () => {
        let root = new Node(10, new Node(5, new Node(3), new Node(7)), new Node(15, null, new Node(18)));
        let res = rangeSumBST(root, 7, 15);
        expect(res).to.eq(32);
    });

    it('should return false if not balanced', () => {
        let root = new Node(3, new Node(2), new Node(2, new Node(3, new Node(4), new Node(4)), new Node(3)));
        let res = rangeSumBST(root, 1, 2);
        expect(res).to.eq(4);
    });
});
