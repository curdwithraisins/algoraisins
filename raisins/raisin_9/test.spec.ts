import { autocomplete } from './index';
import { expect } from 'chai';

describe('raisin_9', () => {
    const d = ['dog', 'deer', 'deal'];

    it('should return all strings that have s as a prefix', () => {
        const res = autocomplete('de', d);
        expect(res).to.eql([]);
    });
});