import React from "react";
import {connect} from "react-redux";
import {changeScore} from "../redux/actions";

export class Counter extends React.Component { //React.Component 객체에 props가 내장되어있다. 사용할 때 this.props로 사용할 것
  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement"
                onClick={() => this.props.changeScore(this.props.id, -1)}> -</button>
        <span className="counter-score">{this.props.score}</span>
        <button className="counter-action increment"
                onClick={() => this.props.changeScore(this.props.id, 1)}> +</button>
      </div>
    )
  }
}

const mapActionToProps = (dispatch) => ({
  changeScore: (id, delta) => dispatch(changeScore(id, delta))
});

export default connect(null, mapActionToProps)(Counter);
