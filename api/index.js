// lh:3000/api
const express = require("express");
const apiRouter = express.Router();
const usersRouter = require("./users");
const prodRouter = require("./products");

apiRouter.use("/", async (req, res, next) => {
  next();
});

apiRouter.use("/users", usersRouter);
apiRouter.use("/products", prodRouter);

module.exports = apiRouter;
