import React from "react";
import { Link } from 'react-router-dom';
import styles from'./landingPage.module.css';
import img from '../../assets/logoworld.png';
import About from "./About";

const LandingPage = (props) => {

    function scroll() {
        window.scrollTo(0,1000)
    }

    return(
        <div className={styles.lpContainer}>
            <img alt="world" src={img} className={styles.lpLogo}></img>
            <h1 className={styles.lpTitle}>Countries Wiki</h1>
            <Link to = {'/home'} >
                <button id="about" className={styles.lpButton}>Explore The World!</button>
            </Link><br></br>
            <button onClick={scroll} className={styles.aboutButton}>About</button>
            <h6 className={styles.by}>By Juan Pablo Camus © <br></br>in concept of PI (Henry Individual Project)</h6>
            <About></About>
        </div>
    )
}

export default LandingPage;