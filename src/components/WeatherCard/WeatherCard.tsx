import { FC } from "react";
import styles from "./WeatherCard.module.scss";

export interface IWeatherProps {
  city: string;
  temp: number;
  windSpeed: number;
  day: string;
  time: string;
  weather: string;
  img: string;
}

export const WeatherCard: FC<IWeatherProps> = ({
  city,
  temp,
  windSpeed,
  day,
  time,
  weather,
  img,
}) => {
  return (
    <div className={styles.card}>
      <img src={`https://openweathermap.org/img/w/${img}.png`} alt="Sun" />
      <p>
        <span className={styles.city}>{city}</span>
        <span className={styles.temp}>{temp} °C</span>
      </p>
      <p className={styles.wind}>Wind speed: {windSpeed} km</p>
      <div className={styles.date}>
        {day}: {time}
      </div>
      <p className={styles.weather}>{weather}</p>
    </div>
  );
};
