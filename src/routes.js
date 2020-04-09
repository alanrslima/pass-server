const routes = require("express").Router();
const passController = require("./controllers/PassController");
const userPassController = require("./controllers/UserPassController");

routes.post("/pass", passController.index);
routes.post("/userpass", userPassController.index);

module.exports = routes;
