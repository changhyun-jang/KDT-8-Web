function Event() {
  const handleClick = () => {
    alert("클릭했습니다.");
  };
  const handleClick2 = (str) => {
    alert(str);
  };
  return (
    <>
      <button onClick={handleClick}>클릭</button>
      <br></br>
      <button
        onClick={() => {
          handleClick2("뭘봐");
        }}
      >
        클릭2
      </button>
    </>
  );
}

export default Event;
