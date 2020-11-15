export const maxNotSubsequent = (array: number[]): number => {
    if (array.length < 2) return array[0] || null;
    if (array.length > 2) {
        array[2] = array[0] + array[2];
        for (let i = 3; i < array.length; i++) {
            const previous2 = array[i] + array[i - 2], previous3 = array[i] + array[i - 3];
            array[i] = previous2 > previous3 ? previous2 : previous3;
        }
    }
    const length = array.length;
    return array[length-1] > array[length-2] ? array[length-1] : array[length-2];
};