import React from 'react';
import icons from '../data/icons'

export default ({ weatherData }) => {
  let {weather, wind_spd, wind_cdir, temp, min_temp} = weatherData;
  let { icon, description } = weather;

  return (
    <div id="nearest-weather">
      {/* <!-- icon --> */}
      <img src={icons[icon]} alt="Tonight forecast icon" />
      <div  className="left-ctr">
        <h2>Wind:</h2>
        <p>{wind_spd} {wind_cdir}</p>
      </div>
      <div>
        <p><span className="degrees">{temp}</span> C</p>
        <p>{description}</p>
      </div>
    </div>
  );
}
