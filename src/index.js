const logUpdate = require('log-update');
const { rows, columns } = require('./utils/constants')
const Board = require('./model/Board');

const start = () => {
    const board = new Board(rows, columns);
    board.initializeBoard();

    setInterval(() => {
        logUpdate(board.draw());
        board.updateBoard();
    }, 1000);
}

start();
