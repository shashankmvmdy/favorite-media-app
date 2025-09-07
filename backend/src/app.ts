import express from "express"
import cors from "cors"
import helmet from "helmet"
import mediaRoutes from "./routes/media"
import authRoutes from "./routes/auth"

const app = express()
app.use(express.json())
app.use(cors())
app.use(helmet())

app.use("/v1/auth", authRoutes)
app.use("/v1/media", mediaRoutes)

export default app
