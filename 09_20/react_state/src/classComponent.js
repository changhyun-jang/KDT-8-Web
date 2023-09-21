import { Component } from "react";

class Eventpractice extends Component {
  handleClick = (msg) => {
    alert(msg);
  };
  render() {
    const { message } = this.props;
    return (
      <>
        <button
          onClick={() => {
            this.handleClick(message);
          }}
        >
          show Message
        </button>
      </>
    );
  }
}
export default Eventpractice;
