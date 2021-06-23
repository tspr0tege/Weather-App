import React from 'react';

export default ({ weatherData }) => {
  let { icon, windSpeed, windDirection, name, temperature, temperatureUnit, shortForecast, detailedForecast } = weatherData;

  return (
    <div id="nearest-weather">
      {/* <!-- icon --> */}
      <img src={icon} alt="Tonight forecast icon" />
      <div  className="left-ctr">
        <h2>Wind:</h2>
        {/* <!-- windSpeed windDirection --> */}
        <p>{windSpeed} {windDirection}</p>
      </div>
      <div>
        {/* <!-- name --> */}
        <h2>{name}</h2>
        {/* <!-- temperature temperatureUnit --> */}
        <p><span className="degrees">{temperature}</span> {temperatureUnit}</p>
        {/* <!-- shortForecast --> */}
        <p>{shortForecast}</p>
      </div>
      {/* <!-- "detailedForecast"  --> */}
      <p className="left-ctr">"{detailedForecast}"</p>
    </div>
  );
}
