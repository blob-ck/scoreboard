import {Counter} from "./Counter";
import React from "react";

export const Player = (props) => (
  <div className="player">
    <span className="player-name">
      <button className='remove-player'
              onClick={() => props.removePlayer(props.id)}>x</button>{/*콜백에 파라미터를 온전히 사용하려면 함수로 한번 더 감싼다.*/}
      {props.name}
    </span>
    <Counter/>
  </div>
);