/* eslint-disable no-console */
require('dotenv').config();
require('express-async-errors');
const app = require('express')();
// Mongoose Database Setting
const MongoDB = require('./src/config/mongo-db.config');

const { PORT, MONGODB_URI } = process.env;
// Pre-route middlewares
require('./src/middlewares/pre-route.middleware')(app);

// API routes
app.use('/api', require('./src/routes'));

// Ping route for testing connection
app.get('/ping', (req, res) =>
  res.status(200).send("Hello world!, We're changing the world")
);

// Error middlewares
require('./src/middlewares/error.middleware')(app);

app.listen(3000, async () => {
  // Initialize MongoDB
  MongoDB(MONGODB_URI);
  console.log(
    `:::> Server listening on port ${3000} @ http://localhost:${3000}`
  );
});

app.on('error', (error) => {
  console.error(`<::: An error occiurred in our server: \n ${error}`);
});
