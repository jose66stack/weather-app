import React from "react";
import hotBg from "./assets/hot.jpg";
import coldBG from "./assets/cold.jpg";
import { Descriptions } from "./components/Descriptions";
import { TiWeatherPartlySunny } from "react-icons/ti";

function App() {
  return (
    <div className="app" style={{ backgroundImage: `url(${coldBG})` }}>
      <div className="overlay">
        <div className="container">
          <div className="section section__inputs">
            <input type="text" name="city" placeholder="Enter City..." />
            <button>°F</button>
          </div>

          <div className="section section__temperature">
            <div className="icon">
              <h3>London, GB</h3>
              <TiWeatherPartlySunny />
              <h3>Cloudy</h3>
            </div>
            <div className="temperature">
              <h1>36 °C</h1>
            </div>
          </div>

          <Descriptions />
        </div>
      </div>
    </div>
  );
}

export default App;
