import { expect } from 'chai';
import { seletionSort, mergeSort, quickSort, insertionSort } from "./index";

describe("sort", () => {
    describe("merge", () => {
        it("should sort array", () => {
            const res = mergeSort([2,6,1,9,3]);
            expect(res).to.eql([1,2,3,6,9]);
        });
    });

    describe("selection", () => {
        it("should sort array", () => {
            const res = seletionSort([2,6,1,9,3]);
            expect(res).to.eql([1,2,3,6,9]);
        });
    });

    describe("quick", () => {
        it("should sort array", () => {
            const res = quickSort([2,6,1,9,3]);
            expect(res).to.eql([1,2,3,6,9]);
        });
    });

    describe("insertion", () => {
        it("should sort array", () => {
            const res = insertionSort([2,6,1,9,3]);
            expect(res).to.eql([1,2,3,6,9]);
        });
    });
});