import React from 'react'

const WeatherBtn = ({cities, setCity, handleCityChange}) =>{ 

    return  (
       <>
        <div className='selectcity'>
                <ul>
                    <li  onClick={() => handleCityChange("current")}>CURRENT LOCATION</li>
                    {cities.map((item, index) => {
                        return(<li key={index} onClick={() => {
                            setCity(item)
                        }}>{item}</li>)
                    })}
                </ul>
        </div>
       </>
    )
}

export default WeatherBtn;