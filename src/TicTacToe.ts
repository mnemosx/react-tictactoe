export type XO = 'X' | 'O' | ''

export class Game {
  cells: XO[] = [
    '', '', '',
    '', '', '',
    '', '', ''
  ]
  turn: XO = 'X'

  getCells() {
    return this.cells
  }

  getTurn() {
    return this.turn
  }

  makeMove(i: number) {
    if (this.cells[i] !== '' || this.getResult()) {
      return
    }
    this.cells[i] = this.turn
    this.turn = this.turn === 'X' ? 'O' : 'X'
  }

  getWinner() {
    if ( // first row
      this.cells[0] !== '' &&
      this.cells[0] === this.cells[1] &&
      this.cells[1] === this.cells[2]
    ) {
      return this.cells[0]
    }
    if ( // second row
      this.cells[3] !== '' &&
      this.cells[3] === this.cells[4] &&
      this.cells[4] === this.cells[5]
    ) {
      return this.cells[3]
    }
    if ( // third row
      this.cells[6] !== '' &&
      this.cells[6] === this.cells[7] &&
      this.cells[7] === this.cells[8]
    ) {
      return this.cells[6]
    }
    if ( // first column
      this.cells[0] !== '' &&
      this.cells[0] === this.cells[3] &&
      this.cells[3] === this.cells[6]
    ) {
      return this.cells[0]
    }
    if ( // second column
      this.cells[1] !== '' &&
      this.cells[1] === this.cells[4] &&
      this.cells[4] === this.cells[7]
    ) {
      return this.cells[1]
    }
    if ( // third column
      this.cells[2] !== '' &&
      this.cells[2] === this.cells[5] &&
      this.cells[5] === this.cells[8]
    ) {
      return this.cells[2]
    }
    if ( // one diagonal
      this.cells[0] !== '' &&
      this.cells[0] === this.cells[4] &&
      this.cells[4] === this.cells[8]
    ) {
      return this.cells[0]
    }
    if ( // second diagonal
      this.cells[2] !== '' &&
      this.cells[2] === this.cells[4] &&
      this.cells[4] === this.cells[6]
    ) {
      return this.cells[2]
    }
  }

  getDraw() {
    if (this.cells.includes('') === false && !this.getWinner()) {
      return 'draw'
    }
  }

  getResult() {
    if (this.getWinner() === 'X' || this.getWinner() === 'O') {
      return `Player ${this.getWinner()} won!`
    } else if (this.getDraw() === 'draw') {
      return 'It\'s a draw!'
    }
  }

  resetGame() {
    for (let i = 0; i < this.cells.length; i++) {
      this.cells[i] = ''
    }
    this.turn = 'X'
  }

  confirm() {
    if (this.getResult()) {
      this.resetGame()
    } else {
      if (window.confirm('Are you sure? \nYou haven\'t finished the game yet!')) {
        this.resetGame()
      }
    }
  }
}
