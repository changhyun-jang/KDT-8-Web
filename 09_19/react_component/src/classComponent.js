import { Component } from "react"; //1번 방법
import Proptypes from "prop-types";
// import React from "react"; 2번 방법

//class 컴포넌트 명 extends Component()
//class  ClassComponent extends React.Component() //2번 방법
//클래스형 컴포넌트에서 render()함수는 필수
class classComponent extends Component {
  render() {
    const name = "하기귀찮아";

    return (
      <>
        <h1>{this.props.name}</h1>
      </>
    );
  }
}

classComponent.defaultProps = {
  name: "장첸",
};
classComponent.propTypes = {
  //필수로 넣어야하는값 isRequired
  name: Proptypes.number.isRequired,
};

export default classComponent;
