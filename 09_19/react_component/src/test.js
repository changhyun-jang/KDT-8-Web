import { Component } from "react";

class test extends Component {
  render() {
    const name = "장창현";
    const my_style = {
      backgroundColor: "blue",
      color: "orange",
      fontSize: "40px",
      padding: "12px",
    };
    return (
      <>
        <div style={my_style}>{name}</div>
      </>
    );
  }
}

export default test;
