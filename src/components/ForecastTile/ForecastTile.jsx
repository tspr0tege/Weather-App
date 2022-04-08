import React from 'react';
import icons from '../../data/icons';
import './ForecastTile.css'

export default ({ weatherData }) => {
  let {weather, wind_spd, wind_cdir, temp, min_temp} = weatherData;
  let { icon, description } = weather;

  return(
    <>
      <img src={icons[icon]} alt="Tonight forecast icon" />
      <p>{description}</p>
      <p><span className="degrees">{Math.floor(temp*1.8 + 32)}°</span> F</p>
      <div>
        <h3>Wind:</h3>
        <p>{wind_spd} {wind_cdir}</p>
      </div>
    </>
  );
}