import React from "react";

export class Counter extends React.Component { //React.Component 객체에 props가 내장되어있다. 사용할 때 this.props로 사용할 것

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