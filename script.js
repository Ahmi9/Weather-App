const apiKey = "b3cf1ad70810437f9d394312252610";

document.getElementById("getWeather").addEventListener("click", () => {
  const city = document.getElementById("city").value.trim();
  if (city === "") {
    alert("Please enter a city name!");
    return;
  }

  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.error) {
        document.getElementById("weatherInfo").innerHTML = `<p>City not found!</p>`;
        return;
      }

      const html = `
        <h2>${data.location.name}, ${data.location.country}</h2>
        <img src="https:${data.current.condition.icon}" alt="icon">
        <h3>${data.current.temp_c}°C</h3>
        <p>${data.current.condition.text}</p>
        <p>Humidity: ${data.current.humidity}%</p>
        <p>Wind: ${data.current.wind_kph} km/h</p>
      `;
      document.getElementById("weatherInfo").innerHTML = html;
    })
    .catch(err => {
      document.getElementById("weatherInfo").innerHTML = `<p>Error fetching data</p>`;
      console.error(err);
    });
});
