import { flatten } from 'lodash';
import Node from '../../data-structures/Node';

export const getBinaryForest = (n: number, k: number = 1) => {
    if (k > n) return [null];
    const list = [];
    for (let i = k; i <= n; i++) {
        const root = new Node(i);
        const leftList = getBinaryForest(i - 1, k);
        const rightList = getBinaryForest(n, i + 1);
        const a = flatten(leftList.map((l) => {
            root.left = l;
            return root;
        }).map((q) => {
            return rightList.map(r => {
                q.right = r;
                return q;
            });
        }));
        // console.log(a);
        list.push(a);
    }
    return list;
};

const connect = () => {

};

console.log(flatten(getBinaryForest(3)));