import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getCountryDetail } from "../../../../../redux/actions/actions";
import styles from './countryDetail.module.css';
import BackButton from "../../../../backButton/backButton";
import Loading from "../../../../loading/Loading";

const CountryDetail = (props) => {
    const {id} = useParams();
    useEffect(()=>{
        props.getCountryDetail(id);
    },[])
    
    let {commonName,officialName,capital,subregion,languages,area,population,currencies,flagImg,maps} = props.country;
    
    if(props.country[1]){
        if(!props.country[0].id) return(<Loading></Loading>)
        let acts = [];
        for (let i = 0; i < props.country[1].length; i++) {
            acts.push(props.country[1][i]);
        }
        let {commonName,officialName,capital,subregion,languages,area,population,currencies,flagImg,maps} = props.country[0];
        
        return(
            <div className={styles.cardContainer}>
            <div className={styles.backButton}>
                <BackButton/>
            </div>
            <div className={styles.cDContainer}>
                <div className={styles.cDFirstContainer}>
                    <h2 className={styles.id}>{id}</h2>
                    <img className={styles.flagImg} alt="flag" src={flagImg}></img>
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
            <h2 className={styles.acth2}>Activities: </h2>
            <div className={styles.actsContainer}>
                
                {acts.map(a => (
                    <div className={styles.actContainer}>
                    <h3 className={styles.actName}>{a.name}</h3>
                    <h4>Difficulty: {a.difficulty}</h4>
                    <h4>Duration: {a.duration} hours</h4>
                    <h4>Season: {a.season}</h4>
                    </div>
                ))}
            </div>
            

        </div>
        )
    }
    if(!props.country.id) return(<Loading></Loading>)
    return(
        <div className={styles.pageContainer}>
            <div className={styles.backButton}>
                <BackButton/>
            </div>
        <div className={styles.cDContainer}>
            <div className={styles.cDFirstContainer}>
                <h2 className={styles.id}>{id}</h2>
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
            <h2 className={styles.acth2}>This country doesn't have activities</h2>
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