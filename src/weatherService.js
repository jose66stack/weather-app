// weatherService.js
import { async } from "q";

const API_KEY = "c3d7ba24255459ad21867624190e18b6";

const iconCode = (iconId) =>
  `https://openweathermap.org/img/wn/${iconId}@2x.png`;

const getFormattedWeatherData = async (city, units = "metric") => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

  const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });

  const { weather, main, wind, sys, name } = data;

  // Ensure the 'weather' array is not empty
  const { description, icon } = weather.length > 0 ? weather[0] : {};

  return {
    description,
    iconCode: icon ? iconCode(icon) : null, // Use iconCode only if icon is available
    temp: main.temp,
    feels_like: main.feels_like,
    temp_min: main.temp_min,
    temp_max: main.temp_max,
    pressure: main.pressure,
    humidity: main.humidity,
    speed: wind.speed,
    country: sys.country,
    name,
  };
};

export { getFormattedWeatherData };
