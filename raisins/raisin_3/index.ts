import Node from '../../data-structures/Node';

export const deserialize = (s: string, i: number = 1) => {
    // Method to get a part of the string with represent i-th val and right and left leafs
    const extractNode = (cur: string, index: number): any[] => {
        // First extract right because it follows after val and left
        const [all, right]: string[] = cur.split(`right${index}:`);
        const [val, left]: string[] = all.split(`left${index}:`);
        return [val, right, left];
    };

    let [val, right, left] = extractNode(s, i);
    // Returns value of val[i] as val[i] should be in format 'val[i]:value;'
    const v: string = val.split(`val${i}:`)[1].slice(0,-1);

    if (right) {
        right = deserialize(right, i+1);
    }

    if (left) {
        left = deserialize(left, i+1);
    }

    // Returns new Node
    return new Node(v, left, right);
};

export const serialize = (node: Node, i: number = 1): string => {
    let s: string = `val${i}:${node.val};`;

    if (node.left) {
        const l: string = serialize(node.left, i+1);
        s = s + `left${i}:${l}`;
    }

    if (node.right) {
        const r: string = serialize(node.right, i+1);
        s = s + `right${i}:${r}`;
    }

    return s;
};
