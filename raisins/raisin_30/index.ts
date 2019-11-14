import { compact, keys, flatten } from 'lodash';

const list = [
    ['JFK', 'ATL', 150],
    ['ATL', 'SFO', 400],
    ['ORD', 'LAX', 200],
    ['LAX', 'DFW', 80],
    ['JFK', 'HKG', 800],
    ['ATL', 'ORD', 90],
    ['ATL', 'LAX', 10],
    ['JFK', 'LAX', 500],
];

let table = {};
list.forEach((row) => {
    if (!table[row[0]]) {
        table[row[0]] = {};
    }
    table[row[0]][row[1]] = row[2];
});

export const costExplorer = (from: string, to: string, length: number): {path: string[], cost: number}[] => {
    const res = recursion(from, to, 0, length);
    console.log(res);
    return res.reduce((min, cur) => cur.cost < min.cost ? cur : min, res[0]);
};

const recursion = (from: string, to: string, cost = 0, length) => {
    return flatten(compact(keys(table[from]).map((key) => {
        if (!table[key]) {
            return null;
        }
        if (key == to) {
            return {path: [from, key], cost: cost + table[from][key]};
        }
        return compact(recursion(key, to, cost + table[from][key], length).map((res) =>
            res.path.length + 1 <= length
                ? {path: [from, ...res.path], cost: res.cost}
                : null));
    })));
};
