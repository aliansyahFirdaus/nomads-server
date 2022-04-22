const axios = require("axios");

class Controller {
  static async getWeather(req, res, next) {
    try {
      const { city } = req.params;
      const API = "0cc319ae9016d6e05353f0183e45ec24";

      const geoCoding = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API}`
      );

      const lat = geoCoding.data[0].lat;
      const lon = geoCoding.data[0].lon;

      const weather = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}`
      );

      res.status(200).json({
        code: 200,
        weather: weather.data.weather,
      });
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = Controller;
