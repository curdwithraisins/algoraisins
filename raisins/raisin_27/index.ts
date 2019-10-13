export const pascalsRow = (k: number): number []=> {
    const row = [1];
    for (let line = 1; line < k; line++) {
        row.push(0);
        const middle = Math.floor(row.length / 2 + row.length % 2 -1);
        for (let i = middle; i > 0; i--) {
            row[i] = row[i-1] * line / i;
            row[row.length - 1 - i] = row[i];
        }
        row[row.length - 1] = 1;
    }
    return row;
};

export const pascalsRowWithSpace = (k: number): number[] => {
    let row = [1];
    for (let line = 1; line < k; line++) {
        const newRow = [1];
        for (let i = 1; i <= line; i++) {
            newRow[i] = row[i-1] * line / i;
        }
        row = newRow;
    }
    return row;
};