const CellWrapper = require('../CellWrapper');
const { createEmptyMatrix } = require('../../utils/util');
const { INACTIVE } = require('../../utils/constants');
class Board {
    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;
        this.boardCells = this.createBoard();
    }

    getRows() {
        return this.rows;
    }

    getColumns() {
        return this.columns;
    }

    getBoardCells() {
        return this.boardCells;
    }

    createBoard() {
        const matrix = createEmptyMatrix(this.rows, this.columns);

        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                matrix[i][j] = new CellWrapper(i, j, INACTIVE);
            }
        }
        return matrix;
    }
}

module.exports = Board;