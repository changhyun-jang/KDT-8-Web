const mysql = require("mysql");

//mysql연결
//createpool
//pooling이라는 곳에 사용할 것들을 대기 시켜놨다가 접속한사람이 사용하고 연결을 끊는게 아닌 다시 pulling이라는 곳에 둠, 메모리 과부하가 걸리지 않음, 연결 풀을 생성, 풀은 미리정의된 수의 연결을 생성하고 관리, 요청이 들어오면 연결 풀에서 사용가능한 연결을 제공, 작업완료 후 해당 연결 반환, 연결이 필요하지 않을 경우, 자동으로 반환, 풀의 연결 수를 제한하고 관리를 최적화, 다중연결 서비스에 적합

//createConnection은 연결을 한뒤 쿼리가 되면 끊음,메모리 과부하가 걸림, 단일연결, 요청할때 마다 새로운 연결을 새엉, 적은 수의 동시 연결이나 단순한 데이터베이스 쿼리일떄 사용

const conn = mysql.createConnection({
  host: "localhost",
  user: "kdt",
  password: "",
  database: "kdt",
  port: 3306,
});

const conn2 = mysql.createPool({
  host: "localhost",
  user: "kdt",
  password: "",
  database: "kdt",
  port: 3306,
  connectionLimit: 30, //최대 연결수 (기본값은 10)
});
//문자열 보간법
//insert into user1(userid, name, pw) values ('${userid}', '${name}', '${pw}')
//단점 : sql injection이라는 공격에 취약, 문자열에 특수 문자가 있을 경우 오류가 발생할 수 있음,
//Prepared Statement
//INSERT INTO user(userid, name, pw) values (?,?,?)

const db_signup = (userid, name, pw, cb) => {
  //문자열 보간법
  // const query = `insert into user1(userid, name, pw) values ('${userid}', '${name}', '${pw}')`;
  // conn.query(query, (error, rows) => {
  //   if (error) {
  //     console.log(error);
  //     return;
  //   }
  //   console.log("db_signup", rows);
  //   cb(rows);
  // });

  //prepared statement
  const query = `insert into user1(userid, name, pw) values (?,?,?)`;
  conn.query(query, [userid, pw, name], (err, rows) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log("db_signup", rows);
    cb(rows);
  });
};
const db_signin = () => {
  const query = `select * from user where userid=? and pw=?`;
  conn.query(query, [userid, pw], (err, rows) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log("db_signin", rows);
    cb(rows);
  });
};

module.exports = {
  db_signup,
  db_signin,
};
