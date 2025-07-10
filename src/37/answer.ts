function solveSudoku(board: string[][]): void {
    const n = board.length;
    const rows: Set<string>[] = [];
    const cols: Set<string>[] = [];
    const boxes: Set<string>[] = [];
    for (let i = 0; i < n; i++) {
        rows[i] = new Set();
        cols[i] = new Set();
        boxes[i] = new Set();
    }

    const blanks: { r: number; c: number }[] = [];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const item = board[i][j];
            if (item === '.') {
                blanks.push({ r: i, c: j });
            }
            else {
                rows[i].add(item);
                cols[j].add(item);
                const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                boxes[boxIndex].add(item);
            }
        }
    }

    function checkRows(row: number, item: string) {
        return rows[row].has(item);
    }

    function checkCols(col: number, item: string) {
        return cols[col].has(item);
    }

    function checkBoxes(row: number, col: number, item: string) {
        const boxIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3);
        return boxes[boxIndex].has(item);
    }

    let isFinished = false;

    function dfs(index: number) {
        if (index === blanks.length) {
            isFinished = true;
            return;
        }
        const current = blanks[index];
        const row = current.r;
        const col = current.c;
        for (let i = 1; i < 10; i++) {
            const item = i.toString();
            if (checkRows(row, item) || checkCols(col, item) || checkBoxes(row, col, item)) {
                continue;
            }
            board[row][col] = item;
            rows[row].add(item);
            cols[col].add(item);
            const boxIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3);
            boxes[boxIndex].add(item);
            dfs(index + 1);
            if (isFinished) {
                return;
            }
            board[row][col] = '.';
            rows[row].delete(item);
            cols[col].delete(item);
            boxes[boxIndex].delete(item);
        }
    }

    dfs(0);
}

export { solveSudoku };
