import { Component } from "react";

class State2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "내가 사라져 볼게",
    };
  }
  disappear = () => {
    this.setState({ text: "" });
  };
  render() {
    return (
      <>
        <button onClick={this.disappear}>사라져랏</button>
        <h1>{this.state.text}</h1>
      </>
    );
  }
}
export default State2;
