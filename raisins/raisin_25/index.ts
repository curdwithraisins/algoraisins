export const largestNum = (nums: number[]): number => {
    for (let i = 0; i < nums.length-1; i++) {
        console.log(i, nums)
        if (+`${nums[i]}${nums[i+1]}` < +`${nums[i+1]}${nums[i]}`) {
            [nums[i], nums[i+1]] = [nums[i+1], nums[i]];
            if (i != 0 ) {
                i=-1;
            }
        }
    }
    return +nums.join('');
};

