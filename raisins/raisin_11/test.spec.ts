import {
    distinctSubstring
} from './index';
import { expect } from 'chai';

describe('raisin_11', () => {
    it('should return length of the longest substring that contains at most k distinct characters', () => {
        const res = distinctSubstring('abcba', 2);
        expect(res).to.eql('bcb');
    })
});