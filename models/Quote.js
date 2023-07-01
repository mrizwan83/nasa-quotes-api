const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuoteSchema = new Schema(
  {
    quote: {
      type: String,
      required: true
    },
    length: {
      type: Number,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    language: {
      type: String
    },
    tags: {
      type: [String]
    },
    permalink: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    background: {
      type: String
    },
    date: {
      type: String
    }
  },
  { timestamps: true }
);

module.exports = Quote = mongoose.model('Quote', QuoteSchema);
