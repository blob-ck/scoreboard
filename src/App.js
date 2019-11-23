import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Player} from './components/Player';

class App extends React.Component {
  state = {
    players : [
      {id:1, name:'LDK', score: 10},
      {id:2, name:'HKY', score: 20},
      {id:3, name:'KIM', score: 30},
      {id:4, name:'HONG', score: 40}
    ]
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="Hky's scoreboard" totalPlayers={10 + 1}/>
        {
          this.state.players.map((player) => (
            <Player name={player.name} key={player.id} id={player.id}
                    score={player.score}
                    changeScore={this.handleChangeScore}
                    removePlayer={this.handleRemovePlayer}/>
          ))
        }
      </div>
    )
  };

  handleRemovePlayer = (id) => {
    console.log('remove Player:', id);
    this.setState(prevState => {
      const players = prevState.players.filter(player => player.id !== id)
      console.log(players);
      return {players}
    });
  }

  handleChangeScore = (id, delta) => {
    console.log('handleChangeScore: ', id, ' ', delta)
    this.setState(prevState => {
      //항상 새로운 배열 return하므로, 배열에 사용하는 함수가 immutable하지 않아도 된다.
      const players = [...prevState.players]
      players.forEach(player => {
        if(player.id === id) {
          player.score += delta
        }
      })
      return {players}
    })
  }
}

export default App;
