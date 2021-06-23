import React from 'react';

export default ({ weatherData }) => {
  let { name, temperature, temperatureUnit, shortForecast, windSpeed, windDirection, icon } = weatherData;

  return(
    <div className="forecast-tile">
      <div>
        {/* <!-- name --> */}
        <h2>{name}</h2>
        {/* <!-- temperature temperatureUnit --> */}
        <p><span className="degrees">{temperature}</span> {temperatureUnit}</p>
        {/* <!-- shortForecast --> */}
        <p>{shortForecast}</p>
      </div>
      <div>
        <h2>Wind:</h2>
        {/* <!-- windSpeed windDirection --> */}
        <p>{windSpeed} {windDirection}</p>
      </div>
      {/* <!-- icon --> */}
      <img src={icon} alt={`${name} forecast icon`} />
    </div>
  );
}