import { get } from 'lodash';

export const jumpSearch = (arr: any[], v: any, step: number = 1, pred: string = '') => {
    if (!pred && v instanceof Object) {
        return null;
    }
    let i = 0;
    do {
        if (get(arr[i], pred, arr[i]) === get(v, pred, v)) {
            return arr[i];
        }
        if (get(arr[i], pred, arr[i]) > get(v, pred, v)) {
            const subArray = arr.slice(i - step, i);
            return subArray.filter((a) => get(a, pred, a) === get(v, pred, v))[0];
        }
        i += step;
    } while (i < arr.length);
    return undefined;
};
