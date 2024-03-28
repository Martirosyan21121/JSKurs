$(document).ready(function () {
    $('#searchBtn').click(function () {
        let location = $('#locationInput').val().trim();
        if (location !== '') {
            fetchWeatherData(location);
        } else {
            alert("Please enter the location.")
            displayErrorMessage('Please enter the location.');
        }
    });


    function fetchWeatherData(location) {
        let apiKey = '';
        let currentWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=' + apiKey;
        let forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + location + '&appid=' + apiKey;

        $.when(
            $.getJSON(currentWeatherUrl),
            $.getJSON(forecastUrl)
        ).done(function (currentWeatherData, forecastData) {
            displayCurrentWeather(currentWeatherData[0]);
            displayForecast(forecastData[0]);
        }).fail(function (jqXHR, textStatus, errorThrown) {
            displayErrorMessage('Error fetching weather data. Please enter a valid location.');
        });
    }

    function displayCurrentWeather(data) {
        let temperature = Math.round(data.main.temp - 273.15);
        let humidity = data.main.humidity;
        let windSpeed = data.wind.speed;
        let weatherIcon = data.weather[0].icon;
        let selectedCityInput = document.getElementById('locationInput');
        let currentWeatherHtml = `
            <div class="forecast-item2">
                <h2 style="color: #007bff">Current Weather in ${selectedCityInput.value.charAt(0).toUpperCase() + selectedCityInput.value.slice(1)}</h2>
                <h4 style="color: #0066d2">Temperature: ${temperature}°C</h4>
                <h4 style="color: #0066d2">Humidity: ${humidity}%</h4>
                <h4 style="color: #0066d2">Wind Speed: ${windSpeed} m/s</p>
                <img src="https://openweathermap.org/img/wn/${weatherIcon}.png" alt="Weather Icon">
            </div>
         <h2 style="text-align: center; color: #007bff">5-Day Forecast in ${selectedCityInput.value.charAt(0).toUpperCase() + selectedCityInput.value.slice(1)}</h2>
`;

        $('#weatherData').html(currentWeatherHtml);
    }

    function displayForecast(data) {
        let forecastHtml = '<p></p>';
        let forecastList = data.list;

        for (let i = 0; i < forecastList.length; i += 8) {
            let forecast = forecastList[i];
            let date = new Date(forecast.dt * 1000);
            let temperatureHigh = Math.round(forecast.main.temp_max - 273.15);
            let temperatureLow = Math.round(forecast.main.temp_min - 273.15);
            let weatherIcon = forecast.weather[0].icon;

            forecastHtml += `
                <div class="forecast-item">
                    <h3 style="color: #007bff"> ${date.toDateString()}</h3>
                    <h4 style="color: #0056b3">Temperature High: ${temperatureHigh}°C</h4>
                    <h4 style="color: #0056b3">Temperature Low: ${temperatureLow}°C</h4>
                    <img src="https://openweathermap.org/img/wn/${weatherIcon}.png" alt="Weather Icon">
                </div> 
            `;
        }
        $('#forecastData').html(forecastHtml);
    }

    function displayErrorMessage(message) {
        $('#weatherData').html('<p style="color: red">' + message + '</p>');
        $('#forecastData').empty();
    }
});

document.addEventListener('DOMContentLoaded', function () {
    let citySelect = document.getElementById('selectCity');
    let selectedCityInput = document.getElementById('locationInput');

    citySelect.addEventListener('change', function () {
        let selectedOption = citySelect.options[citySelect.selectedIndex];
        selectedCityInput.value = selectedOption.textContent;
    });
});

