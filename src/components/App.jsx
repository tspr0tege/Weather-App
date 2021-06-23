import React from 'react';
import Axios from 'axios';

import ForecastContainer from './ForecastContainer.jsx'
import NearestWeather from './NearestWeather.jsx';
import dummyData from './dummyData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: dummyData
    };
    this.updateWeatherData = this.updateWeatherData.bind(this);
  }

  updateWeatherData(weatherData) {
    this.setState({weatherData});
  }

  render () {
  
    return(
      <div className="container">
        <NearestWeather weatherData={this.state.weatherData[0]}/>
        <ForecastContainer weatherData={this.state.weatherData.slice(1)}/>
      </div>
    )

  }

  componentDidMount () {
    var location; 
    navigator.geolocation.getCurrentPosition((data) => {
      console.log(data);      
      location = data.coords;
      Axios.post('/weather', {
        lat: location.latitude,
        long: location.longitude
      })
      .then((response) => {
        this.updateWeatherData(response.data.properties.periods);
      })
      .catch((err) => {
        console.log(err);
      });
    })


  }
}

// periods.length // array of objects in forecast

// img alt = ${name} forecast icon

export default App;
