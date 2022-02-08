const { ACTIVE } = require('../../utils/constants');
const CellService = require('../CellService');

class BoardService {
    constructor(board) {
        this.board = board;
    }

    initializeBoard() {
        const { rows, columns, boardCells } = this.getBoardProperties();

        //this.createRandomStates();
        this.createCustomizeStates();

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                const cellService = new CellService(boardCells[i][j]);
                cellService.addNeighbours(this.board);
            }
        }
    }

    getBoardProperties() {
        return {
            rows: this.board.getRows(),
            columns: this.board.getColumns(),
            boardCells: this.board.getBoardCells()
        }
    }

    createRandomStates() {
        const { rows, columns, boardCells } = this.getBoardProperties();

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                const state = Math.floor(Math.random()*2);
                
                boardCells[i][j].setNextState(state);
                boardCells[i][j].setNewState();
            }
        }
    }

    createCustomizeStates() {
        const { boardCells } = this.getBoardProperties();
        const cellsIndexes = {
            0: { x: 3, y: 3 },
            1: { x: 3, y: 5 },
            2: { x: 4, y: 3 },
            3: { x: 4, y: 4 },
            4: { x: 5, y: 3 },
            5: { x: 5, y: 5 },
            6: { x: 6, y: 4 },
        };

        for (let i = 0; i < 7; i++) {
            const { x, y } = cellsIndexes[i];
            boardCells[x][y].setNextState(ACTIVE);
            boardCells[x][y].setNewState();
        }
    }

    applyRuleToAllCellsIntoBoard() {
        const { rows, columns, boardCells } = this.getBoardProperties();

        for(let i = 0; i<rows; i++){
            for (let j = 0; j<columns; j++) {
                const cellService = new CellService(boardCells[i][j]);
                cellService.applyRules();
            }
        }
    }

    setNewStateToAllCellsIntoBoard() {
        const { rows, columns, boardCells } = this.getBoardProperties();

        for(let i = 0; i<rows; i++){
            for (let j = 0; j<columns; j++) {
                boardCells[i][j].setNewState();
            }
        }
    }

    updateBoard() {
        this.applyRuleToAllCellsIntoBoard();
        this.setNewStateToAllCellsIntoBoard();
    }

    draw() {
        const { rows, columns, boardCells } = this.getBoardProperties();

        let result = "";
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                if (boardCells[i][j].getState() === 1) {
                    result += " # "
                } else {
                    result += " . "
                }
            }
            result += "\n"
        }
        return result;
    }
}

module.exports = BoardService;