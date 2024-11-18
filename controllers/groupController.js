const groupsService = require("../services/groupsService");

function createNewGroup(req, res, next) {
  try {
    const { name } = req.body;
    const newGroup = groupsService.createGroup(name);
    res.status(200).json({ newGroup });
  } catch (error) {
    next(error);
  }
}

function getAllGroups(req, res, next) {
  try {
    const groups = groupsService.getGroups()
    res.status(200).json({ groups })
  } catch (error) {
    next(error);
  }
}

function changeGroupName(req, res, next) {
  try {
    const { name, groupId } = req.body
    const group = groupsService.updateGroup(name, groupId)
    res.status(200).json({ group })
    
  } catch (error) {
    next(error)
  }
}

function deleteGroup(req, res, next) {
  try {
    const { groupId } = req.params
    const group = groupsService.deleteGroup(groupId)
    res.status(200).json({ group })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  createNewGroup,
  getAllGroups,
  changeGroupName,
  deleteGroup
};
