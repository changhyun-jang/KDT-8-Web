// const getVisitors = require("../model/Visitor.js");
// const writeVisitors = require("../model/Visitor.js");
// const deleteVisitors = require("../model/Visitor.js");
// const updateVisitors = require("../model/Visitor.js");
// const seeVisitors = require("../model/Visitor.js");
const models = require("../models");

exports.main = (req, res) => {
  res.render("index");
};

exports.Visitors = (req, res) => {
  // getVisitors((result) => {
  //   console.log("Cvisitor.js", result);
  //   res.render("visitor", { data: result });
  // });

  //   console.log(getVisitors());
  //   res.render("visitor", { data: getVisitors() });

  models.Visitor.findAll().then((result) => {
    res.render("visitor", { data: result });
  });
};

exports.wVisitors = (req, res) => {
  // writeVisitors(req.body.name, req.body.comment, (result) => {
  //   console.log("결과", result);
  //   res.send({
  //     id: result.insertId,
  //     name: req.body.name,
  //     comment: req.body.comment,
  //   });
  // });
  models.Visitor.create({
    name: req.body.name,
    comment: req.body.comment,
  }).then((result) => {
    res.send({
      id: result.dataValues.id,
      name: req.body.name,
      comment: req.body.comment,
    });
  });
};

exports.eVisitors = (req, res) => {
  // updateVisitors(req.body.name, req.body.comment, req.body.id, (result) => {
  //   res.send({ result: true });
  // });
  models.Visitor.update(
    {
      name: req.body.name,
      comment: req.body.comment,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  ).then((result) => {
    res.send({ result: true });
  });
};

exports.dVisitors = (req, res) => {
  // deleteVisitors(req.body.id, (result) => {
  //   res.send({ result: true });
  // });
  models.Visitor.destroy({
    where: {
      id: req.body.id,
    },
  }).then(() => {
    res.send({ result: true });
  });
};

exports.sVisitors = (req, res) => {
  // console.log(req.query.id);
  // seeVisitors(req.query.id, (result) => {
  //   res.render("visitor", { data: result });
  // });
  models.Visitor.findOne({
    where: { id: req.query.id },
  }).then((result) => {
    res.render("visitor", { data: [result] });
  });
};
