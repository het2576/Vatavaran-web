# Weather App (https://vatavaran-web.netlify.app/)

A **responsive and functional weather app** built with **HTML, CSS, and JavaScript**. This app fetches real-time weather data using an API and displays it in a modern, responsive UI. It allows users to search for weather conditions by city and provides additional details like humidity, wind speed, and more.

## Features

- **Real-Time Weather Data**: Fetches weather details using a weather API (e.g., OpenWeatherMap).
- **Search Functionality**: Allows users to search for weather information by city.
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop devices.
- **Dynamic UI**: Updates weather data dynamically without page reload.
- **Modern Design**: A clean, gradient-based UI with animations and a professional appearance.

## Technologies Used

- **HTML**: For structuring the web app.
- **CSS**: For styling the layout and making it responsive.
- **JavaScript**: For fetching weather data from the API and updating the UI dynamically.
- **Weather API**: [OpenWeatherMap](https://openweathermap.org/) for real-time weather data.

## How It Works

1. **Search**: Enter the name of a city in the search bar and press the search icon.
2. **Fetch Data**: The app uses JavaScript to send a request to the weather API and fetch the relevant weather details.
3. **Update UI**: The fetched weather data is displayed dynamically, including:
   - Weather condition (icon and description)
   - Temperature
   - Location name
   - Humidity percentage
   - Wind speed

## How to Use

### Run Locally

1. Clone this repository:
```bash
   git clone https://github.com/your-username/weather-app.git
   ```
2.	Navigate to the project folder:
   ```bash
  cd weather-app
   ```
3.	Open the index.html file in your favorite browser:
   ```bash
  open index.html
   ```
4.	Ensure you have an active internet connection to fetch weather data from the API.

 Live Demo

 Check out the live demo of the weather app here.
 https://vatavaran-web.netlify.app/

## API Integration

The app fetches weather data from OpenWeatherMap API. Replace API_KEY in the JavaScript code with your actual API key from OpenWeatherMap.
```bash
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`)
  .then(response => response.json())
  .then(data => {
    // Process the weather data here
  });

