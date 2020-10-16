export const binarySearch = (array, target) => {
    let l = 0, r = array.length, m = 0;
    do {
        m = Math.floor((l + r) / 2);
        if (array[m] === target) {
            return m;
        }
        if (array[m] > target) {
            r = m - 1;
        } else {
            l = m + 1;
        }
    } while(r >= l);
    return -1;
}
