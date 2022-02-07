const Cell = require('../Cell')

class Agent extends Cell {
    constructor(x, y, state) {
        super(x, y, state);
        this.newState = state;
        this.neighbourdCells = [];
    }

    setNextState(state) {
        this.nextState = state;
    }

    calculateAliveNeighbours() {
        let sum = 0;

        for(let i = 0; i < this.neighbourdCells.length; i++) {
            sum += this.neighbourdCells[i].state;
        }

        return sum;
    }

    applyRules() {
        const totalAliveNeighbours = this.calculateAliveNeighbours();

        if (totalAliveNeighbours < 2 || totalAliveNeighbours > 3) {
            this.setNextState(0)
        }
        if (totalAliveNeighbours === 3) {
            this.setNextState(1);
        }
    }

    setNewState() {
        this.state = this.nextState;
    }

    addNeighbours = (board) => {
        let xNeighbour;
        let yNeighbour;
        for(let i=-1; i<2; i++){
            for(let j=-1; j<2; j++){
                xNeighbour = (this.x + i + board.rows) % board.rows;
                yNeighbour = (this.y + j + board.columns) % board.columns;

                // I can't be my own neighbour
                if(i == 0 && j === 0) {
                    continue;
                }

                this.neighbourdCells.push(board.board[xNeighbour][yNeighbour]);

            }
        }
    }
}

module.exports = Agent;