import React from "react";
import { Link } from 'react-router-dom';
import styles from'./landingPage.module.css';
import img from '../../assets/logoworld.png'




const LandingPage = (props) => {
    return(
        <div className={styles.lpContainer}>
            <img alt="world" src={img} className={styles.lpLogo}></img>
            <h1 className={styles.lpTitle}>Countries Wiki</h1>
            <Link to = {'/home'} >
                <button className={styles.lpButton}>Explore The World!</button>
            </Link>
            <h6  className={styles.by}>By Juan Pablo Camus © <br></br>in concept of PI (Henry Individual Project)</h6>
        </div>
    )
}

export default LandingPage;