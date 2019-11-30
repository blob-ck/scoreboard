import React from "react";
import Stats from "./Stats";
import StopWatch from "./StopWatch";

//named export
export const Header = (props) => {
  return (
    <header className='header'>
      <Stats {...props} /> {/*Header 가 받은 모든 props를 한방에 보낸다*/}
      <h1 className="h1">{props.title}</h1>
      <span className="stats">Players: { props.players.length }</span>
      <StopWatch/>
    </header>
  );
};