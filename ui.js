class UI {
   constructor() {
      this.location = document.getElementById('w-location')
      this.description = document.getElementById('w-description')
      this.icon = document.getElementById('w-icon')
      this.temp = document.getElementById('w-temp')
      this.details = document.getElementById('w-details')
      this.humidity = document.getElementById('w-humidity')
      this.dewpoint = document.getElementById('w-dewpoint')
      this.feelsLike = document.getElementById('w-feels-like')
      this.wind = document.getElementById('w-wind')
   }

   paint(location, weather) {
      let temp = (((parseInt(weather.main.temp) - 273.15) * 9/5) + 32).toFixed(0)
      // Change humidity to a percentage
      let humid = (weather.main.humidity / 100)
      this.location.textContent = location
      this.description.textContent = weather.weather[0].description.toUpperCase()
      this.icon.textContent = weather.weather[0].icon
      // *****
      // TO DO get better weather images
      // *****
      let weatherIcon = weather.weather[0].icon
      this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weatherIcon}.png`)
      this.temp.textContent = temp + "°"
      this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`
      this.dewpoint.textContent = `Dew Point: ${dewPoint(temp, weather.main.humidity)}°`
      this.feelsLike.textContent = `Feels like: ${heatIndex(temp, humid)}°`
      this.wind.textContent = `Wind Speed: ${weather.wind.speed} mph`

   }
}