export const searchInsert = (nums: number[], target: number): number => {
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
