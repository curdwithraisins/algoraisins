import { expect } from 'chai';
import { binarySearch } from "./index";

describe("search", () => {
    describe("binary", () => {
        it("should find correct position", () => {
            const searchArray = binarySearch([1,2,3,6,8,11,14,15,24,27,35,39,40]);
            const res = searchArray(6);
            expect(res).to.eql(3);
        });
    });
});