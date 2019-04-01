export const maxSum = (array: number[], index: number = 0): number => {
    if (array.length <= index) {
        return 0;
    }
    if (array.length == index + 1) {
        return array[index];
    }
    let a = array[index] + Math.max(maxSum(array, index + 2), maxSum(array, index + 3));
    let b = array[index + 1] + Math.max(maxSum(array, index + 3), maxSum(array, index + 4));
    return Math.max(a,b);
};