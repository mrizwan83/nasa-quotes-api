const express = require('express');
const router = express.Router();
const Nasa = require('../models/Nasa');

router.get('/test', (req, res) => {
  res.json({ msg: 'This is the Nasa data route' });
});

router.get('/', async (req, res) => {
  try {
    // Fetch all NASA data, limiting to the last 10 entries
    const nasaData = await Nasa.find().sort({ _id: -1 }).limit(10);
    res.json(nasaData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/id/:id', async (req, res) => {
  const { id } = req.params;
  try {
    // Find specific NASA item with the given id
    const nasaItem = await Nasa.findById(id);
    if (nasaItem) {
      res.json(nasaItem);
    } else {
      res.status(404).json({ error: 'NASA item not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get('/date/:date', async (req, res) => {
  const { date } = req.params;
  try {
    // Find specific NASA item with the given date
    const nasaItem = await Nasa.findOne({ date });
    if (nasaItem) {
      res.json(nasaItem);
    } else {
      res.status(404).json({ error: 'NASA item not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
