import "./circle.css";
import pngwing from "./pngwing.com.png";
function functionComponent({ name }) {
  return (
    <>
      <h1>{name}를 아세요?</h1>
      <div class="parent">
        <div class="circle circle1"></div>
        <div class="circle circle2"></div>
        <div class="circle circle3"></div>
        <div class="circle circle4"></div>
        <div class="circle circle5">
          <div class="circle circle6">
            <div class="circle circle7"></div>
          </div>
        </div>
        <img src={pngwing} alt="잔디" />
      </div>
    </>
  );
}

export default functionComponent;
