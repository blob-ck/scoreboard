import React from 'react'
import {connect} from "react-redux";
import {addPlayer} from "../redux/actions";

export class AddPlayerForm extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const playNode = document.getElementById("player");
    if(!playNode.validity.valid) {
      return;
    }
    this.props.addPlayer(playNode.value.toUpperCase());
    playNode.value = '';
  }

  render() {
    return (
      <form action="" className="form" onSubmit={this.handleSubmit} noValidate>
        <input id="player" type="text" className="input" required
               placeholder={"enter a player's name"}/>
        <input type="submit" className="input" value={"Add Player"}/>
      </form>
    );
  }
}


const mapActionToProps = (dispatch) => ({
  addPlayer: (name) => dispatch(addPlayer(name))
});

export default connect(null, mapActionToProps)(AddPlayerForm);