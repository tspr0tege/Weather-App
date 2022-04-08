import React from 'react';
import icons from '../../data/icons';
import './ForecastTile.css'

export default ({ weatherData }) => {
  let {weather, wind_spd, wind_cdir, temp, min_temp} = weatherData;
  let { icon, description } = weather;

  return(
    <div>
      <img src={icons[icon]} alt="Tonight forecast icon" />
      <div>
        <h2>Wind:</h2>
        <p>{wind_spd} {wind_cdir}</p>
      </div>
      <div>
        <p><span className="degrees">{Math.floor(temp*1.8 + 32)}</span> F</p>
        <p>{description}</p>
      </div>
    </div>
  );
}