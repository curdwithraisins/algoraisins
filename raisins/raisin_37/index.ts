export const isHappy = (n: number) => {
    const mem = {};
    const fn = (b: number) => {
        const a = String(b).split('').reduce((acc: number, v: string) => acc + +v * +v, 0);
        if (mem[a]) return false;
        mem[a] = true;
        return a == 1 ? true : fn(a);
    };
    return fn(n);
};