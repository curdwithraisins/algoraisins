import { expect } from 'chai';
import { longestPalindromicSubstring } from './index';

describe('raisin_44', () => {
    it('should verify palindrome', () => {
        let res = longestPalindromicSubstring('abaxyzzyxf');
        expect(res).to.eql("xyzzyx");
        res = longestPalindromicSubstring("asdfgh");
        expect(res).to.eql("a");
        res = longestPalindromicSubstring("abccbait's highnoon");
        expect(res).to.eql("abccba");
    });

    it('should return one value for one character string', () => {
        const res = longestPalindromicSubstring("a");
        expect(res).to.eql("a");
    });

    it('should return empty result for empty string', () => {
        const res = longestPalindromicSubstring("");
        expect(res).to.eql("");
    });
});
