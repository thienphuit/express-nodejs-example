const shortid = require("shortid");
const db = require("../db");

const Users = require("../models/user.model");

module.exports.index = async (req, res) => {
  let users = await Users.find();

  res.render("users/index", {
    users: users,
  });
};
module.exports.create = (req, res) => {
  res.render("users/create");
};
module.exports.postCreate = (req, res) => {
    Users.collection.insert(req.body)
};
