import { expect } from 'chai';
import { binarySearch } from "./index";

describe("search", () => {
    describe("binary", () => {
        it("should find correct number", () => {
            const res = binarySearch([1, 2, 6, 8, 11, 15, 24, 35, 40], 6);
            expect(res).to.eql(6);
        });

        it("should return undefined if no value", () => {
            const res = binarySearch([1, 2, 6, 8, 11, 15, 24, 35, 40], 3);
            expect(res).to.eql(undefined);
        });

        it("should find an object by predicate", () => {
            const res = binarySearch([{a: 1, b: 1},{a: 5, b: 1},{a: 10, b: 1},{a: 14, b: 1}], {a: 5}, 'a');
            expect(res).to.eql({a: 5, b: 1});
        });

        it("should return null if predicate for an object does'\t specified", () => {
            const res = binarySearch([{a: 1, b: 1},{a: 5, b: 1},{a: 10, b: 1},{a: 14, b: 1}], {a: 5});
            expect(res).to.eql(null);
        });
    });
});