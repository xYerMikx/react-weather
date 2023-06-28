import axios from "axios";

export const getWeatherData = async (city: string) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
    );
    return response.data
  } catch (error) {
    console.log(error);
  }
};
