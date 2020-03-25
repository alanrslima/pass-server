const routes = require("express").Router();
const passController = require("./controllers/PassController");

routes.post("/pass", passController.index);

module.exports = routes;
