const express = require('express')
const Axios = require('axios');
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static('src'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
});

app.post('/weather', (req, res) => {
  
  // console.log(`https://national-weather-service.p.rapidapi.com/points/${req.body.lat},${req.body.long}/forecast`);
  // res.send('Trying');

  Axios.get(`https://national-weather-service.p.rapidapi.com/points/${req.body.lat},${req.body.long}/forecast`, {
    headers: {
      'x-rapidapi-key': 'b0e3679361msha821a26adaec506p15cbb0jsna5b1b34adecb',
      'x-rapidapi-host': 'national-weather-service.p.rapidapi.com'
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