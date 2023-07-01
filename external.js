const axios = require('axios');

const getPictureOfTheDay = async () => {
  try {
    const response = await axios.get('https://api.nasa.gov/planetary/apod', {
      params: {
        api_key: process.env.NASA_API_KEY, // Replace with your NASA API key
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

module.exports = {
  getPictureOfTheDay,
  getQuoteOfTheDay
};
