import { Component } from "react";

class Leader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputwriter: "",
      inputTitle: "",
      comments: [],
    };
    this.addComment = this.addComment.bind(this);
  }

  addComment() {
    const newComment = {
      writer: this.state.inputwriter,
      title: this.state.inputTitle,
    };
    // 배열에 추가하기
    // [...첫반째배열 , 2번째 배열]
    this.setState({
      comments: [...this.state.comments, newComment],
      inputTitle: "",
      inputwriter: "",
    });
  }

  render() {
    const { inputwriter, inputTitle, comments } = this.state;
    return (
      <>
        <form>
          <label htmlFor="writer"> 작성자: </label>
          <input
            type="text"
            id="writer"
            value={inputwriter}
            onChange={(e) => this.setState({ inputwriter: e.target.value })}
          ></input>
          <label htmlFor="title"> 제목: </label>
          {/* 코드의 가독성으로 인해 이벤트핸들러를 통해 전달하는것보다 익명함수내에 실행함수를 작성하는것을 추천 */}
          <input
            type="text"
            id="title"
            value={inputTitle}
            onChange={(e) => this.setState({ inputTitle: e.target.value })}
          ></input>
          <button type="button" onClick={this.addComment}>
            작성
          </button>
        </form>
        <table border={1} cellSpacing={0}>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {comments.map((list, index) => {
              return (
                <tr key={index + 1}>
                  <td>{index + 1}</td>
                  <td>{list.title}</td>
                  <td>{list.writer}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}
export default Leader;
