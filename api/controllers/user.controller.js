
const Users = require("../../models/user.model");

module.exports.index = async (req, res) => {
    let users = await Users.find();
    res.json(users)
};

module.exports.postCreate = async (req, res) => {
    let users = await Users.create(req.body);
    res.json(users)
}