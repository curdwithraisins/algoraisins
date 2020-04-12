import { flatten } from 'lodash';
import Node from '../../data-structures/Node';

export const getBinaryForest = (n: number, k: number = 1) => {
    if (k > n) return [null];
    const list = [];
    for (let i = k; i <= n; i++) {
        const leftList = getBinaryForest(i - 1, k);
        const rightList = getBinaryForest(n, i + 1);
        list.push(...connect(i, leftList, rightList));
    }
    return list;
};

const connect = (c: number, left: any, right: any): Node[] => {
    return flatten(left.map((l) => {
        return right.map(r => {
            const root = new Node(c);
            root.left = l;
            root.right = r;
            return root;
        });
    }));
};
