const apiKey = '534b81d69d5b494a8e4165719241506'; // Replace with your WeatherAPI key

function getWeather() {
    const city = document.getElementById('city-input').value;
    const units = document.querySelector('input[name="units"]:checked').value;
    
    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&units=${units}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('city-name').innerText = data.location.name;
            document.getElementById('temperature').innerText = `Temperature: ${data.current.temp_c}°C`;
            document.getElementById('weather-description').innerText = data.current.condition.text;
            document.getElementById('weather-icon').src = `https:${data.current.condition.icon}`;
            document.querySelector('.weather-info').style.display = 'block';
            return fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=1&aqi=yes&alerts=no&alerts=yes&`)
        })

        .catch(error => {
            alert(error.message);
            console.error('Error fetching weather data:', error);
        });
}



//534b81d69d5b494a8e4165719241506