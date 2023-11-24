export const longestCommonPrefix = (strings: string[]): string => {
    let string = "", i = 0, char = strings[0][0];
    while (!!char) {
        if (strings.every(s => s[i] == char)) {
            string += char;
            i++;
            char = strings[0][i];
        } else return string;
    }
    return string;
};