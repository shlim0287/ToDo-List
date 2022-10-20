const weather = document.querySelector("#weather div:first-child");
const city = document.querySelector("#weather div:last-child");
const API_KEY = "e389ccb08608741f59658963b9ec3c62";


function onGeofine(position){
    const lat=position.coords.latitude;
    const lon=position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
      });
}
function onGeoErr(){
    alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeofine, onGeoErr);