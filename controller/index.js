const express = require("express");
const memo = require("./memo");

exports.memo = () => {
  const router = express.Router();
  router.get("/", memo.getAll);
  router.post("/", memo.create);
  router.patch('/:id', memo.update)
  router.delete('/', memo.delete)
  return router;
};
