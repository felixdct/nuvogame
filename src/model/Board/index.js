const { createEmptyMatrix } = require('../../utils/util');
const Agent = require('../Agent') 

class Board {
    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;
        this.board = this.createBoard();
    }

    createBoard() {
        const matrix = createEmptyMatrix(this.rows, this.columns);

        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                matrix[i][j] = new Agent(i, j, 0);
            }
        }
        return matrix;
    }

    initializeBoard() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                const state = Math.floor(Math.random()*2);
                this.board[i][j] = new Agent(i,j,state);
            }
        }

        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                this.board[i][j].addNeighbours(this.board);
            }
        }
    }

    

    draw() {
        let result = "";
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                result += this.board[i][j].state;
            }
            result += "\n"
        }
        return result;
    }
}

module.exports = Board;