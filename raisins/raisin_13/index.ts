export const estimatedP = (): number => {
    const r: number = 1, n = 10000000;
    let m: number = 0;
    for (let _ = 0; _ < n; _++) {
        const x: number = Math.random();
        const y: number = Math.random();
        if (x**2 + y**2 <= r**2) {
            m++;
        }
    }
    return +(4*m/n).toFixed(3);
};