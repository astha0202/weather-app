alert("welcome to Astha's weather report !!!");
const apikey="f97071bd687929383bd79892a21d403f";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search");
const weathericon=document.querySelector(".weather img");

async function checkWeather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        if (data.weather[0].main=="Clouds"){
            weathericon.src="images/clouds.png";
        } 
        else if(data.weather[0].main=="Clear"){
            weathericon.src="images/clear.png";
        }
        else if(data.weather[0].main=="Dizzle"){
            weathericon.src="images/dizzle.png";
        }
        else if(data.weather[0].main=="Humidity"){
            weathericon.src="images/humidity.png";
        }
        else if(data.weather[0].main=="Mist"){
            weathericon.src="images/mist.png";
        }
        else if(data.weather[0].main=="Rain"){
            weathericon.src="images/rain.png";
        }
        else if(data.weather[0].main=="Snow"){
            weathericon.src="images/snow.png";
        }
        else if(data.weather[0].main=="Wind"){
            weathericon.src="images/wind.png";
        }
    }

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";

    document.querySelector(".weather").style.display="block";

}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

