class Cell {
    constructor(x , y, state) {
        this.x = x;
        this.y = y;
        this.state = state;
    }

    setState(state) {
        this.state = state;
    }
}

module.exports = Cell;