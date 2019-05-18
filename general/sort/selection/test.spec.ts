import { expect } from 'chai';
import { seletionSort } from "./index";

describe("seletionSort", () => {
    it("should sort array", () => {
        const res = seletionSort([2,6,1,9,3]);
        expect(res).to.eql([1,2,3,6,9]);
    });
});