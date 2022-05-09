import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getCountryDetail } from "../../../../../redux/actions/actions";
import styles from './countryDetail.module.css';
import BackButton from "../../../../backButton/backButton";

const CountryDetail = (props) => {
    const {id} = useParams();
    useEffect(()=>{
        props.getCountryDetail(id);
    },[])
    
    let {commonName,officialName,capital,subregion,languages,area,population,currencies,flagImg,maps} = props.country;

    if(props.country[1]){
        let acts = [];
        for (let i = 0; i < props.country[1].length; i++) {
            acts.push(props.country[1][i]);
        }
        let {commonName,officialName,capital,subregion,languages,area,population,currencies,flagImg,maps} = props.country[0];
        console.log(acts);
        return(
            <div className={styles.cardContainer}>
            <div className={styles.cDContainer}>
                <div className={styles.backButton}>
                    <BackButton/>
                </div>
                <div className={styles.cDFirstContainer}>
                    <img alt="flag" src={flagImg}></img>
                    <h1>{commonName}</h1>
                    <h2>{subregion}</h2>
                </div>
                <div className={styles.cDSecondContainer}>
                    <h2>Official Name: {officialName}</h2>
                    <h3>Capital: {capital}</h3>
                    <h3>Language: {languages}</h3>
                    <h3>Currency: {currencies}</h3>
                    <h3>Population: {population}</h3>
                    <h3>Area: {area}</h3>
                    <div className={styles.buttonContainer}>
                        <a className={styles.mapsButton} rel="noreferrer" target="_blank" href={maps}>See on Google Maps!</a>
                    </div>
                </div>
            </div>
            <h2>Activities: </h2>
            <div className={styles.actsContainer}>
                
                {acts.map(a => (
                    <div className={styles.actContainer}>
                    <h3>{a.name}</h3>
                    <h4>Difficulty: {a.difficulty}</h4>
                    <h4>Duration: {a.duration}</h4>
                    <h4>Season: {a.season}</h4>
                    </div>
                ))}
            </div>
            

        </div>
        )
    }

    return(
        <div>
        <div className={styles.cDContainer}>
                <div className={styles.backButton}>
                    <BackButton/>
                </div>
            <div className={styles.cDFirstContainer}>
                <img alt="flag" src={flagImg}></img>
                <h1>{commonName}</h1>
                <h2>{subregion}</h2>
            </div>
            <div className={styles.cDSecondContainer}>
                <h2>Official Name: {officialName}</h2>
                <h3>Capital: {capital}</h3>
                <h3>Language: {languages}</h3>
                <h3>Currency: {currencies}</h3>
                <h3>Population: {population}</h3>
                <h3>Area: {area}</h3>
                <div className={styles.buttonContainer}>
                <a className={styles.mapsButton} rel="noreferrer" target="_blank" href={maps}>See on Google Maps!</a>
                </div>
            </div>
        </div>
            <h2>This country has no activities</h2>
        </div>

    )
}

function mapStateToProps(state){
    return(
        {
            country: state.country
        }
    )
}

export const mapDispatchToProps = (dispatch) => {
    return{
      getCountryDetail: id => dispatch(getCountryDetail(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CountryDetail);

// export default CountryDetail