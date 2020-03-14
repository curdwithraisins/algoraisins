export const getLargestMod = (array: number[]) => {
    const setsArray = [];
    array.sort((a, b) => a - b).forEach((v: number) => {
        let exist = false;
        setsArray.forEach((set: number[]) => {
            if (set.every((a) => !(v % a))) {
                setsArray.push([...set, v]);
                exist = true;
            }
        });
        if (!exist) {
            setsArray.push([v]);
        }
    });
    return setsArray.sort((a, b) => b.length - a.length)[0] || [];
};