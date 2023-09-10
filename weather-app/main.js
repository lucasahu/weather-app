import './style.css'

const app = document.querySelector('#app');
const searchBar = document.createElement('input');
const lookUpBtn = document.createElement('button');

const display = document.createElement('div');
const displayName = document.createElement('p');
const displayLocaltime = document.createElement('p');
const displayCountry = document.createElement('p');

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
  display.appendChild(displayName);
  display.appendChild(displayCountry);
  display.appendChild(displayLocaltime);
  app.appendChild(display);
}

app.appendChild(searchBar);
app.appendChild(lookUpBtn);

lookUpBtn.addEventListener('click', lookUp);
