export const rotate = (matrix: number[][]) => {
    let l = matrix.length;
    for (let row = 0; row < matrix.length - 1; row++) {
        for (let col = row; col < matrix.length - 1 - row; col++) {
            let dist = matrix[row][col];
            matrix[row][col] = matrix[l - 1 - col][row];
            matrix[l - 1 - col][row] = matrix[l - 1 - row][l - 1 - col];
            matrix[l - 1 - row][l - 1 - col] = matrix[col][l - 1 - row];
            matrix[col][l - 1 - row] = dist;
        }
    }
};
