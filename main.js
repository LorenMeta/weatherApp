const api = {
    key: "afaf9f8d48cff6cafd32e23220bcfdbf",
    base: "https://api.openweathermap.org/data/2.5/"
}

const searchBox = document.querySelector('.search-box');
searchBox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13) { //keyCode == 13 its Enter on the keyboard
        getResults(searchBox.value)
        console.log(searchBox.value)
    }
}

function getResults(query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}}`)
    .then(weather => {
        return weather.json()
    }).then(displayResults);
}

function displayResults(weather){
    console.log(weather)
}