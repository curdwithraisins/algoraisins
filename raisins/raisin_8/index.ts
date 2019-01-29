export const scheduler = (f) => (n) => {
    setTimeout(f, n);
};