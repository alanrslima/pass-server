const routes = require("express").Router();
// const multer = require("multer");
// const multerConfig = require("./config/multer");
// const auth = require("./controllers/auth");

const passCreator = require("./controllers/filesAssociated");

routes.get("/pass", passCreator.index);

module.exports = routes;
