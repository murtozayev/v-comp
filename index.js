import express from 'express'
const app = express()
import { createServer } from "http"
import dotenv from "dotenv"
dotenv.config()
import cors from "cors"
import { connectDB } from './database/db.js'
import router from './routes/route.js'

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }))

app.use("/api", router)

const server = createServer(app)

connectDB()

export default server