const typeModel = require("../models/typeModel");

// get types
const getTypeController = async (req, res) => {
  try {
    const types = await typeModel.find();
    res.status(200).send(types);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

// add types
const addTypeController = async (req, res) => {
  try {
    const newType = new typeModel(req.body);
    await newType.save();
    res.status(201).send("Type Created Successfully!");
  } catch (error) {
    console.log(error);
    res.status(400).send("Error adding type");
  }
};

// update type
const editTypeController = async (req, res) => {
  try {
    const { typeId } = req.body;
    await typeModel.findOneAndUpdate({ _id: typeId }, req.body, { new: true });
    res.status(200).json("Type Updated");
  } catch (error) {
    console.log(error);
    res.status(400).send("Error updating type");
  }
};

// delete type
const deleteTypeController = async (req, res) => {
  try {
    const { typeId } = req.body;
    await typeModel.findOneAndDelete({ _id: typeId });
    res.status(200).json("Type Deleted");
  } catch (error) {
    console.log(error);
    res.status(400).send("Error deleting type");
  }
};

module.exports = {
  getTypeController,
  addTypeController,
  editTypeController,
  deleteTypeController,
};