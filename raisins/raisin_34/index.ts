import { keys } from 'lodash';

export const findTwoLineTime = (array: number[]) => {
    let obj = {};
    array.forEach((v) => obj[v] ? delete obj[v] : obj[v] = 1);
    return keys(obj).map(Number);
};

export const findTwoConstSpace = (array: number[]) => {
    return array.sort().reduce((acc, v) => {
        acc[acc.length - 1] == v ? acc.pop() : acc.push(v);
        return acc;
    }, []);
};

export const findTwo = (array: number[]) => {
    const xor = array.reduce((acc, x) => acc ^ x, 0);
    const rightmost = xor & ~(xor - 1);
    return array.reduce((acc, v) => {
        (v & rightmost) ? acc[0] = acc[0] ^ v : acc[1] = acc[1] ^ v;
        return acc;
    }, [0, 0]);
};