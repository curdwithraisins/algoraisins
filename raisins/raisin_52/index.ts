export const jump = (nums: number[]): number => {
    let path = new Array(nums.length).fill(Number.MAX_VALUE);

    path[0] = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j <= nums[i]; j++) {
            if (i + j < nums.length) {
                if (path[i+j] > path[i] + 1) {
                    path[i+j] = path[i] + 1;
                }
            }
        }
    }

    return path[path.length-1];
};
