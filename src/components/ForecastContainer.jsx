import React from 'react';
import ForecastTile from './ForecastTile.jsx';

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
          <div>
            <p>{(!i) ? 'Today' : weekday(i)}</p>
            <ForecastTile weatherData={data}/>
          </div>
        )
      })}
    </div>
  );
}
