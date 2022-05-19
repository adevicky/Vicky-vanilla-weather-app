function formattedTime(date) {
let days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
     let day =days[currentWeather.getDay()];
     let hours= currentWeather.getHours();
     if (hours < 10) {
         hours= `0${hours}`;
     }
let minutes= currentWeather.getMinutes();
if (minutes < 10)
minutes= `0${minutes}`;   

return `${day}, ${hours}:${minutes}`;
}
let currentWeather= new Date();
let realTme= document.querySelector("#current-date");
realTme.innerHTML=formattedTime(currentWeather);

function displayWeatherCondition(response) {
  document.querySelector("#location").innerHTML =response.data.name;
    document.querySelector("#temprature").innerHTML = Math.round(response.data.main.temp);
    document.querySelector("#description").innerHTML = response.data.weather[0].main;
     document.querySelector("#humidity").innerHTML = response.data.main.humidity;
      document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed);
    }

function search(city) {
   let apiKey= "6e28aff5cc0608c0525e4afec6ebc572";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; 
axios.get(apiUrl).then(displayWeatherCondition);

 }
function searchCurrentCity(event) {
    event.preventDefault();
    let city="New York";
    let newCity= document.querySelector("#city-input");
search(city)
}


let searchForm= document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCurrentCity);

function searchLocation(position) {
   let apiKey= "6e28aff5cc0608c0525e4afec6ebc572";
   let apiUrl= `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}`;
   axios.get(apiUrl).then(displayWeatherCondition);
}
search(city);
