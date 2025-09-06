// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse JSON request body
app.use(bodyParser.json());

// Webhook endpoint
app.post('/webhook', (req, res) => {
  console.log('Received webhook:', req.body);
  res.status(200).send({ message: 'Webhook received successfully!' });
});

// Start server listening on all IPs
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
