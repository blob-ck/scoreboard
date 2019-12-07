import {Counter} from "./Counter";
import React from "react";

//PureComponent ?
export class Player extends React.PureComponent {
  render() {
  const {id, name, score, removePlayer, changeScore} = this.props;
  console.log(name, ' rendered');
    return (
      <div className="player">
      <span className="player-name">
        <button className='remove-player'
                onClick={() => removePlayer(id)}>x</button>
        {name}
      </span>
        <Counter id={id} score={score} changeScore={changeScore}/>
      </div>
    )
  }

/*
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log(nextProps);
    if(nextProps.score !== this.props.score) {
      return true;
    } else {
      return false;
    }
  }
*/
}



/*
export const Player = (props) => {
  console.log(props.name, ' rendered');
  return (
    <div className="player">
      <span className="player-name">
        <button className='remove-player'
                onClick={() => props.removePlayer(props.id)}>x</button>
        {/!*콜백에 파라미터를 온전히 사용하려면 함수로 한번 더 감싼다.*!/}
        {props.name}
      </span>
      <Counter id={props.id} score={props.score} changeScore={props.changeScore}/>
    </div>
  );
}*/
