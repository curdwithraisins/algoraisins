const f = (arr: number[], k: number): boolean => {
    const hashTable: Object = {};
    return arr.some((a: number) => {
        if (hashTable[k - a]) return true;
        hashTable[a] = true;
    })
};

export default f;