export const mergeSort = (arr: number[]): number[] => {
    let sortedArray = [...arr];
    if (sortedArray.length > 1) {
        let L = mergeSort(sortedArray.splice(0, (sortedArray.length + (sortedArray.length % 2)) / 2));
        let R = mergeSort(sortedArray);

        let i = 0, j = 0, acc = [];
        while (L.length && R.length) {
            if (L[i] > R[j]) {
                acc.push(...R.splice(0, 1));
            } else {
                acc.push(...L.splice(0, 1));
            }
        }
        sortedArray = [...acc, ...L, ...R];
    }
    return sortedArray;
};
