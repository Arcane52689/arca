import TicTacToeBoard, {TicTacToeRow} from "./board";
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

      if (this.gameWon()) {
        alert(`Game Over: ${this.currentTeam} wins`);
      } else if (this.gameStalemate()) {
        alert('Game Over: No one wins')
      } else {
        this.switchTeams();
      }

    } else {
      alert("I can't let you do that");
    }
  }

  switchTeams() {
    this.currentTeam = (this.currentTeam === 'x') ? 'o' : 'x'
  }

  gameWon() {
    return !!this.board.winningRow();
  }

  gameStalemate(): boolean {
    return this.board.boardFilled();
  }

  over() {
    return this.gameWon() || this.gameStalemate();
  }
}

export default TicTacToeGame;