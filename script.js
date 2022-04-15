const input = document.querySelector('input')
const button = document.querySelector('button')
const cityName = document.querySelector('.city-name')
const warning = document.querySelector('.warning')
const photo = document.querySelector('.photo')
const weather = document.querySelector('.weather')
const temperature = document.querySelector('.temperature')
const humidity = document.querySelector('.humidity')


const API_KEY = '&appid=875cb797ef7273d4044c51a6eea6dfae'
const API_Link = 'https://api.openweathermap.org/data/2.5/weather?q='
const API_UNITS = '&units=metric'

const getWeather = () => {
    const city = input.value || "Chorzów"
    const URL = API_Link + city + API_KEY + API_UNITS

    axios.get(URL).then(res => {
        console.log(res.data)
        const temp = res.data.main.temp
        const hum = res.data.main.humidity

        cityName.textContent = res.data.name
        temperature.textContent = Math.floor(temp)
        humidity.textContent = hum + '%'
    })
    
}

getWeather()