export const distinctSubstring = (s: string, k: number) => {
    let longestSub = '';
    for (let i = 0; i < s.length; i++) {
        const t = tt(s.substring(i), k);
        if (t.length > longestSub.length) {
            longestSub = t;
        }
    }
    return longestSub;
};

const tt = (s, k): string => {
    let sub = '', hash = {};
    console.log(s);
    for (let i = 0; i < s.length; i++) {
        if (hash[s[i]]) {
            sub += s[i];
            continue;
        }
        if (!hash[s[i]] && Object.keys(hash).length < k) {
            hash[s[i]] = true;
            sub += s[i];
            continue;
        }
        return sub;
    }
    return sub;
};