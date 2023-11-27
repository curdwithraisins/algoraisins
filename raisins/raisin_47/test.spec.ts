import { expect } from 'chai';
import { longestCommonPrefix } from './index';

describe('raisin_47', () => {
    it('should return a valid string', () => {
        let res = longestCommonPrefix(["flower","flow","flight"]);
        expect(res).to.eql("fl");
    });

    it('should return an empty string', () => {
        let res = longestCommonPrefix(["dog","racecar","car"]);
        expect(res).to.eql("");
    });
});
