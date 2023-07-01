const express = require('express');
const router = express.Router();
const Nasa = require('../models/Nasa');
const Quote = require('../models/Quote');


router.get("/test", (req, res) => {
    res.json({ msg: "This is the custom data route"})
});

router.get('/', async (req, res) => {
    try {
      // Fetch the latest data from the Nasa model
      const nasaData = await Nasa.findOne().sort({ createdAt: -1 }).exec();
  
      // Fetch the latest data from the Quote model
      const quoteData = await Quote.findOne().sort({ createdAt: -1 }).exec();
  
      // Combine the data from both models
      const customData = {
        nasa: nasaData,
        quote: quoteData
      };
  
      res.json(customData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  

module.exports = router;