
const createEmptyMatrix = (rows, columns) => {
    const matrix = new Array(rows);
    for (let i = 0; i < rows; i++) {
        matrix[i] = new Array(columns);
    }
    return matrix;
}

module.exports = {
    createEmptyMatrix
}