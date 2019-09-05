import React, { useState } from 'react';
import { Game, XO } from './TicTacToe';
import './App.css';

const game = new Game();

const App: React.FC = () => {
  const [, setField] = useState<XO[]>(game.cells);

  function cell(i: number) {
    return (
      <td onClick={() => {
        game.makeMove(i);
        setField(game.cells.slice());
      }} >
        {game.cells[i]}
      </td>
    )
  }

  function reset() {
    game.confirm()
  }

  return (
    <div id="main" className="App">
      <header className="App-header">
        <h1>Tic-Tac-Toe</h1>
      </header>
      <h2 className="result">{game.getResult()}</h2>
      <table>
        <tbody>
          <tr>
            {cell(0)}
            {cell(1)}
            {cell(2)}
          </tr>
          <tr>
            {cell(3)}
            {cell(4)}
            {cell(5)}
          </tr>
          <tr>
            {cell(6)}
            {cell(7)}
            {cell(8)}
          </tr>
        </tbody>
      </table>
      <button
        className="resetBtn"
        onClick={() => { reset(); setField(game.cells.slice()); }}>
        Restart Game
        </button>
    </div>
  );
}

export default App;
