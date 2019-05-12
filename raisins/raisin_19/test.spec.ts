import { originalSentence } from './index';
import { expect } from 'chai';

describe('raisin_19', () => {
    it('should return a correct set', () => {
        const res = originalSentence('bedbathandbeyond', ['bed', 'bath', 'bedbath', 'and', 'beyond']);
        expect(res).to.eql([
            [ 'bed', 'bath', 'and', 'beyond' ],
            [ 'bedbath', 'and', 'beyond' ]
        ]);
    });
});