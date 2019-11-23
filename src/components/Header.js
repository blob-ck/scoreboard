import React from "react";

//named export
export const Header = (props) => {
  return (
    <header className='header'>
      <h1 className="h1">{props.title}</h1>
      <span className="stats">Players: { props.totalPlayers }</span>
    </header>
  );
};