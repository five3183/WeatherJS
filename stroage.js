// CHECK local storage to see if there is any saved location data for the user.  IF not set the default location to Charlotte, NC.

class Storage {
   constructor() {
      this.city
      this.state
      this.defaultCity = 'Charlotte'
      this.defaultState = 'NC'
   }
   async getLocationData() {
      if(localStorage.getItem('city') === null) {
         this.city = this.defaultCity
      } 
      else {
         this.city = localStorage.getItem('city')
      }
      if(localStorage.getItem('city') === null) {
         this.state = this.defaultState
      } 
      else {
         this.state = localStorage.getItem('state')
      }

      return {
         city: this.city,
         state: this.state
      }
   }

   async setLocationData(city, state) {
      localStorage.setItem('city', city)
      localStorage.setItem('state', state)
   }
}