const groups = require('../models/groups')

function createGroup (name) {
    const createId = groups.length + 1;
    groups.push({
        id: createId,
        name: name
    })

    return groups[createId]
}

function getGroups() {
    return groups;
}

function findGroupById(groupId) {
    return groups.find((group) => group.id == groupId)
}

function updateGroup(name, groupId) {
    const group = findGroupById(groupId)

    if (groupId == 1) {
        return false
    }
    
    if (group) {
        group.name = name
        return true
    }

    return false;
}

function deleteGroup(groupId) {
    if (groupId === 1) {
        return false
    }
    
    const index = groups.findIndex(group => group.id == groupId)
    
    if (index !== -1) {
        groups.splice(index, 1)
        
        groups.forEach((group, i) => {
            group.id = i + 1
        })
        
        return true
    }
    
    return false
}

module.exports = {
    createGroup,
    getGroups,
    updateGroup,
    deleteGroup
}