import { query } from "express";
import mysql from "mysql";

const conn = mysql.createPool({
  host: "kdt8-test.cprmfzrap3hr.ap-northeast-2.rds.amazonaws.com",
  user: "admin",
  password: "12345678",
  database: "kdt8",
});

// const conn = mysql.createConnection({
//   host: "localhost",
//   user: "user",
//   password: "1234",
//   database: "kdt8",
// });

//함수앞에 async를 사용하면 callback함수 필요없음
//회원가입시 db에 데이터 저장
const signupUser = (userid, name, pw, cb) => {
  // 1번방식
  const sql =
    "insert into user1 (userid,name,pw) values ('" +
    userid +
    "','" +
    name +
    "','" +
    pw +
    "')";
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log("signupUser", rows);
    cb(rows);
  });
  // try {
  //   const sql = `insert into user1 (userid,name,pw) values (?,?,?) `;
  //   const rows = await conn.query(userid, name, pw);
  //   return rows;
  // } catch (error) {
  //   console.log(error);
  // }
};

//로그인시 db 데이터와 비교
const signinUser = (userid, pw, cb) => {
  const sql = `select * from user1 where userid='${userid}' and pw='${pw}'`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log("signinUser", rows);
    cb(rows);
  });
};

const post_profile = (data, cb) => {
  const query = `select * from user1 where userid='${data}'`;
  conn.query(query, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log("post_profile", rows);
    cb(rows);
  });
};

const edit_profile = (data, cb) => {
  const sql = `update user1 set name='${data.name}', userid='${data.userid}', pw='${data.pw}' where id=${data.id}`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log("edit_profile", rows);
    cb(rows);
  });
};

const delete_profile = (id, cb) => {
  const sql = `delete from user1 where id=${id}`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log("delete_profile", rows);
    cb(rows);
  });
};
export { signupUser, signinUser, post_profile, edit_profile, delete_profile };
