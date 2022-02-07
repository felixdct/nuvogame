const logUpdate = require('log-update');
const Board = require('./model/Board');

const start = () => {
    const board = new Board(10, 10);
    board.initializeBoard();

    setInterval(() => {
        logUpdate(board.draw());
        board.updateBoard();
    }, 1000);
}

start();
