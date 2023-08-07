import {
  getVisitors,
  writeVisitors,
  deleteVisitors,
  updateVisitors,
  seeVisitors,
} from "../model/Visitor.js";

const main = (req, res) => {
  res.render("index");
};

const Visitors = (req, res) => {
  getVisitors((result) => {
    console.log("Cvisitor.js", result);
    res.render("visitor", { data: result });
  });
  //   console.log(getVisitors());
  //   res.render("visitor", { data: getVisitors() });
};

const wVisitors = (req, res) => {
  writeVisitors(req.body.name, req.body.comment, (result) => {
    console.log("결과", result);
    res.send({
      id: result.insertId,
      name: req.body.name,
      comment: req.body.comment,
    });
  });
};

const eVisitors = (req, res) => {
  updateVisitors(req.body.name, req.body.comment, req.body.id, (result) => {
    res.send({ result: true });
  });
};

const dVisitors = (req, res) => {
  deleteVisitors(req.body.id, (result) => {
    res.send({ result: true });
  });
};

const sVisitors = (req, res) => {
  console.log(req.query.id);
  seeVisitors(req.query.id, (result) => {
    res.render("visitor", { data: result });
  });
};

export { main, Visitors, wVisitors, dVisitors, eVisitors, sVisitors };
