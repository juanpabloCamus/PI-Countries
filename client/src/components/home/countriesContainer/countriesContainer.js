import React, { useEffect, useState,useReducer } from "react";
import Country from "./country/country";
import { getActivities, getCountries } from "../../../redux/actions/actions";
import { connect } from "react-redux";
import styles from'./countriesContainer.module.css';
import Pagination from "./Pagination";
import Nav from './nav/nav';
import Filters from "./Filters/Filters";

const CountriesContainer = (props) => {

    //const [loading, setLoading] = useState(false);
    
    const [currrentPage, setCurrentPage] = useState(1);
    const [countriesPerPage, setCountriesPerPage] = useState(10);

    useEffect(() => {
        props.getCountries()
        props.getActivities()
    }, [])
    
    useEffect(() => {
        if (props.population === 'off') props.getCountries()
    }, [props.population])

    const indexOfLastCountry = currrentPage * countriesPerPage; 
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    let currrentCountries = props.countries.slice(indexOfFirstCountry, indexOfLastCountry);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    let {search} = props.search;
    if (search.length > 1) currrentCountries = props.countries.filter(c => c.commonName.toLowerCase().includes(search.toString().toLowerCase()));
    
    if (props.population === 'asc') props.countries.sort((a,b) => b.population - a.population);
    if (props.population === 'dsc') props.countries.sort((a,b) => a.population - b.population);

    
    return(
        <div className={styles.homeContainer}>
            <Nav/>
            <Filters/>
            <div  className={styles.countriesContainer}>
                {currrentCountries.map(c => (
                    <div>
                        <Country
                        key={c.id}
                        id={c.id}
                        commonName = {c.commonName}
                        officialName = {c.officialName}
                        capital = {c.capital}
                        subregion = {c.subregion}
                        languages = {c.languages}
                        area = {c.area}
                        population = {c.population}
                        currencies = {c.currencies}
                        continent={c.continent}
                        img = {c.flagImg} 
                        maps = {c.maps} 
                        />
                    </div>
                ))}
            </div>
            <Pagination countriesPerPage={countriesPerPage} totalCountries={props.countries.length} paginate={paginate}/>
        </div>     
    )
}

export const mapStateToProps = (state) => {
    return{
        countries: state.countries,
        search: state.search,
        order: state.order,
        population: state.population,
        alpha: state.alpha
    }
}
  
export const mapDispatchToProps = (dispatch) => {
    return{
      getCountries: () => dispatch(getCountries()),
      getActivities: () => dispatch(getActivities())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountriesContainer);

