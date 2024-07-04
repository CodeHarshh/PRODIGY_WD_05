
const city=document.querySelector(".city");
const temp=document.querySelector(".temp");
const humidity=document.querySelector(".humidity");
const wind=document.querySelector(".wind");
const Searchbox=document.querySelector(".search input");
const SearchBtn=document.querySelector(".search button");
const weathericon=document.querySelector(".weather-icon");

const apiKey = "139275636934b6926c727674a814e1a2";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric`;


async function checkWeather(cityname){
 const response=await fetch(apiUrl +`&q=${cityname}`+ `&appid=${apiKey}`);
 
 if (response.status === 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
} else {
 
 
 let data = await response.json();
 console.log(data);

 city.innerHTML=data.name;
 temp.innerHTML=Math.round(data.main.temp)+"°c";
 humidity.innerHTML=data.main.humidity+"%";
 wind.innerHTML=data.wind.speed+" km/hr";

 switch (data.weather[0].main) {
    case "Clouds":
        weathericon.src = "images/clouds.png";
        break;
    case "Clear":
        weathericon.src = "images/clear.png";
        break;
    case "Rain":
        weathericon.src = "images/rain.png";
        break;
    case "Drizzle":
        weathericon.src = "images/drizzle.png";
        break;
    case "Mist":
        weathericon.src = "images/mist.png";
        break;
    default:
        weathericon.src = "images/rain.png";

}

document.querySelector(".weather").style.display="block";  
}



}



SearchBtn.addEventListener("click",()=>{
    checkWeather(Searchbox.value);
})