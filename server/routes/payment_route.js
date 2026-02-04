import express from 'express'
import { postPaymentIntent } from '../controllers/payment_controller.js'

const router = express.Router()

router.post('/create-payment-intent', postPaymentIntent)

export default router