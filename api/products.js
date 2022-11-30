// lh:300/api/products
const express = require("express");
const productsRouter = express.Router();

// update
// /products/:prodId
productsRouter.post("/");
// productsRouter.post('/:prodId') //antipattern

productsRouter.patch("/:prodId", async (req, res, next) => {
  // route handling here.
});

productsRouter.delete("/:prodId", async (req, res, next) => {
  // delete verb in http protocol
});
//productsRouter.patch('/:prodId/update') //antipattern

module.exports = productsRouter;
