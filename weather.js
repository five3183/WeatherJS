// const keys = new Keys

class Weather {
   constructor() {
	keys.getKeys()
	   .then(data => {
		this.apiKey = data.key.weather
	})
	
   }
   // FETCH WEATHER FROM API
   async getWeather(lat, lng) {
		const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=${this.apiKey}`)

		const responseData = await response.json()

		return responseData
   }

   // CHANGE LOCATION
   changeLocation(city, state) {
		this.city = city
		this.state = state
   }
}