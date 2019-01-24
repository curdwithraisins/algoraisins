export const cons = <T, S>(a: T, b: S): Function => (f: Function) => f(a, b);
export const car = (pair: Function) => pair((a, b) => a);
export const cdr = (pair: Function) => pair((a, b) => b);
