import Node from '../../data-structures/Node';

export const secondLargestNode = (tree: Node) => {
    let n = tree;
    if (!n || !n.right) return null;
    while (n.right.right !== null) {
        n = n.right;
    }
    return n;
};