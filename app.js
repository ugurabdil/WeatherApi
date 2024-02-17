const apiUrl = "https://api.openweathermap.org/data/2.5/";
const apiKey = "914b3f24ea87f0b96723da5b547f32f5";
const searchBar = document.getElementById("searchBar");

searchBar.addEventListener("keypress", (setQuery) => {
  if (setQuery.key === "Enter") getResult(searchBar.value);
});

const getResult = (cityName) => {
  let query = `${apiUrl}weather?q=${cityName}&appid=${apiKey}&units=metric&lang=tr`;
  fetch(query)
    .then((weather) => {
      return weather.json();
    })
    .then(disdplayResult);
};
const disdplayResult = (result) => {
  console.log(result);
  let city = document.querySelector(".city");
  city.innerText = `${result.name}, ${result.sys.country}`;
  let temp = document.querySelector(".temp");
  temp.innerText = `${Math.round(result.main.temp)}°c`;
  let desc = document.querySelector(".desc");
  desc.innerText = `${result.weather[0].description}`;
  let minmax = document.querySelector(".minmax");
  minmax.innerText = `${Math.round(result.main.temp_min)}°c / ${Math.round(
    result.main.temp_max
  )}°c`;
  let Humidity = document.querySelector(".humidity");
  Humidity.innerText = `${result.main.humidity} %`;
  let wind = document.querySelector(".wind");
  wind.innerText = `${Math.round(result.wind.speed)} km/h`;

  let img = document.querySelector(".Weather-icon");
//  let bkimg=
  switch (result.weather[0].main) {
    case "Clear":
      img.src = "/Clear.png";
      document.getElementById("bd").style.background="url(/clearbk.png)";

      break;
    case "Clouds":
      img.src = "/cloudy.png";
      document.getElementById("bd").style.background="url(/cloudd.png)";
      break;
    case "Rain":
      img.src = "/rain.png";
      document.getElementById("bd").style.background="url(/bkrain.png)";
      
      break;
    case "Snow":
        document.getElementById("bd").style.background="url(/snowbk.png)";

      img.src = "/Snow.png";
      break;
  }
};

//
// searcBtn.addEventListener("click",setQuery)
