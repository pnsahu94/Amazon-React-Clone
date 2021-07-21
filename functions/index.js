const functions = require("firebase-functions");

// Create and Deploy Your First Cloud Functions

const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
    "sk_test_51JFi3eSBdHONOyZgFj8oXraqptKKSZuv0LOUU9e6EFvKtQUGFwk05xt7keob5Vin9XgvtLyt1lWtf3GWEg38lqKX00yqMdv5Tl"
);

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "inr",
    });

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// Listen Command
exports.api = functions.https.onRequest(app);
