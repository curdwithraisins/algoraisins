export const isValidSudoku = (board: string[][]): boolean => {
    let row = new Set<String>();
    let column = new Set<String>();
    let box = new Set<String>();

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            let rowValue = board[i][j];
            if (rowValue != ".") {
                if (row.has(rowValue)) return false;
                row.add(rowValue);
            }

            let columnValue = board[j][i];
            if (columnValue != ".") {
                if (column.has(columnValue)) return false;
                column.add(columnValue);
            }

            let boxRow = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            let boxColumn = i % 3 * 3 + j % 3;
            let boxValue = board[boxRow][boxColumn];
            if (boxValue != ".") {
                if (box.has(boxValue)) return false;
                box.add(boxValue);
            }
        }
        row.clear();
        column.clear();
        box.clear();
    }
    return true;
};
