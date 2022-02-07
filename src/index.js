const logUpdate = require('log-update');
const Board = require('./model/Board');

const start = () => {
    const board = new Board(10, 10);
    board.initializeBoard();
    const draw = board.draw();
    setInterval(() => console.log(draw), 1000);
}

start();
