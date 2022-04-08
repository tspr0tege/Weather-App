import React from 'react';
import ForecastTile from '../ForecastTile/ForecastTile.jsx';
import './ForecastContainer.css';

export default ({ weatherData }) => {

  function weekday(days) {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let d = new Date();
    d.setDate(d.getDate() + days);
    return weekdays[d.getDay()];
  }
  
  return (
    <div id="forecast-container">
      {weatherData.slice(0, 5).map((data, i) => {
        return(
          <div key={i} className="forecast-tile">
            <h2>{(!i) ? 'Today' : weekday(i)}</h2>
            <ForecastTile weatherData={data}/>
          </div>
        )
      })}
    </div>
  );
}
