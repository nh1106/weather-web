import './App.css';
import { useEffect, useState } from 'react';
import WeatherBox from './Component/WeatherBox';
import WeatherBtn from './Component/WeatherBtn';
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [weather, setWeather] = useState(null)
  const today = new Date();
  const cities = ['PARIS', 'NEW YORK', 'TOKYO' , 'LONDON']
  const [city,setCity] = useState("")
  const [loading, setLoading] = useState(false);


  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude
        let lon = position.coords.longitude
        getWeatherByCurrentLocation(lat,lon)
    });
  }

  const getWeatherByCurrentLocation = async(lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1316e1f5a279dadd340832bcd470f4a0&units=metric`
    setLoading(true)
    let response = await fetch (url)
    let data = await response.json();
    setWeather(data)
    setLoading(false)
  }

  const getWeatherByCity = async() =>{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1316e1f5a279dadd340832bcd470f4a0&units=metric`
    setLoading(true)
    let response = await fetch (url)
    let data = await response.json()
    console.log(data)
    setWeather(data)
    setLoading(false)
  }

  const ImgChange = (props) => {
    if (weather?.sys.country === 'KR'){
      return <div className='img'>
      <img src='https://images.unsplash.com/photo-1615314568729-513d6771d897?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80'></img>
      </div>
    }
    if (weather?.sys.country === "FR"){
      return <div className='img'>
      <img src='https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80'></img>
      </div>
    }
    if (weather?.sys.country === "US"){
      return <div className='img'>
      <img src='https://images.unsplash.com/photo-1522083165195-3424ed129620?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1597&q=80'></img>
      </div>
    }
    if (weather?.sys.country === "JP"){
      return <div className='img'>
      <img src='https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'></img>
      </div>
    }
    if (weather?.sys.country === "GB"){
      return <div className='img'>
      <img src='https://images.unsplash.com/photo-1486299267070-83823f5448dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80'></img>
      </div>
    }
  }


  useEffect( () =>{
    if(city==""){
      getCurrentLocation()
    } else{
      getWeatherByCity()
    }
  },[city]);

  const handleCityChange = (city) => {
    if (city === "current") {
      setCity("");
    } else {
      setCity(city);
    }
  };

  
  return (
    <>
    {
      loading ?    <div className='spinners'>
      <ClipLoader color = "#fff" loading={loading} size={150}/>
    </div> : <><WeatherBox weather={weather} today ={today} ImgChange = {ImgChange}/><WeatherBtn cities={cities} setCity={setCity} handleCityChange = {handleCityChange}/></>
    }
  
    
    </>
  );
 
}

export default App;
