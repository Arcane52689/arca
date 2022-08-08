import Board from "../shared/board";
import TicTacToePiece from "./pawn";


export type TicTacToeRow = (TicTacToePiece|null)[];
class TicTacToeBoard extends Board<TicTacToePiece> {
  grid: TicTacToePiece[][];

  constructor() {
    super(3, 3);
  }

  boardFilled() {
    return this.rows().every((row) => row.every((piece) => !!piece));
  }

  isWinningRow(row: TicTacToeRow): boolean {
    let team = row[0]?.team;
    let allSame = row.every((piece) => piece?.team === team);
    return !!team && allSame;
  }

  winningRow(): TicTacToeRow|null {
    let winningRow = this.rows().find((row) => this.isWinningRow(row));
    winningRow ||= this.columns().find((row) => this.isWinningRow(row));
    winningRow ||= this.diagonals().find((row) => this.isWinningRow(row));

    return winningRow || null
  }

  diagonals() {
    let d1 = [
      this.get(0, 0),
      this.get(1, 1),
      this.get(2, 2)
    ];
    let d2 = [
      this.get(2, 0),
      this.get(1, 1,),
      this.get(0, 2)
    ]
    return [
      d1,
      d2
    ]
  }

  spacesWhere(callback: (piece: TicTacToePiece|null)=>boolean): any[] {
    let result: any[] = [];
    let square: TicTacToePiece|null;
    for (let x = 0; x < this.sizeX; x++) {
      for (let y = 0; y < this.sizeY; y++) {
        square = this.get(x,y);
        if (callback(square)) {
          result.push({
            x,
            y
          })
        }
      }
    }

    return result;
  }

  openSpaces() {
    return this.spacesWhere((piece) => !piece)
  }


}

export default TicTacToeBoard;