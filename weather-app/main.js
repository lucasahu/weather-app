import './style.css'

const app = document.querySelector('#app');
const loading = document.createElement('div');
const inputContainer = document.createElement('div');
const searchBar = document.createElement('input');
const lookUpBtn = document.createElement('button');

const displayName = document.createElement('p');
const displayLocaltime = document.createElement('p');
const displayCountry = document.createElement('p');
const displayTempC = document.createElement('p');
const displayCondition = document.createElement('p');
const displayHumidity = document.createElement('p');
const displayWindSpeed = document.createElement('p');
const displayWindDir = document.createElement('p');
const displayWindDeg = document.createElement('p');
const displayTempFeel = document.createElement('p');
const displayPrecip = document.createElement('p');
const displayUv = document.createElement('p');

const display = document.createElement('div');
const descriptionContainer = document.createElement('div');
const weatherContainer = document.createElement('div');
const windContainer = document.createElement('div');
const miscCointainer = document.createElement('div');

loading.innerHTML = '<img src="./public/loading.gif"/>'

display.classList.add('weather-display');
descriptionContainer.classList.add('description-container', 'container');
weatherContainer.classList.add('weather-container', 'container');
windContainer.classList.add('wind-container', 'container');
miscCointainer.classList.add('misc-container', 'container');

inputContainer.classList.add('input-container');
lookUpBtn.textContent = 'Go';
lookUpBtn.classList.add('lookup-btn');
searchBar.classList.add('search-bar');

async function lookUp() {
  if (display.innerHTML === '') {
    app.appendChild(loading);
  } else {
    display.replaceWith(loading);
  }
  const place = searchBar.value;
  const data = await fetch(`https://api.weatherapi.com/v1/current.json?key=bf28bf2de8284e9981d22810230809&q=${place}`, {mode: 'cors'});
  const target = await data.json();
  render(target);
  searchBar.value = '';
}

function render(target) {
  console.log(target)
  displayName.textContent = target.location.name;
  displayLocaltime.textContent = target.location.localtime;
  displayCountry.textContent = target.location.country;
  displayTempC.textContent = target.current.temp_c + ' C°';
  displayCondition.textContent = target.current.condition.text;
  displayHumidity.textContent = 'Humidity: ' + target.current.humidity + '%';
  displayWindSpeed.textContent = 'Wind speed: ' + target.current.wind_kph + ' kp/h';
  displayWindDir.textContent = 'Wind direction: ' + target.current.wind_dir;
  displayWindDeg.textContent = 'Wind degree: ' + target.current.wind_degree + '°';
  displayTempFeel.textContent = 'Feels like: ' + target.current.feelslike_c + ' C°';
  displayPrecip.textContent = 'Precipitation: ' + target.current.precip_mm + ' mm';
  displayUv.textContent = 'UV Level: ' + target.current.uv;
  descriptionContainer.appendChild(displayName);
  descriptionContainer.appendChild(displayCountry);
  descriptionContainer.appendChild(displayLocaltime);
  weatherContainer.appendChild(displayTempC);
  weatherContainer.appendChild(displayCondition);
  weatherContainer.appendChild(displayHumidity);
  windContainer.appendChild(displayWindSpeed);
  windContainer.appendChild(displayWindDir);
  windContainer.appendChild(displayWindDeg);
  miscCointainer.appendChild(displayTempFeel);
  miscCointainer.appendChild(displayPrecip);
  miscCointainer.appendChild(displayUv);
  display.appendChild(descriptionContainer);
  display.appendChild(weatherContainer);
  display.appendChild(windContainer);
  display.appendChild(miscCointainer);
  loading.replaceWith(display);
}

inputContainer.appendChild(searchBar);
inputContainer.appendChild(lookUpBtn);
app.appendChild(inputContainer);

lookUpBtn.addEventListener('click', lookUp);
