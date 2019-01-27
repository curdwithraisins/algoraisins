export default class Node {
    public val: string | number;
    public left: Node;
    public right: Node;

    constructor(val: string | number, left?: Node, right?: Node) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}