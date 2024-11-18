const notes = [
    {
        id: 1,
        title: "Welcome to Noted!",
        content: "This is a preview of how your notes will look.",
        groupId: 1,
        createdAt: Date.now()
    },
    {
        id: 2,
        title: "Meeting Notes",
        content: "Discussed project timeline and deliverables",
        groupId: 2,
        createdAt: Date.now() - 24 * 60 * 60 * 1000
    }
]

module.exports = notes