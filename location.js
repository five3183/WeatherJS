const keys = new Keys

class Location {
   constructor() {
      keys.getKeys()
         .then(data => {
            this.apiKey = data.key.gMap
         })
   }
   async getCoords(city, state) {
      const response = await fetch(`
      https://maps.googleapis.com/maps/api/geocode/json?address=${city},+${state}&key=${this.apiKey}`)
      
      const responseCoords = await response.json()

      return responseCoords.results
   } 
}