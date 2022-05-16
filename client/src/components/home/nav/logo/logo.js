import React from "react";
import styles from './logo.module.css'
import img from '../../../../assets/logoworld.png'
import { Link } from "react-router-dom";

export function Logo (){
    return(
        <Link to={'/'} className={styles.logoContainer}>
            <img alt="arrowBack" src={img} className={styles.navLogo}></img>
            <h5 className={styles.navTitle}>Countries Wiki</h5>
        </Link> 
    )
}

export default Logo