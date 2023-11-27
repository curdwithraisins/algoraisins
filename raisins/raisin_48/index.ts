import Node from '../../data-structures/Node';

const calculateDepth = (node: Node): number => {
    if (node == null) {
        return 0;
    }
    return 1 + Math.max(calculateDepth(node.left), calculateDepth(node.right));
};

export const isBalanced = (root: Node): boolean => {
        if (root == null) {
            return true;
        }
        let left = calculateDepth(root.left), right = calculateDepth(root.right);

        return (Math.abs(left - right) < 2) && isBalanced(root.left) && isBalanced(root.right);
};