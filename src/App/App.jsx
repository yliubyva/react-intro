import styles from "./App.module.css";
import { WeatherList } from "../components/WeatherList";

export const App = () => {
    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Weather Forecast<i className={`wi wi-solar-eclipse`}></i></h1>
            <WeatherList />
            <p>Have a nice day and don't forget umbrella if you are in New Delhi now!</p>
        </main>
    )
}
