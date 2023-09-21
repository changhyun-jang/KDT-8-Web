import { Component } from "react"; //1번 방법
import Proptypes from "prop-types";
import "./props.css";
class props2 extends Component {
  render() {
    const { food } = this.props;

    return (
      <>
        <h1>
          <span>{food}</span>
        </h1>
        <p>
          대창덮밥의 일본이름이 <span>{food}</span> 이라서 그런거에요 <br />
          원래 대창덮밥이라는 요리가 일본음식 이거든요
          <br /> 일본에서는 소나 돼지의 내장을 호르몬 이라고 하거든요
        </p>
      </>
    );
  }
}

props2.defaultProps = {
  food: "호르몬동",
};

export default props2;
