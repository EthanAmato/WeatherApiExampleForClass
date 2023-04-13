import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState()
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${import.meta.env.VITE_API_KEY}`)
      .then(
        (res) => {
          return res.json()
        }).then((data) => {
          console.log(data)
          setData(data)
        })
  }, [])


  if(!data) {
    return null; 
  }
  return (
    < div >
      <p>Latitude: {data.coord.lat}</p>
      <p>Longitude: {data.coord.lon}</p>
      <p>Feels Like: {data.main.feels_like}</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Pressure: {data.main.pressure} hPa</p>
      <p>Description: {data.weather[0].description}</p>
    </div >
  )
}

export default App
