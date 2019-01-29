import { univalSubtree } from './index';
import { expect } from 'chai';
import Node from '../../data-structures/Node';

describe('raisin_7', () => {
    it('should return 0 if tree has only root', () => {
        const nodes = new Node(0);
        const res = univalSubtree(nodes);
        expect(res).to.eql(0);
    });

    it('should count the number of unival subtrees', () => {
        const nodes = new Node(0, new Node(0, new Node(1, new Node(1), new Node(1)), new Node(0)), new Node(1));
        const res = univalSubtree(nodes);
        expect(res).to.eql(5);
    });
});