/**
 * A tree is a widely used abstract data type that simulates a hierarchical tree structure,
 * with a root value and subtrees of children with a parent node, represented as a set of linked nodes.
 */

export default class Node {
    public val: string | number;
    public left: Node;
    public right: Node;

    constructor(val: string | number, left: Node = null, right: Node = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}