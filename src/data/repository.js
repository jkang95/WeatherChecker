import axios from "axios";

const APIKEY = "35751ae25bf6569a6b973f0691488ad0";

const weatherRepository = {
  retrieveWeatherForecast: async (city) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKEY}`).then(res => {
        return res;
      })
      return response;
    } catch (e) {
      throw e;
    }
  },
  retrieveCurrentWeather: async (city) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKEY}`).then(res => {
        console.log(res);
        return res;
      })
      return response;
    } catch (e) {
      throw e;
    }
  }
};

export default weatherRepository;