const Bug = require('../models/Bug');

// On creating a Bug
exports.createBug =  async ( req, res, next) => {
  try {
    const bug =  new Bug(req.body);
    await bug.save();
    res.status(201).json(bug);
  } catch (error) {
    next(error);
  }
};

// On getting all bugs
exports.getBugs = async (req, res, next) => {
  try {
    const bugs = await Bug.find();
    res.json(bugs);
  } catch (error) { 
    next(error)
  }
};

//On updating bugs
exports.updateBug = async (req, res, next) => {
  try {
    const bug = await Bug.findByIdAndUpdate(req.params.id, req.body, { new: true});
    res.json(bug);
  } catch (error) {
    next(error)
  }
}

//On deleting bug
exports.deleteBug = async (req, res, next) => {
  try {
    await Bug.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};