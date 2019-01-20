export default class Node {
    public val: string;
    public left: Node;
    public right: Node;

    constructor(val: string, left?: Node, right?: Node) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}