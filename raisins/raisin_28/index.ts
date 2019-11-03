export const isToeplitzMatrix = (matrix: number[][]): boolean => {
    const colLength = matrix.length, rowLength = matrix[0].length;
    let curRow = 0;

    for (let curCol = matrix.length - 1; curCol >= 0; curCol--) {
        const model = matrix[curCol][curRow];
        
        for (let y = curRow + 1, x = curCol + 1; y < rowLength && x < colLength; x++, y++) {
            if (model !== matrix[x][y]) {
                return false;
            }
        }

        if (curCol === 0 && curRow < rowLength) {
            curCol = 1;
            curRow++;
        }
    }

    return true;
};