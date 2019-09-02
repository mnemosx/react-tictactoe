type XO = 'X' | 'O' | ''

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
    if (this.cells[i] !== '') {
      return
    }
    this.cells[i] = this.turn
    this.turn = this.turn === 'X' ? 'O' : 'X'
  }

  getWinner() {
    if (this.cells[0] !== '' && this.cells[0] === this.cells[1] && this.cells[1] === this.cells[2]) {
      return this.cells[0]
    }
    if (this.cells[3] !== '' && this.cells[3] === this.cells[4] && this.cells[4] === this.cells[5]) {
      return this.cells[3]
    }
  }
}
