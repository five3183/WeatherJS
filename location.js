class Location {
   async getCoordinates(city, state, key) {
      const response = await fetch(`
      https://maps.googleapis.com/maps/api/geocode/json?address=${city},+${state}&key=${key}`)
      
      const responseCoords = await response.json()

      return responseCoords
   }
// CHANGE LOCATION
	changeLocation(city, state) {
			this.city = city
			this.state = state
   }
}