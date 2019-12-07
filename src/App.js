import React from 'react';
import './App.css';
import {Header} from './components/Header';
import AddPlayerForm from './components/AddPlayerForm';
import {connect} from "react-redux";
import {CustomPlayer} from "./components/CustomPlayer";
import _ from "lodash";

class App extends React.Component {

  getHighScore() {
    const maxObj = _.maxBy(this.props.players, 'score');
    return maxObj.score;
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="Hky's scoreboard" players={this.props.players}/>
        {
          this.props.players.map((player) => (
            <CustomPlayer name={player.name} key={player.id} id={player.id}
                    score={player.score}
                    isHighScore={this.getHighScore() === player.score}
            />
          ))
        }
        <AddPlayerForm/>
      </div>
    )
  };
}

const mapStateToProps = (state) => ({
  players: state.playerReducer.players,
});

export default connect(mapStateToProps)(App);
