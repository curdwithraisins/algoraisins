interface Dictionary {
    [k: string]: string[]
}

export const originalSentence = (str: string, set: string[]) => {
    return getSentence(str, prepareDictionary(set));
};

const getSentence = (origin: string, dic: Dictionary): string[][] => {
    if (origin && dic[origin[0]]) {
        return dic[origin[0]].reduce((acc: string[][], word: string) => {
            if (word == origin.slice(0, word.length)) {
                const arr = getSentence(origin.slice(word.length), dic);
                if (arr.length) {
                    arr.forEach((a: string[]) => {
                        acc.push([word, ...a]);
                    });
                } else acc.push([word]);
            }
            return acc;
        }, []);
    }
    return [];
};

const prepareDictionary = (set: string[]): Dictionary => {
    const distionary: Dictionary = {};
    set.forEach((word: string) => {
        const letter = word[0];
        if (distionary[letter]) {
            distionary[letter].push(word);
        } else {
            distionary[letter] = [word];
        }
    });
    return distionary;
};