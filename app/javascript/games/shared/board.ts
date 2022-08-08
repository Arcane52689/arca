

class Board<T> {

  sizeX: number;
  sizeY: number;
  grid: Array<Array<T|null>>;

  constructor(sizeX: number, sizeY: number) {
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.grid = [];
    this.initializeGrid();
  }

  initializeGrid() {
    for (let x = 0; x < this.sizeX; x++) {
      let newRow = [] as Array<T|null>;
      for (let y = 0; y < this.sizeY; y++) {
        newRow.push(null);
      }

      this.grid.push(newRow);
    }
  }

  rows(): Array<Array<T | null>> {
    return this.grid;
  }

  columns(): Array<Array<T|null>> {
    let result: Array<Array<T|null>> = [];
    for (let y  = 0; y < this.sizeY; y++) {
      let column: Array<T | null> = []
      this.rows().forEach((row) => {
        column.push(row[y]);
      });
      result.push(column);
    }

    return result;
  }

  set(piece: (T|null), x: number, y: number) {
    this.grid[x][y] = piece;
  }

  get(x: number, y: number): (T|null) {
    return this.grid[x][y];
  }

}


export default Board;