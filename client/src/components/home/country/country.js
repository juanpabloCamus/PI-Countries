import React from "react";
import styles from './country.module.css';
import { Link } from "react-router-dom";

const Country = (props) => {

    
    return(
        <Link className={styles.link} to={`/home/${props.id}`}>
            <div className={styles.countryCardContainer}>
                <div className={styles.imgCountryContainer}>
                    <img alt="flag" className={styles.imgCountryCard} src={props.img}></img>
                </div>
                <div className={styles.countryTextContainer}>
                    <h2 className={styles.countryName}>{props.commonName}</h2>
                    <h3>{props.continent}</h3>
                </div>
            </div>
        </Link>
    )
}

export default Country;