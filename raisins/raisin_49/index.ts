import Node from '../../data-structures/Node';

export const rangeSumBST = (root: Node, low: number, high: number): number => {
    if (root == null) return 0;
    let left = rangeSumBST(root.left, low, high), right = rangeSumBST(root.right, low, high);
    let current = (root.val >= low && root.val <= high) ? root.val : 0;
    return +current + left + right;
};