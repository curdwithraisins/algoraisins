import Node from '../../data-structures/Node';

export const findClosedNode = (tree: Node, target: number): number => {
    let n = +tree.val;
    if (tree.val <= target && tree.right !== null) {
        n = findClosedNode(tree.right, target);
    } else if (tree.val > target && tree.left !== null) {
        n = findClosedNode(tree.left, target);
    }
    return Math.abs(n - target) <= Math.abs(+tree.val - target) ? n : +tree.val;
};
