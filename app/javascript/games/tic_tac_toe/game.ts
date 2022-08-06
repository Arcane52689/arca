import TicTacToeBoard from "./board";
import TicTacToePiece from "./pawn";

class TicTacToeGame {

  board: TicTacToeBoard;

  constructor() {
    this.board = new TicTacToeBoard();
  }

  placePiece(team: string, x: number, y: number): void {
    let piece = new TicTacToePiece(team);
    this.board.set(piece, x, y);
  }
}

export default TicTacToeGame;