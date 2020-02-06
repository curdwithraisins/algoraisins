import { findTwo, findTwoConstSpace, findTwoLineTime } from './index';
import { expect } from 'chai';

describe('raisin_34', () => {
    describe('findTwo', () => {
        it("should return a correct set", () => {
            let res = findTwo([1,2,6,2,3,4,5,1,3,5]);
            expect(res).to.eql([6,4]);
        });
    });

    describe('findTwoConstSpace', () => {
        it("should return a correct set", () => {
            let res = findTwoConstSpace([1,2,6,2,3,4,5,1,3,5]);
            expect(res).to.eql([4,6]);
        });
    });

    describe('findTwoLineTime', () => {
        it("should return a correct set", () => {
            let res = findTwoLineTime([1,2,6,2,3,4,5,1,3,5]);
            expect(res).to.eql([4,6]);
        });
    });
});