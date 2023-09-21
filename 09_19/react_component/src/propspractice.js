import img1 from "./KakaoTalk_20230919_110024907.jpg";
import "./props.css";
function propspractice({ title, author, price, type }) {
  return (
    <>
      <div className="container">
        <div className="page">이번 주 베스트 셀러</div>
        <img src={img1} alt="햄찌는 귀여워" />
        <div className="title">{title}</div>
        <div className="section">
          저자: {author}
          <br />
          판매가: {price}
          <br />
          구분: {type}
        </div>
      </div>
    </>
  );
}
export default propspractice;
