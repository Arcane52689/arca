import TicTacToeBoard from "./board";
import TicTacToePiece from "./pawn";

class TicTacToeGame {

  board: TicTacToeBoard;
  currentTeam: string = 'x'

  constructor() {
    this.board = new TicTacToeBoard();
  }

  placePiece( x: number, y: number): void {
    if (!this.board.get(x, y)) {
      let piece = new TicTacToePiece(this.currentTeam);
  
      this.board.set(piece, x, y);
      this.switchTeams();
    } else {
      alert("I can't let you do that");
    }
  }

  switchTeams() {
    this.currentTeam = (this.currentTeam === 'x') ? 'o' : 'x'
  }
}

export default TicTacToeGame;