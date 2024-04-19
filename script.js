const heading = document.getElementById('heading')
var inputvalue = document.querySelector('#search-field')
var submitButton = document.querySelector('button');
var city = document.querySelector('#cityResults')
var main = document.querySelector('#main')
var description = document.querySelector('#description')
var temperature = document.querySelector('#temperature')
var wind = document.querySelector('#wind')

apik = "fadfb0db4d80af6241de878433f80f89"


function conversion(val) {

    return (val - 273).toFixed(1)

}

submitButton.addEventListener('click', function() {

    heading.style.color = randomColor();

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
    .then(res => res.json())
    .then(data =>
        {

            document.querySelector("#search-result-container").style.opacity = "1"; 

            let nameval = data['name']
            let descripOne = data['weather']['0']['main']
            let temp = data['main']['temp']
            let windspeed = data['wind']['speed']
            city.innerHTML = `Weather of <span>${nameval}<span>`;
            main.innerHTML = `Sky Conditions: <span> ${descripOne}<span>`;
            temperature.innerHTML = `Temperature: <span> ${conversion(temp)}°C</s<span>`;
            wind.innerHTML = `Wind Speed: <span> ${windspeed} Km/hr<span>`;


            // Implement an Animation depending upon the Weather Condition {descripOne}.


            // if(descripOne == "Clouds"){
            //     const animeDiv = document.createElement('div');
            //     const animeImg = document.createElement('img');

            //     animeDiv.style.border = "solid 2px black";
            //     animeDiv.add.classList = "animeDiv";

            //     document.getElementById('myAnime' ).appendChild(animeDiv);
            //     animeDiv.append(animeImg)

            // }
        })

        .catch(err => alert('Enter a City name !!!'))
})


function randomColor() {

    let str = "0123456789abcdef";
    let colorStr = "#";

    for(let i = 0; i < 6; i++) {
        randomIndex = Math.floor(Math.random() * str.length);
        colorStr += str[randomIndex];
    }

    return colorStr;

}
