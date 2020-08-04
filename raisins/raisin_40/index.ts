import { flatten } from 'lodash';
import Node from '../../data-structures/Node';

export const twoNumberSum1 = (array: number[], targetSum: number): number[] => {
    return array.reduce((acc, v, k) => {
        const dif = targetSum - v;
        for (let i = k + 1; i < array.length; i++) {
            if (dif == array[i]) {
                acc.push(v);
                acc.push(array[i]);
            }
        }
        return acc;
    }, []);
};

export const twoNumberSum2 = (array, targetSum) => {
    const nums = {};
    for (const n of array) {
        const  pattern = targetSum - n;
        if (pattern in nums) {
            return [pattern, nums]
        } else {
            nums[n] = true;
        }
    }
    return [];
};

export const twoNumberSum3 = (array, targetSum) => {
    array.sort((a, b) => a - b);
    let l = 0, r = array.length - 1;
    while (l < r) {
        const sum = array[l] + array[r];
        if (sum == targetSum) {
            return [array[l], array[r]];
        }
        sum < targetSum ? l++ : r++;
    }
    return [];
};
