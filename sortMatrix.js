/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var sortMatrix = function(grid) {
    const n = grid.length;

    // Function to collect all diagonals
    const diagonals = new Map();

    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            let key = r - c; // diagonal identifier
            if (!diagonals.has(key)) diagonals.set(key, []);
            diagonals.get(key).push(grid[r][c]);
        }
    }

    // Sort diagonals based on rule
    for (let [key, arr] of diagonals.entries()) {
        if (key >= 0) {
            // bottom-left including main diag -> descending
            arr.sort((a, b) => b - a);
        } else {
            // top-right -> ascending
            arr.sort((a, b) => a - b);
        }
        diagonals.set(key, arr);
    }

    // Place values back into grid
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            let key = r - c;
            grid[r][c] = diagonals.get(key).shift();
        }
    }

    return grid;
};
