import PropTypes from "prop-types";
import styles from './WeatherItem.module.css';

export const WeatherItem = ({ title, degree, icon }) => {    
    return (
        <li className={styles.listItem}>
            <h2 className={styles.title}>{title}</h2>
            <span className={styles.degree}>{degree}°C</span>
            <i className={icon}></i>
        </li>
    )
}

WeatherItem.propTypes = {
    title: PropTypes.string.isRequired,
    degree: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
}