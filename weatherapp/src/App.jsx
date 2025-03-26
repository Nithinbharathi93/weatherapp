import { useState } from "react";
import axios from "axios";

const DOMAIN_NAME = import.meta.env.VITE_DOMAIN;

function App() {
  const [city, setCity] = useState("");
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchForecast = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${DOMAIN_NAME}/forecast?city=${city}`);
      setForecast(response.data);
    } catch (error) {
      setError("City not found or API error");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-900 text-white flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold text-center mb-4">🌤 Weather Forecast</h1>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Enter City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full p-3 rounded-lg bg-white bg-opacity-20 focus:outline-none text-black placeholder-gray-700"
          />
          <button
            onClick={fetchForecast}
            className="bg-blue-500 hover:bg-blue-700 transition-all duration-300 text-white px-5 py-3 rounded-lg font-semibold"
          >
            Get Forecast
          </button>
        </div>

        {loading && <p className="text-center mt-4">Fetching data...</p>}
        {error && <p className="text-red-400 text-center mt-4">{error}</p>}

        {forecast && (
          <div className="mt-6 p-4 bg-white bg-opacity-20 rounded-lg">
            <h2 className="text-2xl font-bold text-center">
              {forecast.city.name}, {forecast.city.country}
            </h2>
            <div className="flex flex-col items-center mt-4">
              {forecast.list.slice(0, 1).map((item, index) => (
                <div key={index} className="text-center">
                  <p className="text-lg font-semibold">{item.dt_txt}</p>
                  <p className="text-2xl font-bold">{item.main.temp}°C</p>
                  <p className="text-md capitalize">{item.weather[0].description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
