import axios from "axios"
import chalk from "chalk"

const API_KEY = "d471728473691c83d8bfd4a944ca8630"

function displayWeather(city, weatherData) {
  console.log(chalk.yellow(`\nInformación del clima: ${city}:`));
  console.log(
    chalk.yellow(
      "☀️🌙❄️🌡️💧🌈🌪️🌧️☀️🌙❄️🌡️💧🌈🌪️🌧️☀️🌙❄️🌡️💧🌈🌪️🌧️☀️🌙❄️🌡️💧🌈🌪️🌧️"
    )
  );
  console.log(chalk.cyan("Descripción:"), weatherData.weather[0].description);
  console.log(chalk.cyan("Temperatura:"), `${weatherData.main.temp} °C`);
  console.log(chalk.cyan("Humedad:"), `${weatherData.main.humidity}%`);
  console.log(
    chalk.cyan("Velocidad del Viento:"),
    `${weatherData.wind.speed} m/s`
  );
  console.log(
    chalk.yellow("☀️🌙❄️🌡️💧🌈🌪️🌧️☀️🌙❄️🌡️💧🌈🌪️🌧️☀️🌙❄️🌡️💧🌈🌪️🌧️\n")
  );
}

function handleError(err) {
  console.log(chalk.red("Error: "), err.message)
  process.exit(1)
}

async function getWeather(city) {
  try {
    let endPoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    const response = await axios.get(endPoint, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric"
      }
    })
    console.log(response)
    return response.data
  } catch (err) {
    console.error(chalk.red(err))
    throw new Error(`No es posible obtener la innforamcion de la ciudad: ${city}`)
  }
}


function initApp() {
  let city = "Mar del Plata" || process.argv[2]

  if (!city) {
    console.log(chalk.red("Por favor, proporciona el nombre de lugar o ciudad"))
    console.log(chalk.red("Ejecuta la instruccion de la siguiente forma: node app.js [nombre ciudad]"))
  }

  getWeather(city)
    .then((watherData) => displayWeather(city, watherData))
    .catch(handleError)
}

initApp()


