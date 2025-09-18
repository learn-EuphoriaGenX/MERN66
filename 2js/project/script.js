
let btn = document.getElementById('btn')
const handleClickBtn = async () => {
    let city = document.getElementById("city").value;
    if (!city) {
        document.getElementById('campa').classList.add('hidden')
        alert("City Name Required")
        return
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=652cceb1e2fb4822b53bfc8d4b3db44c&units=metric`;

    let response = await fetch(url);
    let data = await response.json()

    if (data.cod == '404') {
        document.getElementById('campa').classList.add('hidden')
        alert("City Not Found")
        return
    }
    document.getElementById('campa').classList.remove('hidden')
    document.getElementById('temp').innerText = `${data.main.temp}°C`
    document.getElementById('city-o').innerText = `${data.name}`
    document.getElementById('weather-img').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    document.getElementById('feels_like').innerText = `${data.main.feels_like}°C`
    document.getElementById('speed').innerText = `${data.wind.speed} km/h`





}
btn.addEventListener('click', handleClickBtn)
