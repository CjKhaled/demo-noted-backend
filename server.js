const express = require('express')
const app = express()
const cors = require('cors')

const corsOptions = {
    origin: 'http://localhost:4200',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
}

app.use(cors(corsOptions))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routers
const groupRouter = require('./routes/groupRoutes')
const noteRouter = require('./routes/notesRouter')

app.use('/groups', groupRouter)
app.use('/notes', noteRouter)

const port = 3000
app.listen(port, () => console.log(`server listening on port ${port}`))