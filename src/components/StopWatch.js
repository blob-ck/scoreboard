import React from 'react';

export default class StopWatch extends React.Component {
  tickRef;
  state = {
    isRunning: false,
    timer: 0
  }

  tick() {
    if(this.state.isRunning) {
      console.error("setInterval 실행중!");
      this.setState(prevState => ({timer: prevState.timer + 1}));
    }
  }

  //DOM이 렌더링된 이후 실행 like document.ready()
  //네트워크로 데이터 fetch 하거나 3rd 라이브러리 초기화 할때 사용
  componentDidMount() {
    console.log("componentDidMount");
    this.tickRef = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.tickRef);
  }

  handleStopWatch() {
    this.setState(prevState => ({isRunning: !prevState.isRunning}));
  }

  render() {
    return (
      <div className="stopwatch">
        <h2>StopWath</h2>
        <span className="stopwatch-time">{this.state.timer}</span>
        <button onClick={this.handleStopWatch.bind(this)}>{this.state.isRunning ? "Stop" : "Start"}</button>
        <button onClick={()=>this.setState({timer: 0})}>Reset</button>
      </div>
    );
  }
}