const { Student, StudentProfile, Classes } = require("../models");

exports.index = (req, res) => {
  res.render("index");
};

//학생생성
exports.post_student = async (req, res) => {
  try {
    const { userid, password, email, name, major, enroll } = req.body;
    const user = await Student.create(
      {
        userid,
        password,
        email,
        StudentProfile: {
          name,
          major,
          enroll,
        },
      },
      { include: StudentProfile }
    );
    res.send(user);
  } catch (error) {
    console.log(error);
  }
};

exports.post_class = async (req, res) => {
  try {
    const { name, room, code, teacher_name, StudentId } = req.body;
    const classes = await Classes.create({
      name,
      room,
      code,
      teacher_name,
      StudentId,
    });
    res.send(classes);
  } catch (error) {}
};

exports.get_student = async (req, res) => {
  try {
    const student = await Student.findAll({
      //include는 쿼리를 실행할때, 관련된 모델의 데이터도 함께
      //조회할 수 있도록 해주는 옵션
      attributes: ["userid", "email"],
      include: [{ model: StudentProfile, attributes: ["major", "enroll"] }],
    });
    res.send(student);
  } catch (error) {
    console.log(error);
  }
};