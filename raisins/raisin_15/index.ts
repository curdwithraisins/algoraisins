import { Dequeue } from '../../data-structures/Dequeue';

export const subarrayMax = (array: number[], k: number): number[]=> {
    const subArray: Dequeue = new Dequeue();
    for (let i = 0; i < k; i++) {
        while (array[i] >= array[subArray.back]) {
            subArray.popBack();
        }
        subArray.pushBack(i);
    }
    for (let i = k; i <= array.length; i++) {
        array[i - k] = array[subArray.front];
        while (subArray.front <= i - k) {
            subArray.popFront();
        }
        while (array[i] >= array[subArray.back]) {
            subArray.popBack();
        }
        subArray.pushBack(i);
    }
    return array.slice(0, array.length - k + 1);
};