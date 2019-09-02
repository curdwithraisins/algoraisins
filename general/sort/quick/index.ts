export const quickSort = (arr: number[]) => {
    if (!arr.length || arr.length == 1) return arr;
    const i = partition(arr);
    return [...quickSort(arr.slice(0, i)), arr[i], ...quickSort(arr.slice(i + 1, arr.length))];
};

const partition = (arr: number[]): number => {
    let piv = arr.length - 1, i = 0;
    for (let j = i; j < arr.length; j++) {
        if (arr[j] < arr[piv]) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }
    [arr[i], arr[piv]] = [arr[piv], arr[i]];
    return i;
};
