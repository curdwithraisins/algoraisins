import Node from '../../data-structures/Node';

export const univalSubtree = (node: Node, hash: boolean[] = []): number => {
    if (!node.right && !node.left) {
        return 0;
    }
    let count = 0;
    const leafs: Node[] = [node.right, node.left];
    for (let leaf of leafs) {
        if (node.val === leaf.val) {
            hash.push(true);
            if (hash[hash.length - 1]) {
                for (let i = hash.length - 1; i >= 0; i--) {
                    if (!hash[i]) break;
                    count++;
                }
            }
        } else {
            hash.push(false);
        }
        count += univalSubtree(leaf, hash);
        hash.pop();
    }
    return count;
};