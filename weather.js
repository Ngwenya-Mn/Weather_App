const apiKey = "0b562f592e748db558a01e7fa3a69676";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric`;
const weatherIcon = document.querySelector(".weather-icon");
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const tempElement = document.querySelector(".temp");
const cityElement = document.querySelector(".city");
const humidityElement = document.querySelector(".humidity");
const windElement = document.querySelector(".wind");

async function checkWeather(city) {
  const response = await fetch(`${apiUrl}&q=${city}`);
  const data = await response.json();

  tempElement.textContent = Math.round(data.main.temp) + "°C";
  cityElement.textContent = `${data.name}, ${data.sys.country}`; 
  humidityElement.textContent = `Humidity:${data.main.humidity}%`;
  windElement.textContent = `Wind speed:${data.wind.speed}km/h`;


    switch(data.weather[0].main) {
      case "Clouds":
          weatherIcon.src = "images/clouds.png";
          break;
      case "Clear":
          weatherIcon.src = "images/clear.png";
          break;
      case "Snow":
          weatherIcon.src = "images/snow.png";
          break;
      case "Mist":
          weatherIcon.src = "images/mist.png";
          break;
      case "Drizzle":
          weatherIcon.src = "images/drizzle.png";
          break;
      default:
          weatherIcon.src = "";
    }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

checkWeather();
