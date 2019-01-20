export const divF = (arr: number[]): number[] => {
    const result: number = arr.reduce((acc: number, a: number): number => acc * a, 1);
    return arr.map((a: number): number => result / a);
};

export const subF = (arr: number[]): number[] => {
    const result: number = arr.reduce((acc: number, a: number) => acc * a, 1);
    return arr.map((a: number): number => {
        let acc: number = 1, res: number = result;
        while (res = res - a) acc++;
        return acc;
    });
};