import { Game } from './TicTacToe'

describe('Tic Tac Toe', () => {
  it('should have empty grid', () => {
    const game = new Game()

    expect(game.getCells())
      .toEqual([
        '', '', '',
        '', '', '',
        '', '', ''
      ])
    expect(game.getWinner()).toBeUndefined()
  })

  it('X\'s turn', () => {
    const game = new Game()

    expect(game.getTurn())
      .toBe('X')
  })

  it('should be able to make move and change turn', () => {
    const game = new Game()
    game.makeMove(0)
    expect(game.getCells())
      .toEqual([
        'X', '', '',
        '', '', '',
        '', '', ''
      ])
    expect(game.getTurn())
      .toBe('O')
  })
  it('should be able to move between players', () => {
    const game = new Game()
    game.makeMove(0)
    game.makeMove(1)
    expect(game.getCells())
      .toEqual([
        'X', 'O', '',
        '', '', '',
        '', '', ''
      ])
    expect(game.getTurn())
      .toBe('X')
  })
  it('should not be able to fill cell twice', () => {
    const game = new Game()
    game.makeMove(0)
    game.makeMove(0)
    expect(game.getCells())
      .toEqual([
        'X', '', '',
        '', '', '',
        '', '', ''
      ])
    expect(game.getTurn())
      .toBe('O')
  })

  it('should win if first row is filled by X', () => {
    const game = new Game()
    game.makeMove(0)
    game.makeMove(3)
    game.makeMove(1)
    game.makeMove(4)
    game.makeMove(2)
    expect(game.getCells())
      .toEqual([
        'X', 'X', 'X',
        'O', 'O', '',
        '', '', ''
      ])
    expect(game.getWinner())
      .toBe('X')
  })

  it('should win if first row is filled by O', () => {
    const game = new Game()
    game.makeMove(3)
    game.makeMove(0)
    game.makeMove(4)
    game.makeMove(1)
    game.makeMove(8)
    game.makeMove(2)
    expect(game.getCells())
      .toEqual([
        'O', 'O', 'O',
        'X', 'X', '',
        '', '', 'X'
      ])
    expect(game.getWinner())
      .toBe('O')
  })

  it('should win if second row filled', () => {
    const game = new Game()
    game.makeMove(0)
    game.makeMove(3)
    game.makeMove(2)
    game.makeMove(4)
    game.makeMove(8)
    game.makeMove(5)
    expect(game.getCells())
      .toEqual([
        'X', '', 'X',
        'O', 'O', 'O',
        '', '', 'X'
      ])
    expect(game.getWinner())
      .toBe('O')
  })
})