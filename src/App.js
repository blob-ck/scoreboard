import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Player} from './components/Player';

class App extends React.Component {
  state = {
    players : [
      {id:1, name:'LDK'},
      {id:2, name:'HKY'},
      {id:3, name:'KIM'},
      {id:4, name:'HONG'}
    ]
  }

  handleRemovePlayer = (id) => {
    console.log('remove Player:', id);
    this.setState(prevState => {
      const players = prevState.players.filter(player => player.id !== id)
      console.log(players);
      return {players}
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="Hky's scoreboard" totalPlayers={10 + 1}/>
        {
          this.state.players.map((player) => (<Player name={player.name} key={player.id} id={player.id}
                                                      removePlayer={this.handleRemovePlayer}/>))
        }
      </div>
    )
  };
}

export default App;
