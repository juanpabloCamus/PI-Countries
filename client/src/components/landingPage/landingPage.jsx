import React from "react";
import { Link } from 'react-router-dom';
import styles from'./landingPage.module.css';
import img from '../../assets/logoworld.png'




const LandingPage = (props) => {
    return(
        <div className={styles.lpContainer}>
            <img src={img} className={styles.lpLogo}></img>
            <h1 className={styles.lpTitle}>Countries Wiki</h1>
            <Link to = {'/home'} >
                <button className={styles.lpButton}>Explore The World!</button>
            </Link>
        </div>
    )
}

export default LandingPage;