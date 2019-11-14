import { costExplorer } from './index';
import { expect } from 'chai';

describe('raisin_30', () => {
    it("should return a shorter path", () => {
        let res = costExplorer('JFK', 'LAX', 2);
        expect(res).to.eql({path: ['JFK', 'LAX'], cost: 500});
        res = costExplorer('JFK', 'LAX', 4);
        expect(res).to.eql({path: ['JFK', 'ATL', 'LAX'], cost: 160});
    });

    it("should return undefined if no path", () => {
        let res = costExplorer('JFK', 'DAX', 2);
        expect(res).to.eql(undefined);
    });
});