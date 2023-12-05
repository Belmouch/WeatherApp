const apiKey = "206f0b011b38d16caace529d6bc07d6c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon =document.querySelector(".weather-icon")

async function ChekWea(city){
    const response = await fetch(apiUrl + city +` &appid=${apiKey}`);
    



    var data = await response.json();

    

    document.querySelector(".city").innerHTML = data.name;
    
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
   
    document.querySelector( ".temp").innerHTML= Math.round(data.main.temp) + "°C";
    document.querySelector(".wind").innerHTML = data.wind.speed+"km/h";

    if (data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png"
    }
    else if (data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png"
    }
    else if (data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png"
    }
    else if (data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png"
    }
    else if (data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png"
    }
    else if (data.weather[0].main == "Sow"){
        weatherIcon.src = "images/snow.png"
    }
    document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click" , ()=>{
    ChekWea(searchBox.value);


})
