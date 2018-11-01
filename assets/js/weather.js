class Weather {
   // FETCH WEATHER FROM API
   async getWeather(lat, lng, key) {
		const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=${key}`)

		const responseData = await response.json()

		return responseData
   }

   // CHANGE LOCATION
   changeLocation(city, state) {
		this.city = city
		this.state = state
   }
}