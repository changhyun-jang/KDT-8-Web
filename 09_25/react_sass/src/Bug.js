import "./Bug.scss";
import pngwing from "./pngwing.com.png";
function Bug() {
  return (
    <>
      <div className="parent">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
        <div className="circle circle4"></div>
        <div className="circle circle5">
          <div className="circle circle6">
            <div className="circle circle7"></div>
          </div>
        </div>
        <img src={pngwing} alt="잔디" />
      </div>
    </>
  );
}

export default Bug;
