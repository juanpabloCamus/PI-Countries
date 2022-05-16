import React from 'react';
import htmlLogo from '../../assets/html-logo1.png';
import cssLogo from '../../assets/css-logo.png';
import jsLogo from '../../assets/js-logo.png';
import reactLogo from '../../assets/react-logo.png';
import reduxLogo from '../../assets/redux-logo.png';
import nodeLogo from '../../assets/node-logo.png';
import sequelizeLogo from '../../assets/sequelize-logo.png';
import pgLogo from '../../assets/pg-logo.png';
import styles from './About.module.css'

function About() {
    return ( 
        <div className={styles.aboutContainer}>
            <div>
                <h2>What is Countries Wiki?</h2>
                <p>Countries Wiki is a SPA (Single Page Application) where you can see information
                of all countries around the world! You can add activities, visit country's google maps and see 
                important information like currencies or population of the countries.</p>
                <h2>How this app built?</h2>
                <p>This application was built to be presented as PI (individual project) in "Henry" Bootcamp.<br></br>
                Countries information was obtained from <a className={styles.a} rel="noreferrer" target='_blank' href='https://restcountries.com/'>Rest Countries API</a><br></br> 
                <br></br>The tecnologies used for this project were: 
                </p>
                <div className={styles.logosContainer}>
                    <div className={styles.logoContainer}>
                        <div className={styles.subLogoContainer}>
                            <img id={styles.html} className={styles.imgLogo} alt = 'htmlLogo' src={htmlLogo}></img>
                            <label>HTML</label>
                        </div>
                        <div className={styles.subLogoContainer}>
                            <img className={styles.imgLogo} alt = 'cssLogo' src={cssLogo}></img>
                            <label>CSS</label>
                        </div>
                        <div className={styles.subLogoContainer}>
                            <img id={styles.js} className={styles.imgLogo} alt = 'jsLogo' src={jsLogo}></img>
                            <label>JavaScript</label>
                        </div>
                        <div className={styles.subLogoContainer}>
                            <img className={styles.imgLogo} alt = 'reactLogo' src={reactLogo}></img>
                            <label>React</label>
                        </div>
                    </div>
                        <div className={styles.logoContainer}>
                        <div className={styles.subLogoContainer}>
                            <img className={styles.imgLogo} alt = 'reduxLogo' src={reduxLogo}></img>
                            <label>Redux</label>
                        </div>
                        <div className={styles.subLogoContainer}>
                            <img className={styles.imgLogo} alt = 'nodeLogo' src={nodeLogo}></img>
                            <label>NodeJS</label>
                        </div>
                        <div className={styles.subLogoContainer}>
                            <img className={styles.imgLogo} alt = 'sequelizeLogo' src={sequelizeLogo}></img>
                            <label>Sequelize</label>
                        </div>
                        <div className={styles.subLogoContainer}>
                            <img className={styles.imgLogo} alt = 'pgLogo' src={pgLogo}></img>
                            <label>PostgreSQL</label> 
                        </div>
                    </div>
                </div>
                <p>You can see the code <a className={styles.a} rel="noreferrer" target='_blank' href='https://github.com/juanpabloCamus/PI-Countries'>here, on my Git Hub!</a> . Please if you have any feedback, feel free to comment. </p>
            </div>
        </div>
    );
}
 
export default About;