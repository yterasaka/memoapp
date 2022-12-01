const usecase = require("../usecase");

exports.getAll = async (req, res, next) => {
  try {
    const memos = await usecase.memo.getAll();
    return res.status(200).send({ memos: memos });
  } catch (e) {
    return res
      .status(500)
      .send({ error: String(e), message: "error occurred" });
  }
};

exports.create = async (req, res, next) => {
  const message = req.body.message ?? "";
  const checked = req.body.checked ?? false;

  try {
    await usecase.memo.create(message, checked);
    return res.status(200).send({});
  } catch (e) {
    return res
      .status(500)
      .send({ error: String(e), message: "error occurred" });
  }
};

exports.update = async (req, res, next) => {
  const id = req.params.id;
  const checked = req.body.checked;
  try {
    await usecase.memo.update(id, checked);
    return res.status(200).send({});
  } catch (e) {
    return res
      .status(500)
      .send({ error: String(e), message: "error occurred" });
  }
};

exports.delete = async (req, res, next) => {
  const id = req.query.id;

  try {
    await usecase.memo.delete(id);
    return res.status(200).send({});
  } catch (e) {
    return res
      .status(500)
      .send({ error: String(e), message: "error occurred" });
  }
};
