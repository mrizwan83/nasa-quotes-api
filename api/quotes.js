const express = require('express');
const router = express.Router();
const Quote = require('../models/Quote');

router.get('/test', (req, res) => {
  res.json({ msg: 'This is the Quote data route' });
});

router.get('/', async (req, res) => {
  try {
    // Fetch all quotes, maybe limit to last 10 entries
    const quotes = await Quote.find().sort({ _id: -1 }).limit(10);
    res.json(quotes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/id/:id', async (req, res) => {
  const { id } = req.params;
  try {
    // Find specific quote with the given id
    const quote = await Quote.findById(id);
    if (quote) {
      res.json(quote);
    } else {
      res.status(404).json({ error: 'Quote not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/author/:author', async (req, res) => {
  const { author } = req.params;
  try {
    // Find quotes by a specific author
    const quotes = await Quote.find({ author });
    res.json(quotes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


router.get('/date/:date', async (req, res) => {
    const { date } = req.params;
    try {
      // Find specific NASA item with the given date
      const quoteItem = await Quote.findOne({ date });
      if (quoteItem) {
        res.json(quoteItem);
      } else {
        res.status(404).json({ error: 'Quote item not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });


module.exports = router;
