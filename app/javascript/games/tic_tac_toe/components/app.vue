<template>
  <div class="tic-tac-toe__game">
    <div class="tic-tac-toe__board">
      <div class="row" v-for="(row, x) in game.board.grid" :key="`row-${x}`">
        <div class="square" v-for="(piece, y) in row" :key="`square-${y}`" @click="placePiece(x, y)">
          <span v-if="piece?.team == 'x'">X</span>
          <span v-else-if="piece?.team == 'o'">O</span>
          <span v-else>&nbsp;</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import TicTacToeGame from "../game";


export default {
  data() {
    let game = new TicTacToeGame();
    return {
      game: game as TicTacToeGame
    }
  },
  methods: {
    placePiece(x, y) {
      this.game.placePiece(x, y);
    }
  }
}
</script>

<style lang="css" scoped>

    .row {
      display: flex;
      flex-direction: row;
    }
    .square {
      height: 50px;
      width: 50px;
      border: 1px solid black;
    }
</style>