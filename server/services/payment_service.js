import Stripe from 'stripe'
import { config } from '../config/env.js'

const srtipe = new Stripe(config.stripeSecretKey)

export const createPaymentIntent = async(amount) =>{
  try {
    //create a PaymentIntent with order amount and currency 
    const paymentIntent = await srtipe.paymentIntents.create({
      amount: Math.round(amount * 100),
      currency: 'eur',
      automatic_payment_methods: {
        enabled: true,
      }
    })

    return paymentIntent.client_secret
  } catch (error) {
    throw new Error({error: error.message})
  }
}