import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getCountryDetail } from "../../../../../redux/actions/actions";
import styles from './countryDetail.module.css';

const CountryDetail = (props) => {
    const {id} = useParams();
    useEffect(()=>{
        props.getCountryDetail(id);
    },[])
    
    let {commonName,officialName,capital,subregion,languages,area,population,currencies,flagImg,maps} = props.country;

    if(props.country[1]){
        return(
            <div>
                <h1>{props.country[0].commonName}</h1>
                <h2>{props.country[1][1].name}</h2>
            </div>
        )
    }

    return(
        <div className={styles.cDContainer}>
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
                <button><a  rel="noreferrer" target="_blank" href={maps}>See on Google Maps!</a></button>
            </div>
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