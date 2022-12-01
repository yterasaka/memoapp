const model = require("../model");
const mongoose = require("mongoose");

exports.getAll = async () => {
  try {
    const memos = (await model.memo.find({})) || [];
    return memos;
  } catch (e) {
    throw e;
  }
};

exports.create = async (message, checked) => {
  try {
    await model.memo.create({
      _id: mongoose.Types.ObjectId(),
      message,
      checked,
    });
    return;
  } catch (e) {
    throw e;
  }
};

exports.update = async (id, checked) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("invalid memo id");
  }

  try {
    const memo = await model.memo.findOneAndUpdate(
      { _id: new mongoose.Types.ObjectId(id) },
      { $set: { checked } },
      { upsert: false }
    );
    if (memo === null) {
      throw new Error("memo not found");
    }
  } catch (e) {
    throw e;
  }
};

exports.delete = async (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("invalid memo id");
  }

  try {
    const memo = await model.memo.findOneAndDelete(
      { _id: new mongoose.Types.ObjectId(id) }
    );
    if (memo == null) {
      throw new Error("memo not found");
    }
  } catch (e) {
    throw e;
  }
};

