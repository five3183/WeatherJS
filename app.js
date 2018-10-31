const storage = new Storage()
const keys = new Keys()
const coords = new Location()
const weather = new Weather()
const ui = new UI()


// Once DOM conetent is loaded, getLocation => getKeys => getCoords => getWeather => paint UI
const requestWeather = () => {
  storage.getLocationData()
    .then(location => {
      keys.getKeys()
        .then(keys => {
          coords.getCoordinates(location.city, location.state, keys.key.gMap)
            .then(locationData => {
              const coords = locationData.results[0].geometry.location
              const zone =  locationData.results[0].formatted_address
              weather.getWeather(coords.lat, coords.lng, keys.key.weather)
                .then(results => {
                  ui.paint(zone, results)
              })
              .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
        })
    })
}


document.addEventListener('DOMContentLoaded', requestWeather)

// CHANGE LOCATION EVENT 
document.getElementById('w-change-btn').addEventListener('click', () => {
  const city = document.getElementById('city').value 
  const state = document.getElementById('state').value 

  storage.setLocationData(city, state)
    .then( () => {
      requestWeather()
    })
  document.getElementById('w-form').reset()
  $('#location-modal').modal('hide')
 
})