# Fashion-Payment-Gateway (⚠️WIP: Developing & Expanding LOCALLY⚠️)
**A Dedicated Payment Service for Secure Stripe Integration**
A dedicated for handling Stripe payments, extracted from the main Fashion Store backend.

[![Postman Docs](https://img.shields.io/badge/Postman-Documentation-orange?style=for-the-badge&logo=postman)](https://documenter.getpostman.com/view/51361413/2sBXcBo3DA)
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

**Part of the [Fashion Store](https://github.com/Wahab-Al/Fashion) ecosystem.**

---

## The Problem

The question was: where does payment logic live, and how isolated should it be?

---

## The Solution

The payment flow is extracted into a standalone Node.js service with a single responsibility: accept an amount and currency, create a Stripe Payment Intent server-side, and return the `clientSecret` to the frontend.

The frontend (Fashion Store) never touches Stripe directly, it calls this service, receives the `clientSecret`, and completes the payment client-side via Stripe.js. The secret key stays on the server, and the service can be deployed, scaled, or replaced without touching the rest of the stack.

```
Frontend (React)
    │
    ▼
POST /api/payment/create-payment-intent   ← this service
    │
    ▼
Stripe API (Payment Intents)
    │
    ▼
clientSecret → back to frontend → Stripe.js handles card UI

```

---

## Architecture

```
.
├── config/           # Environment and Stripe client setup
├── controllers/      # Request handling, delegates to service layer
├── services/         # Stripe API calls live here, isolated from HTTP layer
├── routes/           # Express router
├── src/
│   └── server.js     # Entry point
└── .github/
    └── workflows/    # CI pipeline
```

The controllers stay thin on purpose, they parse the request and pass to the service. If Stripe ever needs to be swapped (unlikely, but possible), the change is contained to `services/`.

---

## API

Full docs: **[Postman →](https://documenter.getpostman.com/view/51361413/2sBXcBo3DA)**

### `POST /api/payment/create-payment-intent`

Creates a Stripe Payment Intent and returns the `clientSecret` for client-side confirmation.

**Request body:**
```json
{
  "amount": 2000,
  "currency": "eur"
}
```

> `amount` is in the smallest currency unit (cents/pence). `2000` = €20.00.

**Response:**
```json
{
  "clientSecret": "pi_xxx_secret_xxx"
}
```

---

## Tech Decisions

| Decision | Why |
|---|---|
| **Payment Intents** over Charges API | Stripe's recommended flow, supports 3D Secure and SCA compliance out of the box |
| **Separate microservice** over embedding in main backend | Payment logic has different security requirements and failure modes isolating it limits blast radius |
| **Railway** for deployment | Zero-config Node.js hosting with env variable management, no Dockerfile needed for this service size |
| **dotenv** only, no config library | Single deployment environment, full config library (convict, etc.) would be overkill here |

---

## Setup

```bash
git clone https://github.com/Wahab-Al/Fashion-Payment-Gateway.git
cd Fashion-Payment-Gateway
npm install
```

**Environment variables** create a `.env` file:
```env
STRIPE_SECRET_KEY=sk_test_your_key_here
PORT=4000
```

> Use a **test mode** key during development. Never commit `.env`.

**Run:**
```bash
node src/server.js
```

---

## License

MIT
