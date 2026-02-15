<div align="center">

# 🛍️ Fashion-Payment-Gateway
**A Dedicated Payment Service for Secure Stripe Integration**

[![Platform: Railway](https://img.shields.io/badge/Platform-Railway-lightgrey?style=for-the-badge&logo=railway)](https://fashion-server-production.up.railway.app)

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Stripe](https://img.shields.io/badge/Stripe-Payments%20API-635BFF?style=flat-square&logo=stripe&logoColor=white)](https://stripe.com/docs)
[![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![npm version](https://img.shields.io/npm/v/your-package-name.svg)](https://www.npmjs.com/package/your-package-name)
[![Postman](https://img.shields.io/badge/Postman-API_Testing-orange?logo=postman&logoColor=white)](https://www.postman.com)
[![dotenv](https://img.shields.io/badge/dotenv-Environment_Variables-yellow?logo=dotenv&logoColor=black)](https://github.com/motdotla/dotenv)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232088FF.svg?style=flat-square&logo=githubactions&logoColor=white)

## Soon:
[![Docker](https://img.shields.io/badge/docker-coming_soon-2496ED?style=flat-square&logo=docker)](https://www.docker.com/)

### 🚀 Overview
This is a standalone **Node.js & Express.js** backend engineered to handle secure payment processing. It acts as a dedicated payment handler for the **Fashion Store** ecosystem, ensuring a clean separation of concerns and high reusability.

### 🔗 Integrated Projects
This service is the payment engine for:
[🌐Fashion](https://fashion-storefront.netlify.app/) & [Github Repo](https://github.com/Wahab-Al/Fashion)
[**API Endpoint**](https://fashion-server-production.up.railway.app/api/payment/create-payment-intent)

</div>


### 🛠️ Technical Highlights
* **Stripe Integration:** Uses Stripe **Payment Intents API** for secure, server-side payment initialization.
* **Security:** Implements best practices for handling Environment Variables and sensitive API keys.
* **Modular Design:** Engineered as a "Plug-and-Play" service that can be integrated into any frontend.
* **Production Ready:** Deployed on **Railway** with optimized error handling.

## License: 📄
MIT License

### 📖📡 API Reference

#### 1. Create Payment Intent
Initializes a new payment process and returns a `clientSecret`.

URL: `/api/payment/create-payment-intent`

Method: `POST`

Auth Required: No (Public Service)
Body Sample:
```json
{
    "amount": 2000, 
    "currency": "euro"
}

```
## Installation: 
Clone the repository:
```bash
git clone https://github.com/Wahab-Al/Fashion-Payment-Gateway.git

## Run the application: ▶️
npm install

# Create a .env file and add your STRIPE_SECRET_KEY

node src/server.js
