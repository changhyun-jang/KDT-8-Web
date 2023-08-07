import { query } from "express";
import mysql from "mysql";

const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "kdt8",
});

const getVisitors = (cb) => {
  const sql = "SELECT * FROM visitor;";
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log("getVisitors", rows);
    cb(rows);
  });
};

const writeVisitors = (name, comment, cb) => {
  const sql =
    "insert into visitor (name, comment) values ('" +
    name +
    "','" +
    comment +
    "')";
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log("rows", rows);
    cb(rows);
  });
};

const deleteVisitors = (id, cb) => {
  const sql = `delete from visitor where id='${id}'`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log("deleteVisitors", rows);
    cb(rows);
  });
};

const updateVisitors = (name, comment, id, cb) => {
  console.log(name, comment, id);
  const sql = `update visitor set name='${name}'  ,comment='${comment}' where id=${id}`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log("updateVisitors", rows);
    cb(rows);
  });
};
const seeVisitors = (id, cb) => {
  const sql = `select * from visitor where id=${id}`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log("seeVisitors", rows);
    cb(rows);
  });
};
export {
  getVisitors,
  writeVisitors,
  deleteVisitors,
  updateVisitors,
  seeVisitors,
};
