async function lookUp(place) {
    const data = await fetch(`https://api.weatherapi.com/v1/current.json?key=bf28bf2de8284e9981d22810230809&q=${place}`, {mode: 'cors'});
    const target = await data.json();
    console.log(target);
}

export { lookUp };