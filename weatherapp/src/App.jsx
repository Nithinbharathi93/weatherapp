import { useState } from 'react'
import axios from 'axios';


const DOMAIN_NAME = import.meta.env.VITE_DOMAIN;
const PORT = import.meta.env.VITE_PORT;

function App() {  
  const [ city, setCity ] = useState("");
  const [ forecast, setForecast ] = useState(null);

  const fetchForcase = async () => {
    try {
      const response = await axios.get(`${DOMAIN_NAME}/forecast?city=${city}`);
      console.log(response.data);
      setForecast(response.data);
       
    } catch (error) {
      console.log('Error fetching data..!', error);
    }
  }

  return (
    <>
      <div>
        <h1>Weather forecast</h1>
        <input type="text" placeholder='Enter City' value={city} onChange={(e) => setCity(e.target.value)}/>
        <button onClick={fetchForcase}>Get ForeCast</button>
        {forecast && (
          <div>
            <h2>{forecast.city.name}, {forecast.city.country}</h2>
            {forecast.list.slice(0, 1).map((item, index) => (
              <div key={index}>
                <p><strong>{item.dt_text}</strong></p>
                <p>Temp: {item.main.temp} C</p>
                <p>Weather: {item.weather[0].description}</p>
              </div>
            ))}
          </div>
        )
        }
      </div>
    </>
  );
}

export default App;