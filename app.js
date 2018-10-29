// INITILIZE STORAGE CLASS
const storage = new Storage()

const userLocation = storage.getLocationData()
// INITILIZE weather object
const coords = new Location()
const weather = new Weather()
const ui = new UI()


document.addEventListener('click', () => {
  callWeather()
  console.log('DOM fired')
})

const callWeather = () => {
	coords.getCoords(userLocation.city, userLocation.state)
		.then(res => {
			console.log('coords fired')
			console.log(res)
        const coords = res[0].geometry.location
        const zone =  res[0].formatted_address
        weather.getWeather(coords.lat, coords.lng)
          .then(results => {
            console.log('weather fired')

            console.log(results)
            ui.paint(zone, results)
            console.log('UI fired')

          })
          .catch(err => console.log(err))
      // })
    })
    .catch(err => console.log(err))
}

// CHANGE LOCATION EVENT 
document.getElementById('w-change-btn').addEventListener('click', () => {
  const city = document.getElementById('city').value 
  const state = document.getElementById('state').value 

  storage.setLocationData(city, state)

  coords.getCoords(city, state)
    .then(res => {
      res.forEach(element => {
        const coords = element.geometry.location
        const zone =  element.formatted_address
        weather.getWeather(coords.lat, coords.lng)
          .then(results => {
            console.log(results)
            ui.paint(zone, results)
          })
          .catch(err => console.log(err))
      })
    })
    .catch(err => console.log(err))
 
  $('#location-modal').modal('hide')
})