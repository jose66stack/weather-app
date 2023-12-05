import React, { useEffect, useState } from "react";
import hotBg from "./assets/hot.jpg";
import coldBG from "./assets/cold.jpg";
import { Descriptions } from "./components/Descriptions";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { getFormattedWeatherData } from "./weatherService";

function App() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData("paris");
      setWeather(data);
    };

    fetchWeatherData();
  }, []);

  return (
    <div className="app" style={{ backgroundImage: `url(${coldBG})` }}>
      <div className="overlay">
        {weather && (
          <div className="container">
            <div className="section section__inputs">
              <input type="text" name="city" placeholder="Enter City..." />
              <button>°F</button>
            </div>

            <div className="section section__temperature">
              <div className="icon">
                <h3>{`${weather.name}, ${weather.country}`}</h3>
                <TiWeatherPartlySunny />
                <h3>Cloudy</h3>
              </div>
              <div className="temperature">
                <h1>36 °C</h1>
              </div>
            </div>

            <Descriptions />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
