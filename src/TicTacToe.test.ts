import { Game } from './TicTacToe'

window.confirm = jest.fn();

describe('Tic Tac Toe', () => {
  it('should have empty grid', () => {
    const game = new Game()

    expect(game.getCells())
      .toEqual([
        '', '', '',
        '', '', '',
        '', '', ''
      ])
    expect(game.getResult()).toBeUndefined()
  })

  it('X starts the game', () => {
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
  it('should be able to change turns between players', () => {
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
  it('should not be able to fill a cell twice', () => {
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

  it('should win if 1st row is filled by same player', () => {
    const game = new Game()
    game.makeMove(8)
    game.makeMove(0)
    game.makeMove(4)
    game.makeMove(1)
    game.makeMove(6)
    game.makeMove(2)
    expect(game.getCells())
      .toEqual([
        'O', 'O', 'O',
        '', 'X', '',
        'X', '', 'X'
      ])
    expect(game.getWinner())
      .toBe('O')
    expect(game.getResult())
      .toBe('Player O won!')
  })
  it('should win if 2nd row is filled by same player', () => {
    const game = new Game()
    game.makeMove(3)
    game.makeMove(0)
    game.makeMove(4)
    game.makeMove(1)
    game.makeMove(5)
    expect(game.getCells())
      .toEqual([
        'O', 'O', '',
        'X', 'X', 'X',
        '', '', ''
      ])
    expect(game.getWinner())
      .toBe('X')
    expect(game.getResult())
      .toBe('Player X won!')
  })
  it('should win if 3rd row is filled by same player', () => {
    const game = new Game()
    game.makeMove(6)
    game.makeMove(3)
    game.makeMove(7)
    game.makeMove(4)
    game.makeMove(8)
    expect(game.getCells())
      .toEqual([
        '', '', '',
        'O', 'O', '',
        'X', 'X', 'X'
      ])
    expect(game.getWinner())
      .toBe('X')
    expect(game.getResult())
      .toBe('Player X won!')
  })

  it('should win if 1st column is filled by same player', () => {
    const game = new Game()
    game.makeMove(0)
    game.makeMove(1)
    game.makeMove(3)
    game.makeMove(2)
    game.makeMove(6)
    expect(game.getCells())
      .toEqual([
        'X', 'O', 'O',
        'X', '', '',
        'X', '', ''
      ])
    expect(game.getWinner())
      .toBe('X')
    expect(game.getResult())
      .toBe('Player X won!')
  })
  it('should win if 2nd column is filled by same player', () => {
    const game = new Game()
    game.makeMove(1)
    game.makeMove(0)
    game.makeMove(4)
    game.makeMove(2)
    game.makeMove(7)
    expect(game.getCells())
      .toEqual([
        'O', 'X', 'O',
        '', 'X', '',
        '', 'X', ''
      ])
    expect(game.getWinner())
      .toBe('X')
    expect(game.getResult())
      .toBe('Player X won!')
  })
  it('should win if 3rd column is filled by same player', () => {
    const game = new Game()
    game.makeMove(2)
    game.makeMove(0)
    game.makeMove(5)
    game.makeMove(1)
    game.makeMove(8)
    expect(game.getCells())
      .toEqual([
        'O', 'O', 'X',
        '', '', 'X',
        '', '', 'X'
      ])
    expect(game.getWinner())
      .toBe('X')
    expect(game.getResult())
      .toBe('Player X won!')
  })

  it('should win if 1st diagonal is filled by same player', () => {
    const game = new Game()
    game.makeMove(1)
    game.makeMove(0)
    game.makeMove(2)
    game.makeMove(4)
    game.makeMove(5)
    game.makeMove(8)
    expect(game.getCells())
      .toEqual([
        'O', 'X', 'X',
        '', 'O', 'X',
        '', '', 'O'
      ])
    expect(game.getWinner())
      .toBe('O')
    expect(game.getResult())
      .toBe('Player O won!')

  })

  it('should win if 2nd diagonal is filled by same player', () => {
    const game = new Game()
    game.makeMove(2)
    game.makeMove(0)
    game.makeMove(4)
    game.makeMove(1)
    game.makeMove(6)
    expect(game.getCells())
      .toEqual([
        'O', 'O', 'X',
        '', 'X', '',
        'X', '', ''
      ])
    expect(game.getWinner())
      .toBe('X')
    expect(game.getResult())
      .toBe('Player X won!')
  })

  it('should end game with draw if no one wins', () => {
    const game = new Game()
    game.makeMove(1)
    game.makeMove(0)
    game.makeMove(4)
    game.makeMove(2)
    game.makeMove(3)
    game.makeMove(5)
    game.makeMove(6)
    game.makeMove(7)
    game.makeMove(8)
    expect(game.getCells())
      .toEqual([
        'O', 'X', 'O',
        'X', 'X', 'O',
        'X', 'O', 'X'
      ])
    expect(game.getWinner())
      .toBe(undefined)
    expect(game.getDraw())
      .toBe('draw')
    expect(game.getResult())
      .toBe('It\'s a draw!')
  })

  it('should not end game with draw if player wins by selecting last cell', () => {
    const game = new Game()
    game.makeMove(8)
    game.makeMove(2)
    game.makeMove(4)
    game.makeMove(1)
    game.makeMove(3)
    game.makeMove(5)
    game.makeMove(6)
    game.makeMove(7)
    game.makeMove(0)
    expect(game.getCells())
      .toEqual([
        'X', 'O', 'O',
        'X', 'X', 'O',
        'X', 'O', 'X'
      ])
    expect(game.getWinner())
      .toBe('X')
    expect(game.getResult())
      .toBe('Player X won!')
  })

  it('should not be able to play after the game has ended', () => {
    const game = new Game()
    game.makeMove(2)
    game.makeMove(0)
    game.makeMove(4)
    game.makeMove(1)
    game.makeMove(3)
    game.makeMove(5)
    game.makeMove(6)
    game.makeMove(7)
    expect(game.getCells())
      .toEqual([
        'O', 'O', 'X',
        'X', 'X', 'O',
        'X', '', ''
      ])
    expect(game.getWinner())
      .toBe('X')
    expect(game.getResult())
      .toBe('Player X won!')

  })

  it('should be able to start new game', () => {
    const game = new Game()
    game.makeMove(2)
    game.makeMove(0)
    game.makeMove(4)
    game.makeMove(1)
    game.makeMove(3)
    game.makeMove(5)
    game.makeMove(6)
    game.makeMove(7)
    game.confirm()
    expect(game.getResult()).toBeUndefined()
    expect(game.getCells())
      .toEqual([
        '', '', '',
        '', '', '',
        '', '', ''
      ])
    expect(game.getTurn())
      .toBe('X')
  })

  it('should get confirmation before reseting unfinished game', () => {
    const game = new Game()
    game.makeMove(2)
    game.makeMove(0)
    game.confirm()
    expect(window.confirm).toHaveBeenCalledTimes(1);

  })
})