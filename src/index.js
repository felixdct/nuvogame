const logUpdate = require('log-update');
const Board = require('./model/Board');

const printTable = (board) => {
    board.updateBoard();
    return board;
}

const start = () => {
    const board = new Board(10, 10);
    board.initializeBoard();
    setInterval(() => {
        logUpdate(board.draw());
        //console.log(board.draw())
        board.updateBoard();
        //console.log(board.draw());
    }, 1000);
}

start();
