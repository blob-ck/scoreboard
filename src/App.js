import React from 'react';
import logo from './logo.svg';
import './App.css';

const players = [
  {id:1, name:'LDK'},
  {id:2, name:'HKY'},
  {id:3, name:'KIM'},
  {id:4, name:'HONG'}
];

const Header = (props) => {
  return (
    <header className='header'>
      <h1 className="h1">{props.title}</h1>
      <span className="stats">Players: { props.totalPlayers }</span>
    </header>
  );
};

const Player = (props) => (
  <div className="player">
    <span className="player-name">
      <button className='remove-player'
              onClick={() => props.removePlayer(props.id)}>x</button>{/*콜백에 파라미터를 온전히 사용하려면 함수로 한번 더 감싼다.*/}
      {props.name}
    </span>
    <Counter/>
  </div>
);

class Counter extends React.Component { //React.Component 객체에 props가 내장되어있다. 사용할 때 this.props로 사용할 것

  state = {
    score: 11
  }

  increment = () => {
    console.log('incrementScore', this);
    //class 의 멤버로 메서드를 선언하면
    //this는 lexical this로, this를 binding하는 작업이 없으므로 this = class 를 가리킨다.
    this.setState(prevState => ({score: prevState.score + 1}));
  }

  decrement() {
    console.log('decrement', this);
    this.setState(prevState => ({score: prevState.score - 1}));
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrement.bind(this)}> - </button>
        <span className="counter-score">{this.state.score}</span>

        <button className="counter-action increment" onClick={this.increment}> + </button>
      </div>
    )
  }
}

class App extends React.Component {
  state = {
    players : [
      {id:1, name:'LDK'},
      {id:2, name:'HKY'},
      {id:3, name:'KIM'},
      {id:4, name:'HONG'}
    ]
  }

  //1.부모가 콜백을 만든다.
  // 콜백을 만든 후 자식에 내려보내고, 자식에서 내려받은 prop.콜백을 통해 부모에 삭제 요청을 한다. 삭제요청이 오면 부모에서 삭제를 처리한다.
  handleRemovePlayer = (id) => {
    console.log('remove Player:', id);
    //setState 를 통해 수정해야 ui에도 반영이 된다.
    // const players = this.state.players.filter(player => player.id !== id);
    // this.state.players = players;
    //remove를 많이 하게 되면 queue에 계속 쌓이므로 비동기 콜백으로 던질것
    this.setState(prevState => {
      const players = prevState.players.filter(player => player.id !== id)
      console.log(players);
      //새로운 배열을 반환해야한다. (React tutorial => immutable function을 사용하도록 나와있다.)
      // return {players : players};
      //키 와 변수명이 같을 경우 한쪽을 생략 : ES6 shorthand property 문법
      return {players}
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="My scoreboard" totalPlayers={10 + 1}/>
        {
          this.state.players.map((player) => (<Player name={player.name} key={player.id} id={player.id}
                                                      removePlayer={this.handleRemovePlayer}/>)) //2. 콜백 자체를 props로 자식에 넘긴다.
        }
      </div>
    )
  };
}

export default App;
