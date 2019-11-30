import React from 'react'

export class AddPlayerForm extends React.Component {
  state = {
    value: ''
  }

  handleValueChange = (e) => {
    this.setState({value: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // const playerNode = document.getElementById("player");
    // console.log("badInput : ", playerNode.validity.badInput);
    // console.log("customError : ", playerNode.validity.customError);
    // console.log("patternMismatch : ", playerNode.validity.patternMismatch);
    // console.log("rangeOverflow : ", playerNode.validity.rangeOverflow);
    // console.log("rangeUnderflow : ", playerNode.validity.rangeUnderflow);
    // console.log("stepMismatch : ", playerNode.validity.stepMismatch);
    // console.log("tooLong : ", playerNode.validity.tooLong);
    // console.log("tooShort : ", playerNode.validity.tooShort);
    // console.log("typeMismatch : ", playerNode.validity.typeMismatch);
    // console.log("valueMissing : ", playerNode.validity.valueMissing);
    // console.log("valid : ", playerNode.validity.valid);
    let name = this.state.value.replace(/(^\s*)|(\s*$)/, '');
    if(!name.replace(/\s/gi, "")) return alert("공백은 입력할 수 없습니다.");
    this.props.addPlayer(name.toUpperCase());
    this.setState({value: ''});
  }

  render() {
    return (
      <form action="" className="form" onSubmit={this.handleSubmit}>
        <input id="player" type="text" className="input"
               minLength={5}
               maxLength={10}
               value={this.state.value}
               placeholder={"enter a player's name"}
               onChange={this.handleValueChange}
        />
        <input type="submit" className="input" value={"Add Player"}/>
      </form>
    );
  }
}
