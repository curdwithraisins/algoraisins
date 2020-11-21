const checkPalindrome = (string: string, l: number , r: number): string => {
    let innerP: string = '';
    do {
        if (string[l] === string[r]) {
            innerP = string.substring(l, r+1);
        } else break;
    } while(string[--l] && string[++r]);
    return innerP;
};

export const longestPalindromicSubstring = (string: string) => {
    let palindrome = string[0] || "";

    for (let i = 1; i < string.length; i++) {
        const first = checkPalindrome(string, i-1, i+1);
        const second = checkPalindrome(string, i-1, i);
        if (first.length > palindrome.length) {
            palindrome = first;
        }
        if (second.length > palindrome.length) {
            palindrome = second;
        }
    }
    return palindrome
};