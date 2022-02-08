const Cell = require('../Cell');

class CellWrapper extends Cell {
    constructor(x, y, state) {
        super(x, y, state);
        this.newState = state;
        this.neighbourdCells = [];
    }

    setNextState(state) {
        this.nextState = state;
    }

    setNewState() {
        this.setState(this.nextState);
    }

    setNeighbourdCell(cell) {
        this.neighbourdCells.push(cell);
    }

    getNeighbourdCells() {
        return this.neighbourdCells;
    }

    getNextState() {
        return this.nextState;
    }
}

module.exports = CellWrapper;