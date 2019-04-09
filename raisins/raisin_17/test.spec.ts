import { isBalanced } from './index';
import { expect } from 'chai';

describe('raisin_16', () => {
    it('should return true if the brackets are balanced', () => {
        expect(isBalanced('([])[]({})')).to.eql(true);
    });

    it('should return false if the brackets aren\'t balanced', () => {
        expect(isBalanced('([)]')).to.eql(false);
    });

    it('should return correct answer if there are letters between brackets', () => {
        expect(isBalanced('[([frgfregrgrg])]')).to.eql(true);
    });
});
