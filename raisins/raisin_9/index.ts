export const updateHash = (hash, q: string) => {
    for (let i = 1; i < q.length + 1; i++) {
        const slice = q.slice(0, i);
        hash[slice] = hash[slice] ? [...hash[slice], q] : [q];
    }
    return hash;
};

export const preprocess = (d: string[], hash = {}): void => d.reduce(updateHash, hash);

export const autocompleteWithPreprocess = (s: string, dic: string[]): string[] => preprocess(dic)[s];

export const autocompleteWithoutPreprocess = (s: string, dic: string[]) => dic.filter((d: string) => d.startsWith(s));
