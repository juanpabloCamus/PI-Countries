import React, { useEffect, useState,} from "react";
import Country from "./country/country";
import { getActivities, getCountries,setCountriesContinent,orderByPopulation, orderByAlpha} from "../../../redux/actions/actions";
import { connect } from "react-redux";
import styles from'./countriesContainer.module.css';
import Pagination from "./Pagination";
import Nav from './nav/nav';


const CountriesContainer = (props) => {
    
    const [currrentPage, setCurrentPage] = useState(1);
    const [countriesPerPage, setCountriesPerPage] = useState(10);
    const [order,setOrder] = useState('')

    useEffect(() => {
        props.getCountries()
        props.getActivities()
    }, [])

    const indexOfLastCountry = currrentPage * countriesPerPage; 
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    let currrentCountries = props.countries.slice(indexOfFirstCountry, indexOfLastCountry);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    let {search} = props.search;
    if (search.length > 1) currrentCountries = props.countries.filter(c => c.commonName.toLowerCase().includes(search.toString().toLowerCase()));

    const selectContinent = async (e) => {
        e.preventDefault()
        await props.getCountries()
        if (e.target.value === 'All') props.getCountries()
        else props.setCountriesContinent(e.target.value);
    }

    const orderByAlpha = (e) => {
        e.preventDefault()
        props.orderByAlpha(e.target.value)
        setOrder(`Order: Alpha ${e.target.value}`)
        if (e.target.value === 'off') props.getCountries()
    }

    const orderByPopulation = (e) => {
        e.preventDefault()
        props.orderByPopulation(e.target.value)
        setOrder(`Order: Population ${e.target.value}`)
        if (e.target.value === 'off') props.getCountries()
    }

    return(
        <div className={styles.homeContainer}>
            <Nav/>
            <div className={styles.filtersContainer}>
                <div>
                    <span>Continent:</span><br></br>
                    <select onChange={e => selectContinent(e)}>
                        <option selected>All</option>
                        <option>Africa</option>
                        <option>Antarctica</option>
                        <option>Asia</option>
                        <option>Europe</option>
                        <option>North America</option>
                        <option>South America</option>
                        <option>Oceania</option>
                    </select>
                </div>

                <div>
                <span>Alphabetical Order:</span><br></br>
                <select onChange={e => orderByAlpha(e)}>
                    <option value='off'>---</option>
                    <option value='asc'>Ascendent</option>
                    <option value='dsc'>Descendent</option>
                </select>
                </div>

                <div>
                <span>Population:</span><br></br>
                <select onChange={e => orderByPopulation(e)}>
                    <option value='off'>---</option>
                    <option value='asc'>Ascendent</option>
                    <option value='dsc'>Descendent</option>
                </select>
                </div>

                <div>
                <span>Activity: </span><br></br>
                <select>
                    <option selected>---</option>
                    {props.activities.map(a => (<option key={a.id}>{a.name}</option>))}
                </select>
                </div>

            </div>

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
        activities: state.activities,
        search: state.search,
        order: state.order
    }
}
  
export const mapDispatchToProps = (dispatch) => {
    return{
      getCountries: () => dispatch(getCountries()),
      getActivities: () => dispatch(getActivities()),
      setCountriesContinent: (continent) => dispatch(setCountriesContinent(continent)),
      orderByPopulation: (payload) => dispatch(orderByPopulation(payload)),
      orderByAlpha: (payload) => dispatch(orderByAlpha(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountriesContainer);

