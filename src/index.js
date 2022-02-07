const logUpdate = require('log-update');
const Board = require('./model/Board');

const printTable = (board) => {
    board.updateBoard();
    return board;
}

const start = () => {
    const board = new Board(10, 10);
    board.initializeBoard();
    console.log(board.draw())
    board.updateBoard();
    console.log(board.draw());
    // setInterval(() => {
    //     logUpdate(board.draw());
    //     //console.log(board.draw())
    //     board.updateBoard();
    //     //console.log(board.draw());
    // }, 5000);
}

start();
