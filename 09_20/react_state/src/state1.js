import { Component } from "react";

class State1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "검정색",
      color: "black",
    };
  }
  changeRed = () => {
    this.setState({ text: "빨간색", color: "red" });
  };
  changeBlue = () => {
    this.setState({ text: "파란색", color: "blue" });
  };
  render() {
    return (
      <>
        <h1 style={{ color: this.state.color }}>{this.state.text} 글씨</h1>
        <button onClick={this.changeRed}>빨간색</button>
        <button onClick={this.changeBlue}>파란색</button>
      </>
    );
  }
}
export default State1;
