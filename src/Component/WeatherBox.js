import React from 'react'

const WeatherBox = ({weather, today, ImgChange}) => {
  console.log(weather)
  return (
    <div className='weatherApp'>
    <div className='container'>
        <ImgChange></ImgChange>
       <div className='title'>
          <p className='Temperature'>{weather?.main.temp} &#8451;</p>
          <h1 className='city'>{weather?.name}</h1>
          <p  className='description'>{weather?.weather[0].description}</p>
       </div>
       <div className='Detail'>
          <p className='date'> {today.getFullYear()} . { today.getMonth() + 1 } . {today.getDate()}</p>
          <p className='detail-content'>
            <span>Max/Min Temp</span>
            <span>{weather?.main.temp_max} &#8451;/ {weather?.main.temp_min} &#8451;</span>
          </p>
          <p className='detail-content'>
            <span>Cloudy</span>
            <span>{weather?.clouds.all} %</span>
          </p>
          <p className='detail-content'>
            <span>Humidity</span>
            <span>{weather?.main.humidity} %</span>
          </p>
          <p className='detail-content'>
            <span>Windy</span>
            <span>{weather?.wind.speed} km/h</span>
          </p>
       </div>
    </div>
</div>
  )
}

export default WeatherBox;
