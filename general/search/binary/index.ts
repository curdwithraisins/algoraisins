import { get } from 'lodash';

export const binarySearch = (arr: any[], v: any, pred: string = '') => {
    if (!pred && v instanceof Object) {
        return null;
    }

    if (arr.length === 1) {
        return (get(arr[0], pred, arr[0]) === get(v, pred, v)) ? arr[0] : undefined;
    }

    let middle = (arr.length + (arr.length % 2)) / 2;

    const middleComp = get(arr[middle], pred, arr[middle]);
    const currentComp = get(v, pred, v);

    if (middleComp === currentComp) {
        return arr[middle];
    }

    const partArray = (middleComp > currentComp) ? arr.slice(0, middle) : arr.slice(middle, arr.length);
    return binarySearch(partArray, v, pred);
};