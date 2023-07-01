require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const axios = require('axios');


// Import and use the API routes
const nasaRoute = require("./api/nasa");
const quotesRoute = require("./api/quotes");
const customRoute = require("./api/custom");


// connect to database
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log("Connected to Mongo Database"));

// Function to make the API call
const getPictureOfTheDay = async () => {
    try {
        const response = await axios.get('https://api.nasa.gov/planetary/apod', {
            params: {
                api_key: 'DEMO_KEY', // Replace with your NASA API key
            },
        });

        // Handle the response data
        const pictureData = response.data;
        console.log('Picture of the day:', pictureData);
        // Process or display the picture data as needed

    } catch (error) {
        console.error('Error fetching picture of the day:', error);
        // Handle the error
    }
};

const getQuoteOfTheDay = async () => {
    try {
        const response = await axios.get('https://quotes.rest/qod', {
            params: {
                category: 'inspire'
            },
            headers: {
                'Content-Type': 'application/json',
                'X-Theysaidso-Api-Secret': process.env.QUOTE_API_KEY
            }
        });

        // Handle the response data
        const quote = response.data.contents.quotes[0];
        console.log('Quote of the day:', quote);
        // Process or display the quote as needed

    } catch (error) {
        console.error('Error fetching quote of the day:', error);
        // Handle the error
    }
};

// Function to execute the API call every day

const makeDailyAPICall = () => {

    // Call the functions immediately to fetch and save the data on server start
    // getPictureOfTheDay();
    // getQuoteOfTheDay();

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