export const f = (arr: number[]): number => {
    let s: boolean[] = [true];
    arr.forEach((a: number) => {
        if (a > 0) s[a] = true;
    });
    let i: number = 0;
    while (s[i]) i++;
    return i;
};