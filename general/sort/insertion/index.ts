export const insertionSort = (arr: number[]): number[] => {
    return arr.reduce((acc: number[], curr: number) => {
        acc.push(curr);
        let i = acc.length - 1;
        while (i-- >=0 && acc[i] > curr) {
            acc[i + 1] = acc[i];
        }
        acc[i + 1] = curr;
        return acc;
    }, []);
};
