import { Component } from "react";
import img1 from "./KakaoTalk_20230919_110024907.jpg";

class test2 extends Component {
  render() {
    const style = {
      color: "orange",
      fontSize: "40px",
      marginTop: "20px",
    };
    return (
      <>
        <div style={style}>
          <h2>안녕하세요</h2>
          <img src={img1} alt="햄찌" />
        </div>
      </>
    );
  }
}

export default test2;
