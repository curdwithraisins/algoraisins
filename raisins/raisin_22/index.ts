export const distinctArray = (arr: number[]): number[] => {
    let longestSub: number[] = [], currentSub: number[] = [], hashTable = {};
    arr.forEach((v: number) => {
        if (hashTable[v]) {
            longestSub = currentSub.length > longestSub.length ? currentSub : longestSub;
            hashTable = {};
            currentSub = [v];
            return;
        }
        currentSub.push(v);
        hashTable[v] = true;
    });
    return currentSub.length > longestSub.length ? currentSub : longestSub;
};