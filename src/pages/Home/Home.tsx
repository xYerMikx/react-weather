import { useState } from "react";
import { FilterItems } from "../../components/FilterItems/FilterItems";
import {
  IWeatherProps,
  WeatherCard,
} from "../../components/WeatherCard/WeatherCard";
import styles from "./Home.module.scss";
import { getWeatherData } from "../../helpers/getWeatherData";
import { getDate } from "../../helpers/getDate";

export const Home = () => {
  const [val, setVal] = useState("");
  const [weather, setWeather] = useState<IWeatherProps[]>([
    {
      city: "London",
      day: "Wednesday",
      temp: 20.77,
      time: "15:32",
      weather: "Clouds",
      windSpeed: 4.12,
      img: "04d",
    },
  ]);

  const getData = async () => {
    try {
      const response = await getWeatherData(val);
      const newWeather = {
        city: response.name,
        temp: response.main.temp,
        windSpeed: response.wind.speed,
        weather: response.weather[0].main,
        time: getDate(response.dt, response.timezone)[0],
        day: getDate(response.dt, response.timezone)[1],
        img: response.weather[0].icon,
      };
      setWeather([...weather, newWeather]);
      setVal("");
      console.log(response);
    } catch (error) {
      console.error(error);
    } finally {
      setVal("")
    }
  };

  return (
    <div>
      <h1 className={styles.title}>
        Seeing the weather of the whole world with <span>Dark Weather!</span>
      </h1>
      <div className={styles.search}>
        <div>
          <input
            value={val}
            onChange={(e) => setVal(e.target.value)}
            type="text"
            placeholder="Search Here"
          />
          <button onClick={() => getData()} className={styles.searchBtn}>
            Search
          </button>
        </div>
        <FilterItems />
      </div>
      <div className={styles.cards}>
        {weather.map((card: IWeatherProps) => {
          return (
            <WeatherCard
              key={card.city}
              img={card.img}
              city={card.city}
              temp={card.temp}
              time={card.time}
              day={card.day}
              weather={card.weather}
              windSpeed={card.windSpeed}
            />
          );
        })}
      </div>
    </div>
  );
};
