import { React, Component } from "react";

class classRef extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Info: [],
      Theme: "작성자",
      search: "",
      result: [],
      flag: 1,
    };
    this.write = this.write.bind(this);
    this.search = this.search.bind(this);
    this.chageFilter = this.chageFilter.bind(this);
    this.all = this.all.bind(this);
  }
  write() {
    const writer = document.querySelector(".writer").value;
    const title = document.querySelector(".title").value;
    // this.setState((prev) => ({ Info: [...prev.Info, [writer, title]] }));
    // console.log(this.state.Info.push([writer, title]));
    if (writer === " " || title === "") {
      this.myInput.focus();
    } else {
      this.setState((prev) => prev.Info.push([writer, title]));
    }
  }

  search() {
    let search = document.querySelector(".search").value;
    let filterresult;
    this.setState(() => (this.state.result = []));
    this.setState(() => ({ search: search }));
    this.setState(() => ({ flag: 2 }));
    if (this.state.Theme == "작성자") {
      filterresult = this.state.Info.filter((list) => list[0].includes(search));
    } else {
      filterresult = this.state.Info.filter((list) => list[1].includes(search));
    }
    this.setState(() =>
      filterresult.map((list) => {
        this.state.result.push([list[0], list[1]]);
      })
    );
  }

  chageFilter() {
    let value = document.querySelector("select").value;
    this.setState(() => ({ Theme: value }));
  }
  all() {
    this.setState(() => ({ flag: 1 }));
  }
  render() {
    return (
      <>
        <fieldset>
          작성자 :{" "}
          <input
            placeholder="작성자"
            className="writer"
            ref={(ref) => {
              this.myInput = ref;
            }}
          ></input>
          제목 : <input placeholder="제목" className="title"></input>
          <button onClick={this.write}>작성</button>
        </fieldset>
        <br />
        <div>
          <select onChange={this.chageFilter}>
            <option>작성자</option>
            <option>제목</option>
          </select>
          <input placeholder="검색어" className="search" />
          <button onClick={this.search}>검색</button>
          <button onClick={this.all}>전체</button>
        </div>
        <br />
        <table border={1}>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {this.state.flag == 1
              ? this.state.Info.map((list, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{list[1]}</td>
                      <td>{list[0]}</td>
                    </tr>
                  );
                })
              : this.state.result.map((list, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{list[1]}</td>
                      <td>{list[0]}</td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
      </>
    );
  }
}
export default classRef;
