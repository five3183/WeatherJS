const storage = new Storage()
const keys = new Keys()
const coords = new Location()
const weather = new Weather()
const ui = new UI()
const gKey = 'AIzaSyCx23RSeZ5399EKe1zQRiMfR2IoFgpY6WY'
const wKey = 'dc2a70f6a1b55245b6e21c7ff70fab3c'


// Once DOM conetent is loaded, getLocation (from local storage) => getKeys => getCoords => getWeather => paint UI
const requestWeather = () => {
  storage.getLocationData()
    .then(location => {
      coords.getCoordinates(location.city, location.state, gKey)
        .then(locationData => {
          const coords = locationData.results[0].geometry.location
          const zone =  locationData.results[0].formatted_address
          weather.getWeather(coords.lat, coords.lng, wKey)
            .then(results => {
              ui.paint(zone, results)
          })
          .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
        
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
  location.reload()
 
})