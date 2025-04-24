import express from 'express'
import cors from 'cors'

import connectDB from './config/db.js'
const app = express()
await connectDB()
app.use(cors())

app.get('/', (req, res) => res.send("API working"))
// app.post('/clerk', express.json(), clerkWebhooks)
const PORT = process.env.PORT || 5000 

app.listen(PORT, 'localhost', () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
