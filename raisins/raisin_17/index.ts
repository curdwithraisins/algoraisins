const brackets = {
    '(': ')',
    '{': '}',
    '[': ']'
};

export const isBalanced = (origin: string): boolean => {
    const arr = [];
    for (let i = 0; i < origin.length; i++) {
        if (['(', '{', '['].includes(origin[i])) {
            arr.push(origin[i]);
        } else if ([')', '}', ']'].includes(origin[i])) {
             const last = arr.pop();
             if (brackets[last] !== origin[i])
                 return false;
        }
    }
    return true;
};
