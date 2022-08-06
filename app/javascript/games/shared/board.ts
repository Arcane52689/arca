
class Board {

  sizeX: number;
  sizeY: number;
  grid: any[][];

  constructor(sizeX: number, sizeY: number) {
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.grid = [];
    this.initializeGrid();
  }

  initializeGrid() {
    for (let x = 0; x < this.sizeX; x++) {
      let newRow: any[] = [];
      for (let y = 0; y < this.sizeY; y++) {
        newRow.push(null);
      }

      this.grid.push(newRow);
    }
  }
}


export default Board;