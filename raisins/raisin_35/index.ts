export const getLargestMod = (array: number[]) => {
    const arrs = [];
    array.sort((a, b) => a - b).forEach((v: number) => {
        let exist = false;
        arrs.forEach((arr: number[]) => {
            if (!(v % arr[arr.length - 1])) {
                arr.push(v);
                exist = true;
            }
        });
        if (!exist) {
            arrs.push([v]);
        }
    });
    return arrs.sort((a, b) => b.length - a.length)[0];
};