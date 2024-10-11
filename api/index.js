require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(`${process.env.MONGODB_URI}FootballPlayerslist?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  user: process.env.MONGODB_USERNAME,
  pass: process.env.MONGODB_PASSWORD
});

const FootballerSchema = new mongoose.Schema({
  name: String,
  position: String,
  country: String,
  age: Number
});

const Footballer = mongoose.model('Footballer', FootballerSchema, 'players');

app.get('/api/footballers', async (req, res) => {
  try {
    const footballers = await Footballer.find();
    res.json(footballers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/api/verse', async (req, res) => {
  try {
    const response = await axios.get('https://bible-api.com/?random=verse');
    const { reference, text } = response.data;
    res.json({ reference, text: text.slice(0, 50) + (text.length > 50 ? '...' : '') });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));