const logUpdate = require('log-update');
const Board = require('./model/Board');

const printTable = (board) => {
    for(let i = 0; i<board.rows; i++){
        for (let j = 0; j<board.columns; j++) {
            board[i][j].applyRules();
        }
    }
    return board
}

const start = () => {
    const board = new Board(10, 10);
    board.initializeBoard();

    setInterval(() => logUpdate(printTable(board).draw()), 1000);
}

start();
