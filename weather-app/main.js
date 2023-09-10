import './style.css'

const app = document.querySelector('#app');
const searchBar = document.createElement('input');
const lookUpBtn = document.createElement('button');

const display = document.createElement('div');
const displayName = document.createElement('p');
const displayLocaltime = document.createElement('p');
const displayCountry = document.createElement('p');
const displayTempC = document.createElement('p');
const displayCondition = document.createElement('p');
const displayHumidity = document.createElement('p');
const displayWindSpeed = document.createElement('p');
const displayWindDir = document.createElement('p');
const displayTempFeel = document.createElement('p');
const displayPrecip = document.createElement('p');
const displayUv = document.createElement('p');

lookUpBtn.textContent = 'Go';

async function lookUp() {
  const place = searchBar.value;
  const data = await fetch(`https://api.weatherapi.com/v1/current.json?key=bf28bf2de8284e9981d22810230809&q=${place}`, {mode: 'cors'});
  const target = await data.json();
  render(target)
}

function render(target) {
  console.log(target)
  displayName.textContent = target.location.name;
  displayLocaltime.textContent = target.location.localtime;
  displayCountry.textContent = target.location.country;
  displayTempC.textContent = target.current.temp_c + ' C°';
  displayCondition.textContent = target.current.condition.text;
  displayHumidity.textContent = 'Humidity: ' + target.current.humidity + '%';
  displayWindSpeed.textContent = 'Wind: ' + target.current.wind_kph + ' kp/h';
  displayWindDir.textContent = 'Wind Direction: ' + target.current.wind_dir;
  displayTempFeel.textContent = 'Feels like: ' + target.current.feelslike_c + ' C°';
  displayPrecip.textContent = 'Precipitation: ' + target.current.precip_mm + ' mm';
  displayUv.textContent = 'UV Level: ' + target.current.uv;
  display.appendChild(displayName);
  display.appendChild(displayCountry);
  display.appendChild(displayLocaltime);
  display.appendChild(displayTempC);
  display.appendChild(displayCondition);
  display.appendChild(displayHumidity);
  display.appendChild(displayWindSpeed);
  display.appendChild(displayWindDir);
  display.appendChild(displayTempFeel);
  display.appendChild(displayPrecip);
  display.appendChild(displayUv);
  app.appendChild(display);
}

app.appendChild(searchBar);
app.appendChild(lookUpBtn);

lookUpBtn.addEventListener('click', lookUp);
