const DEFAULT_CITY = "Delhi";
const API_KEY = "0b9c5f5d4485861396ea55abc7a91f3e";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

async function getWeather(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    document.querySelector("#temp").innerText = Math.round(data.main.temp) + "°C";
    document.querySelector("#city").innerText = data.name;
    document.querySelector("#humidity").innerText = data.main.humidity + "%";
    document.querySelector("#wind-speed").innerText = data.wind.speed + "m/s";

    if (data.weather[0].main === "Clear") {
        document.querySelector("#weather-img").innerText = "☀️";
    } else if (data.weather[0].main === "Clouds") {
        document.querySelector("#weather-img").innerText = "☁️";
    } else if (data.weather[0].main === "Rain") {
        document.querySelector("#weather-img").innerText = "🌧️";
    } else if (data.weather[0].main === "Snow") {
        document.querySelector("#weather-img").innerText = "❄️";
    } else if (data.weather[0].main === "Thunderstorm") {
        document.querySelector("#weather-img").innerText = "⛈️";
    }else if (data.weather[0].main === "Mist") {
        document.querySelector("#weather-img").innerText = "🌤️";
    }

}

document.querySelector('.search-icon').addEventListener('click', () => {
    if (document.querySelector('#search').value === '') {
        alert('Please enter a city');
        return;
    }

    const city = document.querySelector('#search').value || DEFAULT_CITY;
    
    const url = `${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`;
    getWeather(url);
});
