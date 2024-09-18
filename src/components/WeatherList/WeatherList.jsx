import styles from './WeatherList.module.css';
import { weatherCity } from "../../data/weatherCity";
import { WeatherItem } from '../WeatherItem/WeatherItem';


export const WeatherList = () => {    
    return (
        <ul className={styles.list}>
            {weatherCity.map((city) => (
                <WeatherItem 
                    key={city.title} 
                    title={city.title} 
                    degree={city.degree} 
                    icon={city.icon}
                />
            ))}
        </ul>
    )
}