import * as paymentService from '../services/payment_service.js'

export const postPaymentIntent = async(request, response) =>{
  const { amount } = request.body

  try {
    const client_Secret = await paymentService.createPaymentIntent(amount)
    
    response.status(200).send({
      clientSecret: client_Secret
    })
  } catch (error) {
    response.status(500).send({error: error.message})
  }
}