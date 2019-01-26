export const decoder = (s: string, memCache: any = {}): number => {
    if (s.length === 0) {
        return 1;
    }
    if (memCache[s] !== undefined) {
        return memCache[s];
    }
    if (s[0] === '0') {
        memCache[s] = 0;
        return 0;
    }
    let r: number = decoder(s.slice(1), memCache);
    if (s.length > 1 && +s.slice(0, 2) < 27) {
        r += decoder(s.slice(2), memCache);
    }
    memCache[s] = r;
    return r;
};
