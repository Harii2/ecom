// This is your test secret API key.
const stripe = require('stripe')('sk_test_51N8LBESFLvLzSxC3vnYBl1RHidBfBuXyYzQufUQ7DhaPhIEE8b9oz3fDXVImmhhUjLqTN1hvlC0RbBWLZAcgA9Zd00AimBOdUa');
const express = require('express');
const app = express();
const cors = require("cors")
app.use(express.static('public'));
app.use(cors())

const YOUR_DOMAIN = 'http://localhost:4242';

app.get("/",(req,res) => {
    res.send("Hello")
})

app.post('/pay', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 'price_1N8MJQSFLvLzSxC3Skw3lGUI',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log('Running on port 4242'));