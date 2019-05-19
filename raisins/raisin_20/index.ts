import { get, map, minBy, flow, reduce } from 'lodash/fp';

export interface ICostIndex {
    v: number,
    i: number
}

export const paintCost = (costs: number[][]): number => {
    const minimalCosts: ICostIndex[] = map(minTwo)(costs);
    const firstBuilding = minimalCosts.shift();
    return flow(reduce(calculateCost, firstBuilding), minBy('v'),  get('v'))(minimalCosts);
};

export const minTwo = (arr: number[]): ICostIndex[] =>
    reduce.convert({cap: false})((res, v, i) => {
        if (res[0].v > v) {
            [res[0], res[1]] = [{v, i}, res[0]];
        } else if (res[1].v > v) {
            res[1] = {v, i};
        }
        return res;
    }, [{v: Infinity, i: 0}, {v: Infinity, i: 0}])(arr);

export const calculateCost = (acc: ICostIndex[], [firstMin, secondMin]: [ICostIndex, ICostIndex]): ICostIndex[] =>
    map(
        (cost) =>
            firstMin.i !== cost.i
                ? { v: cost.v + firstMin.v, i: firstMin.i }
                : { v: cost.v + secondMin.v, i: secondMin.i }
    )(acc);