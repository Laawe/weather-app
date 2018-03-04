//elementos html
let input = document.getElementById("input");
let buttonIndex = document.getElementById("btn-index");
let container = document.getElementById("container");
//
//variable url definida como global 
//let url;

//función para pintar datos clima
/*function printClimate(data){
    console.log(data)
}

//función para obtener latitud y longitud
function getLatitudeAndLongitude(data){
    console.log(data.results[0].geometry.location);
    let latitude = data.results[0].geometry.location.lat;
    let longitude = data.results[0].geometry.location.lng;

    //dark sky weather api
    let weatherKey = `64b26295ef10201b00f1f8f21971cfcf`;

    //request para clima con ajax
    $.ajax({
        url: `https://api.darksky.net/forecast/${weatherKey}/${latitude},${longitude}`
    }).done(printClimate);

}*/

function getClimate(data) {
    let name = data.name;
    //console.log(data.weather[0].description);
    let description = data.weather[0].description;
    //console.log(data.main.temp);
    let temp = data.main.temp;
    //console.log(data.main.temp_max);
    let maxTemp = data.main.temp_max;
    //console.log(data.main.temp_min);
    let minTemp = data.main.temp_min;
    //console.log(data.main.humidity);
    let humidity = data.main.humidity;

    //
    let output = `
    <div class="row">
    <div class="col s12 m5 offset-m3">
      <div class="card-panel teal">
        <span class="white-text">
        ${name}        
        </span>
      </div>
    </div>
  </div>
  
  <div class="row">
  <div class="col s12 m5 offset-m3">
    <div class="card-panel #ef6c00 orange darken-3">
      <ul class="white-text">
        <li>Descripción del clima: ${description}</li>
        <li>Temperatura actual: ${temp}</li>
        <li>Temperatura máxima: ${maxTemp}</li>
        <li>Minima temperatura: ${minTemp}</li>
        <li>Humedad: ${humidity} %</li>    
             
      </ul>
    </div>
  </div>
</div>`

    container.innerHTML = output;

}

//evento boton
buttonIndex.addEventListener("click", geolocalization);

function geolocalization() {
    let adress = input.value;
    let apiKey = `217fc9465c20614e893256a349f0994f`;

    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?q=${adress}&units=metric&lang=es&APPID=${apiKey}`
    }).done(getClimate);
}