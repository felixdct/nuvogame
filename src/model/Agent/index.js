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
        this.nextState = this.state;
        if (
            this.state = 1 &&
            (totalAliveNeighbours < 2 || totalAliveNeighbours > 3)
        ) {
            setNextState(0)
        }
        if (this.state === 0 && totalAliveNeighbours === 3) {
            setNextState(1)
        }
    }

    addNeighbours() {
        console.log(board.rows)
        let xNeighbour;
        let yNeighbour;
        for(let i=-1; i<2; i++){
            for(let j=-1; j<2; j++){
                xNeighbour = (this.x + i + this.board.rows) % this.board.rows;
                yNeighbour = (this.y + j + this.board.columns) % this.board.columns;

                // I can't be my own neighbour
                if(i !== 0 || j !== 0){
                    this.neighbourdCells.push(this.board[yNeighbour][xNeighbour]);
                }
            }
        }
    }
}

module.exports = Agent;