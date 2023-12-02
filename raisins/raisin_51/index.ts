export const searchInsert = (nums: number[], target: number): number => {
    if (target < nums[0]) return 0;
    if (target > nums[nums.length-1]) return nums.length;
    let pointerR = 0, pointerL = nums.length;
    while (pointerR < pointerL) {
        let mid = pointerR + (pointerL - pointerR) / 2;
        if (nums[mid] == target) return mid;
        if (pointerL - pointerR == 1)
            return (target > nums[pointerR]) ? pointerL : pointerR;
        if (target < nums[mid]) {
            pointerL = mid;
        } else {
            pointerR = mid;
        }
    }
    return -1;
};
