import { expect } from 'chai';
import Node from '../../data-structures/Node';
import { isBalanced } from './index';

describe('raisin_48', () => {
    it('should return a true if balanced', () => {
        let root = new Node(3, new Node(9), new Node(20, new Node(15), new Node(7)));
        let res = isBalanced(root);
        expect(res).true;
    });

    it('should return false if not balanced', () => {
        let root = new Node(3, new Node(2), new Node(2, new Node(3, new Node(4), new Node(4)), new Node(3)));
        let res = isBalanced(root);
        expect(res).false;
    });
});
