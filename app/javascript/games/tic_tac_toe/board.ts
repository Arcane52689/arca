import Board from "../shared/board";
import TicTacToePiece from "./pawn";

class TicTacToeBoard extends Board {
  constructor() {
    super(3, 3);
  }

  set(piece: TicTacToePiece, x: number, y: number) {
    this.grid[x][y] = piece;
  }

  checkSquare(x: number, y: number): TicTacToePiece {
    return this.grid[x][y];
  }
}

export default TicTacToeBoard;