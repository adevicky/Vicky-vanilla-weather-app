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
