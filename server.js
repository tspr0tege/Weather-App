require('dotenv').config();
const express = require('express')
const Axios = require('axios');
const app = express()

const PORT = process.env.PORT || 3000
const API_KEY = process.env.API_KEY;

app.use(express.static('src'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
});

app.post('/weather', (req, res) => {

  Axios.get(`https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily?lat=${req.body.lat}&lon=${req.body.lon}`, {
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com'
    }
  })
  .then((response) => {
    console.log(response.data);
    res.status(200).send(response.data);
  })
  .catch((error) => {
    console.log(error);
    res.status(500).send(error);
  });
});