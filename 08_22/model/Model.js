const arr = [
  {
    userId: "hello",
    comment: "장창현",
    gender: "남자",
    major: "컴퓨터학과 ",
  },
  {
    userId: "Byes",
    comment: "유건영",
    gender: "남자",
    major: "컴퓨터학과 ",
  },
  {
    userId: "breakfast",
    comment: "이동식",
    gender: "남자",
    major: "컴퓨터학과 ",
  },
  {
    userId: "lunch",
    comment: "김정택",
    gender: "남자",
    major: "컴퓨터학과 ",
  },
  {
    userId: "dinner",
    comment: "아부다비",
    gender: "남자",
    major: "컴퓨터학과 ",
  },
];
exports.commentInfos = () => {
  //sql문실행 가정
  return arr;
};

exports.addUser = (userId, comment, gender, major, cb) => {
  arr.push({ userId, comment, gender, major });
  cb(arr);
};
