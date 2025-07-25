import readline from "readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

const url = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = "87446e9e5a81c7de571b1e4b9880e864";

const getWeather = async (city) => {
  const fullUrl = `${url}?q=${city}&appid=${apiKey}&units=metric`;
  try {
    const response = await fetch(fullUrl);
    if (!response.ok) {
      throw new Error("city not found pls try again");
    }
    const data = await response.json();
    console.log(`\nWeather in ${city}:`);
    console.log(`🌡️ Temperature: ${data.main.temp}°C`);
    console.log(`☁️ Condition: ${data.weather[0].description}`);
    console.log(`💨 Wind: ${data.wind.speed} m/s\n`);
  } catch (error) {
    console.error(error.message);
  }
};

const city = await rl.question("Enter your city name: ");
await getWeather(city);
rl.close();
