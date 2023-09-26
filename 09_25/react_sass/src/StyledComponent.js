import styled from "styled-components";
const _BoxOne = styled.div`
  background-color: blue;
  width: 100px;
  height: 100px;
`;

//props를 사용하는방법
const _BoxTwo = styled.div`
  background-color: ${(props) => props.color};
  width: 100px;
  height: 100px;
`;

//상속받아서 사용하는 방법
const _CircleOne = styled(_BoxTwo)`
  border-radius: 50%;
`;

//기존 태그를 이름만 바꿔서 사용하는 방법 - as라는 키워드사용
const _Btn = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 15px;
  border-radius: 4px;
`;
//태그 옵션 넣는 방법
const _Input = styled.input.attrs({ require: true })``;

//중첩
const _BoxThree = styled.div`
  width: 200px;
  height: 100px;
  background-color: aqua;
  line-height: 100px;
  text-align: center;
  //다른 컴포넌트 불러와서 사용할때
  ${_Input} {
    background-color: yellow;
  }

  p {
    color: red;
    font-weight: bold;
  }
`;

export default function styledComponent() {
  return (
    <div>
      <_BoxThree>
        <p>hello styled</p>
        <_Input />
      </_BoxThree>
      {/* <_BoxTwo color="red"></_BoxTwo>
      <_CircleOne color="green"></_CircleOne>
      <_Btn as="a" href="https://www.naver.com">
        클릭
      </_Btn>
      <_Input /> */}
    </div>
  );
}
