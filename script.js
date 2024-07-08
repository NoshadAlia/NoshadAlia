const apiKey = "e51424ea0c378e1e93a883cf18be1f04";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

const searchBox = document.getElementById("Box");
const searchBtn = document.getElementById("Btn");
const wearhericon = document.getElementById("wearhericon");


async function checkWeather(city) {
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);

    
   
        let data = await response.json();

    console.log(data);

    document.getElementById("city").innerHTML = '<i class="fa fa-map-marker me-2 text-red-700" aria-hidden="true"></i> ' + data.name;
    document.getElementById("temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.getElementById("condition").innerHTML = data.weather[0].main;
    document.getElementById("humidity").innerHTML = data.main.humidity + "%";
    document.getElementById("wind").innerHTML = data.wind.speed + " Km/h";

    if(data.weather[0].main == "Clouds"){
        wearhericon.src = "imge/cloud.png"
    }
    else if(data.weather[0].main == "Clear"){
        wearhericon.src = "imge/clear.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        wearhericon.src = "imge/drizzle.png"
    }
    else if(data.weather[0].main == "Rain"){
        wearhericon.src = "imge/rain.png"
    }
    else if(data.weather[0].main == "Haze"){
        wearhericon.src = "imge/haze.png"
    }


    

    
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

