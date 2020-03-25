const routes = require("express").Router();
const passController = require("./controllers/PassController");

routes.get("/pass", passController.index);

module.exports = routes;
