import { expect } from 'chai';
import { findClosedNode } from './index';
import Node from '../../data-structures/Node';

describe('raisin_41', () => {
    it('should find two values which sum up to the target value', () => {
        const tree = new Node(10, new Node(5, new Node(2), new Node(5)), new Node(15, new Node(13, null, new Node(14)), new Node(22)));
        const res = findClosedNode(tree, 12);
        expect(res).to.eql(13);
    });
});
