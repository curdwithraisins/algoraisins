export const maxSubArray = (numbers: number[]): number => {
    let current = numbers[0], max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        current = Math.max(numbers[i], current + numbers[i]);
        max = Math.max(current, max);
    }
    return max;
};