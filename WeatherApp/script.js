const searchCity = document.querySelector('[type="search"]');

const getWeather = (cities) =>{   
    cityName.innerHTML = cities;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '39d562b8a1mshacc90137af20981p133098jsn0cbf42798afe',
            'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
        }
    };

        fetch(`https://yahoo-weather5.p.rapidapi.com/weather?location=${cities}&format=json&u=f`, options)
            .then(response => response.json())
            .then(response => {

                console.log(response);
                console.log(response.location.city);

                // console.log(response.current_observation.condition);
                temp.innerHTML = response.current_observation.condition.temperature;
                text.innerHTML = response.current_observation.condition.text;
                sunrise.innerHTML = response.current_observation.astronomy.sunrise;
                sunset.innerHTML = response.current_observation.astronomy.sunset;
                chill.innerHTML = response.current_observation.wind.chill;
                direction.innerHTML = response.current_observation.wind.direction;
                speed.innerHTML = response.current_observation.wind.speed;
                humidity.innerHTML = response.current_observation.atmosphere.humidity;
                visibility.innerHTML = response.current_observation.atmosphere.visibility;
                pressure.innerHTML = response.current_observation.atmosphere.pressure;

            })
            .catch(err => console.error(err));

}


submit.addEventListener('click', (e) =>{
    e.preventDefault();
    getWeather(searchCity.value)
});

getWeather("Delhi");