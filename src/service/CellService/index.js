const CellWrapper = require('../../model/CellWrapper');
const { ACTIVE, INACTIVE } = require('../../utils/constants');

class CellService {
    constructor(cell) {
        this.cell = cell;
    }

    calculateAliveNeighbours() {
        let sum = 0;
        const neighbourdCells = this.cell.getNeighbourdCells();

        for(let neighbourdCell of neighbourdCells) {
            sum += neighbourdCell.getState();
        }

        return sum;
    }

    applyRules() {
        const totalAliveNeighbours = this.calculateAliveNeighbours();
        const cellState = this.cell.getState();
        this.cell.setNextState(cellState);

        if (cellState === ACTIVE && (totalAliveNeighbours < 2 || totalAliveNeighbours > 3)) {
            this.cell.setNextState(INACTIVE)
        }
        if (cellState === INACTIVE && totalAliveNeighbours === 3) {
            this.cell.setNextState(ACTIVE);
        }
    }

    addNeighbours = (board) => {
        const boardCells = board.getBoardCells();
        const boardRows = board.getRows();
        const boardColumns = board.getColumns();

        for(let i=-1; i<2; i++){
            for(let j=-1; j<2; j++){
                const xNeighbour = (this.cell.getX() + i + boardRows) % boardRows;
                const yNeighbour = (this.cell.getY() + j + boardColumns) % boardColumns;

                // I can't be my own neighbour
                if(i == 0 && j === 0) {
                    continue;
                }

                this.cell.setNeighbourdCell(boardCells[xNeighbour][yNeighbour]);
            }
        }
    }
}

module.exports = CellService;