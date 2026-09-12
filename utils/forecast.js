const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&temperature_unit=fahrenheit`;

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (response.body.error) {
      callback("Unable to fetch weather data.", undefined);
    } else {
      const current = response.body.current_weather;
      callback(
        undefined,
        `It is currently ${current.temperature}°F with a wind speed of ${current.windspeed} mph.`,
      );
    }
  });
};

module.exports = forecast;

// const request = require("request");

// const forecast = (latitude, longitude, callback) => {
//   const url =
//     "http://api.weatherstack.com/current?access_key=12fc05266cf027935236016336afb8ff&query=" +
//     encodeURIComponent(`${latitude},${longitude}`) +
//     "&units=f";
