class Cell {
    constructor(x , y, state) {
        this.x = x;
        this.y = y;
        this.state = state;
    }

    setState(state) {
        this.state = state;
    }

    getState() {
        return this.state;
    }
    
    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }
}

module.exports = Cell;