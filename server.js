require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Import methods to make external api calls
const { getPictureOfTheDay, getQuoteOfTheDay } = require('./helpers/external');


// Import and use the API routes
const nasaRoute = require("./api/nasa");
const quotesRoute = require("./api/quotes");
const customRoute = require("./api/custom");


// connect to database
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log("Connected to Mongo Database"));


// Function to execute the API call every day

const makeDailyAPICall = () => {

    // Call the functions immediately to fetch and save the data on server start
    getPictureOfTheDay();
    getQuoteOfTheDay();

    // Set the interval to 24 hours (24 * 60 * 60 * 1000 milliseconds)
    setInterval(getPictureOfTheDay, 24 * 60 * 60 * 1000);
    setInterval(getQuoteOfTheDay, 24 * 60 * 60 * 1000);
};

// Start making the daily API call
makeDailyAPICall();

app.get("/", (req, res) => {
    res.send("Connected to Nasa-Quotes-API")
});

app.use("/api/nasa", nasaRoute);
app.use("/api/quotes", quotesRoute);
app.use("/api/custom", customRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

// deploy to netlify