const logUpdate = require('log-update');
const { rows, columns } = require('./utils/constants')
const Board = require('./model/Board');
const BoardService = require('./service/BoardService');

const start = () => {
    const board = new Board(rows, columns);
    const boardService = new BoardService(board);
    boardService.initializeBoard();

    setInterval(() => {
        logUpdate(boardService.draw());
        boardService.updateBoard();
    }, 1000);
}

start();
