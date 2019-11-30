import React from "react";
import _ from 'lodash';

const Stats = (props) => {
  let totalPlayers = props.players.length;
  //방법.3 lodash library 사용
  let totalPoints = _.sumBy(props.players, 'score');

  //방법.1
  //let totalPoints = 0; //props.Players.reduce((total, player) => total + player.score, 0);

  //방법.2
  //누가, 언제 봐도 이해할 수 있도록 - by Clean Code
  // props.players.forEach(item => {
  //   totalPoints += item.score;
  // });

  return (
    <table className="stats">
      <tbody>
      <tr>
        <td>Players:</td>
        <td>{totalPlayers}</td>
      </tr>
      <tr>
        <td>Total Points:</td>
        <td>{totalPoints}</td>
      </tr>
      </tbody>
    </table>
  );
};

export default Stats;