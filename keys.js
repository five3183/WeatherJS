class Keys {
   async getKeys() {
      const response = await fetch('keys.json')
      const key = await response.json()
      return {
         key
      }
   }
}