import { decrypt } from './index';
import { expect } from 'chai';

describe('raisin_32', () => {
    it("should return a resulted string", () => {
        const res = decrypt('7a575e5e5d12455d405e561254405d5f1276535b5e4b12715d565b5c551262405d505e575f');
        expect(res).to.eql({res: 'Hello world from Daily Coding Problem', code: 50});
    });
});