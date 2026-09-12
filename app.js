const geocode = require("./utils/geoCode");
const forecast = require("./utils/forecast");
// const url =
//   "https://api.weatherstack.com/current?access_key=12fc05266cf027935236016336afb8ff&query=40.714,-74.006&units=f";

// // https://api.weatherstack.com/current?access_key=12fc05266cf027935236016336afb8ff&query=New%20York&units=f

const local = process.argv[2];

if (!local) {
  console.log("Provide the location");
} else {
  geocode(local, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return console.log("Error:", error);
    }
    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log("Error:", error);
      }
      console.log(location);
      console.log("Data:", forecastData);
    });
  });
}
