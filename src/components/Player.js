import Counter from "./Counter";
import React from "react";
import {removePlayer} from "../redux/actions";
import {connect} from "react-redux";

//PureComponent ?
export class Player extends React.PureComponent {
  render() {
  const {id, name, score, removePlayer} = this.props;
  console.log(name, ' rendered');
    return (
      <div className="player">
      <span className="player-name">
        <button className='remove-player'
                onClick={() => removePlayer(id)}>x</button>
        {this.props.children}
        {name}
      </span>
        <Counter id={id} score={score}/>
      </div>
    )
  }
}

const mapActionToProps = (dispatch) => ({
  removePlayer: (id) => dispatch(removePlayer(id))
});

export default connect(null, mapActionToProps)(Player);
