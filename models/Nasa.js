const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NasaSchema = new Schema(
  {
    date: {
      type: String,
      required: true
    },
    explanation: {
      type: String,
      required: true
    },
    hdurl: {
      type: String,
      required: true
    },
    media_type: {
      type: String,
      required: true
    },
    service_version: {
      type: String
    },
    title: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = Nasa = mongoose.model('Nasa', NasaSchema);
