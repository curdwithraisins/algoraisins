import { secondLargestNode } from './index';
import Node from '../../data-structures/Node';
import { expect } from 'chai';

describe('raisin_36', () => {
    describe('return a second largest node', () => {
        it("should return a second largest node", () => {
            const scondLargest = new Node(29, new Node(27), new Node(31));
            const tree = new Node(25, new Node(10, new Node(5), new Node(12)), scondLargest);
            const res = secondLargestNode(tree);
            expect(res).to.eql(scondLargest);
        });

        it("should return tree if there is only two leaves", () => {
            const tree = new Node(25, new Node(10), new Node(29));
            const res = secondLargestNode(tree);
            expect(res).to.eql(tree);
        });
    });

    describe('should return null', () => {
        it("should return null if tree is null", () => {
            const res = secondLargestNode(null);
            expect(res).to.eql(null);
        });

        it("should return null if tree is one Node", () => {
            const tree = new Node(25);
            const res = secondLargestNode(tree);
            expect(res).to.eql(null);
        });
    });
});