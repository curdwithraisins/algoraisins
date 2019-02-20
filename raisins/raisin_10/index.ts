export const fibonacci = (n: number): number => n <= 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);

export const simplifiedFibonacci = (n: number): number => {
    let a = 1, b = 2;
    for (let _ = 0; _ < n - 1; _++) {
        [a, b] = [b, a + b];
    }
    return a;
};

export const staircase = (n: number, X: number[]): number =>
    n > 0 ? (X.includes(n) ? 1 : 0) + X.reduce((acc, x) => acc + staircase(n - x, X), 0) : 0;

export const staircaseWithCache = (n: number, X: number[]) => {
    const cache: number[] = [];
    cache[0] = 1;
    for (let i = 0; i < n + 1; i++) {
        cache[i] = X.reduce((acc, x) => i - x > 0 ? acc + cache[i - x] : acc, 0) + (X.includes(i) ? 1 : 0);
    }
    return cache[cache.length - 1];
};