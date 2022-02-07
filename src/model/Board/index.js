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

    createRandomStates() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                const state = Math.floor(Math.random()*2);
                this.board[i][j].setNextState(state);
                this.board[i][j].setNewState();
            }
        }
    }

    createCustomizeStates() {
        this.board[3][3].setNextState(1);
        this.board[3][3].setNewState();

        this.board[3][5].setNextState(1);
        this.board[3][5].setNewState();

        this.board[4][3].setNextState(1);
        this.board[4][3].setNewState();

        this.board[4][4].setNextState(1);
        this.board[4][4].setNewState();

        this.board[5][3].setNextState(1);
        this.board[5][3].setNewState();

        this.board[5][5].setNextState(1);
        this.board[5][5].setNewState();

        this.board[6][4].setNextState(1);
        this.board[6][4].setNewState();
    }


    initializeBoard() {
        //this.createRandomStates();
        this.createCustomizeStates();

        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {

                this.board[i][j].addNeighbours(this);
            }
        }
    }

    draw() {
        let result = "";
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                if (this.board[i][j].state === 1) {
                    result += " # "
                } else {
                    result += " . "
                }
            }
            result += "\n"
        }
        return result;
    }

    updateBoard() {
        for(let i = 0; i<this.rows; i++){
            for (let j = 0; j<this.columns; j++) {
                this.board[i][j].applyRules();
            }
        }
        for(let i = 0; i<this.rows; i++){
            for (let j = 0; j<this.columns; j++) {
                this.board[i][j].setNewState();
            }
        }
    }
}

module.exports = Board;