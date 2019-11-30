import React from 'react';

export default class StopWatch extends React.Component {
  render() {
    return (
      <div className="stopwatch">
        <h2>StopWath</h2>
        <span className="stopwatch-time">0</span>
        <button>Start</button>
        <button>Reset</button>
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount");
  }
}