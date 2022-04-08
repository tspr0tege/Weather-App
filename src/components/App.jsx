import React from 'react';
import Axios from 'axios';

import ForecastContainer from './ForecastContainer/ForecastContainer.jsx'
import dummyData from '../data/dummyData.js';

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
        {/* <NearestWeather weatherData={this.state.weatherData[0]}/> */}
        <ForecastContainer weatherData={this.state.weatherData}/>
      </div>
    )

  }

  // componentDidMount () {
  //   var location; 
  //   navigator.geolocation.getCurrentPosition((data) => {
  //     console.log(data);      
  //     location = data.coords;
  //     Axios.post('/weather', {
  //       lat: location.latitude,
  //       lon: location.longitude
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //       this.updateWeatherData(response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   })


  // }
}

// periods.length // array of objects in forecast

// img alt = ${name} forecast icon

export default App;
