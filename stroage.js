class Storage {
   constructor() {
      this.city
      this.state
      this.defaultCity = 'Charlotte'
      this.defaultState = 'NC'
   }
   getLocationData() {
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

   setLocationData(city, state) {
      localStorage.setItem('city', city)
      localStorage.setItem('state', state)
   }
}