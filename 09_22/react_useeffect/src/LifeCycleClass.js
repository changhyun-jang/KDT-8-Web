import { Component } from "react";
class MyComponent extends Component {
  componentDidMount() {
    console.log("Mount!!");
  }

  componentDidUpdate() {
    console.log("Update!!");
  }
  componentWillUnmount() {
    console.log("Unmount!!");
  }
  render() {
    return (
      <>
        <div>My Component{this.props.number}</div>
      </>
    );
  }
}

class LifeCycleClass extends Component {
  state = {
    number: 0,
    visible: true,
  };
  changNumberState = () => {
    this.setState({ number: this.state.number + 1 });
  };
  changVisibleState = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    return (
      <>
        <button onClick={this.changNumberState}>PLUS</button>
        <button onClick={this.changVisibleState}>ON/OFF</button>
        {this.state.visible && <MyComponent number={this.state.number} />}
      </>
    );
  }
}

export default LifeCycleClass;
