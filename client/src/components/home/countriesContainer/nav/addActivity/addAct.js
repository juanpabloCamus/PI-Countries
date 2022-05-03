import React from "react";
import { Link } from "react-router-dom";
import styles from './addAct.module.css'

export function AddAct () {
    return(
        <Link className={styles.navButtonContainer} to={'/addActivity'}>
            <button className={styles.navButton}>Add Activity</button>
        </Link>
    )
}

export default AddAct;