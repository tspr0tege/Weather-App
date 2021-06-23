import React from 'react';
import ForecastTile from './ForecastTile.jsx';

export default ({ weatherData }) => {
  
  return (
    <div id="forecast-container">
      {weatherData.map((dataIndex) => {
        return(
          <ForecastTile weatherData={dataIndex}/>
        )
      })}
    </div>
  );
}
