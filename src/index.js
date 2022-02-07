const logUpdate = require('log-update');
const Board = require('./model/Board');

const start = () => {
    const board = new Board(10, 10);
    board.initializeBoard();
    // console.log(board.draw());
    // board.updateBoard();
    // console.log(board.draw());
    // board.updateBoard();
    // console.log(board.draw());
    setInterval(() => {
        logUpdate(board.draw());
        board.updateBoard();
    }, 1000);
}

start();
