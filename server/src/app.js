import express from 'express'
import cors from 'cors'
import paymentRouter from '../routes/payment_route.js'

const app = express()

//#region  Middlewares

//allow React frontend to communicate with this API
app.use(cors())

//parse incoming requests with JSON payloads, to access data via request.body
app.use(express.json())
//#endregion

app.use('/api/payment', paymentRouter)


export default app