import React, { Component } from 'react';
import './App.css';

import { update } from './system';
import { doTurn } from './controller';

import bombImg from './bomb.png';
import playerImg from './player.png';
import squareImg from './square.png';
import squareRedImg from './square-red.png';


const BOARD_WIDTH = 31;
const BOARD_HEIGHT = 31;

const initialState = {
  boardWidth: BOARD_WIDTH,
  boardHeight: BOARD_HEIGHT,
  playerPosition: {
    x: Math.floor(BOARD_WIDTH / 2),
    y: Math.floor(BOARD_HEIGHT / 2)
  },
  bombs: [],
  gameOver: false
}

class App extends Component {
  state = {
    gameState: initialState,
    history: [],
    turn: 0,
    viewingTurn: 0
  };

  componentDidMount() {
    this.doTurn();
  }

  doTurn = () => {
    const newState = update(this.state.gameState, this.state.turn, doTurn(this.state.gameState));
    this.setState({
      history: [...this.state.history, newState],
      gameState: newState,
      turn: this.state.turn + 1,
      viewingTurn: this.state.turn + 1
    }, () => {
      if (this.state.gameState.gameOver) {
        console.log(this.state.turn);
      }
      else if (this.state.turn < 1000) {
        setTimeout(this.doTurn, 100);
      }
    });
  }

  _viewTurn = (event) => {
    this.setState({
      viewingTurn: event.target.value,
      gameState: this.state.history[event.target.value]
    });
  }

  render() {
    const bombs = this.state.gameState.bombs;
    const playerPos = this.state.gameState.playerPosition;
    const boards = Array.from({ length: BOARD_HEIGHT * BOARD_WIDTH })
      .map((item, index) => {
        const x = index % BOARD_WIDTH;
        const y = Math.floor(index / BOARD_WIDTH);

        return (
          <img key={index} src={
            bombs.filter(bomb => bomb.timer === 0).some(bomb => Math.abs(bomb.x - x) + Math.abs(bomb.y - y) <= 2)
              ? squareRedImg
              : squareImg
          } style={{
            float: "left"
          }} />
        )
      });
    const playerIcon = <img src={playerImg} style={{ position: "absolute", top: playerPos.y * 20, left: playerPos.x * 20 }} />
    const bombIcons = bombs.map((bomb, index) => (
      <div key={index} style={{ position: "absolute", top: bomb.y * 20, left: bomb.x * 20, width: 20, height: 20 }}>
        <div style={{ whiteSpace: "nowrap", lineHeight: "22px", color: "white", fontSize: 12, fontWeight: "bold", textAlign: "center", position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}>
          {bomb.timer}
        </div>
        <img src={bombImg} style={{ display: "block" }} />
      </div>
    ))
    return (
      <div>
        <h1>Turn: <input type="number" min={0} max={this.state.turn} value={this.state.viewingTurn} onChange={this._viewTurn} /></h1>
        <div style={{ width: BOARD_WIDTH * 20, position: "relative", margin: "auto" }} >
          {boards}
          {playerIcon}
          {bombIcons}
        </ div>
      </div>
    );
  }
}

export default App;
