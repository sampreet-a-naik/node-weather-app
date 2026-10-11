const request = require("request");

const geocode = (address, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=12fc05266cf027935236016336afb8ff&query=" +
    encodeURIComponent(address) +
    "&units=f";

  // Pass headers inside the first argument object
  request(
    {
      url,
      json: true,
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
    },
    (error, response) => {
      if (error) {
        callback("Unable to connect to location service!", undefined);
      } else if (response.body.error) {
        callback(response.body.error.info, undefined);
      } else {
        callback(undefined, {
          latitude: response.body.location.lat,
          longitude: response.body.location.lon,
          location: `${response.body.location.name}, ${response.body.location.region}, ${response.body.location.country}`,
        });
      }
    },
  );
};

module.exports = geocode;
