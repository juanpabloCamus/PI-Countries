import React, { useEffect, useState,} from "react";
import Country from "./country/country";
import { getActivities, getCountries,filterByContinent,orderByPopulation, orderByAlpha, filterByActivity} from "../../../redux/actions/actions";
import { connect } from "react-redux";
import styles from'./countriesContainer.module.css';
import Pagination from "./Pagination";
import Nav from './nav/nav';
import Loading from "../../loading/Loading";

const CountriesContainer = (props) => {

    useEffect(() => {
        props.getCountries()
        props.getActivities()
    }, [])

    const [order, setOrder] = useState('');

    const [currrentPage, setCurrentPage] = useState(1);
    const [countriesPerPage, setCountriesPerPage] = useState(10);
    const indexOfLastCountry = currrentPage * countriesPerPage; 
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    let currrentCountries = props.countries.slice(indexOfFirstCountry, indexOfLastCountry);
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        // if(pageNumber === 1) setCountriesPerPage(9)
        // else setCountriesPerPage(10)
    }   

    let {search} = props.search;
    if (search.length > 1) currrentCountries = props.countries.filter(c => c.commonName.toLowerCase().includes(search.toLowerCase()));
    
    const filterByContinent = async (e) => {
        e.preventDefault();
        await props.getCountries();
        if (e.target.value === 'All') props.getCountries();
        else props.filterByContinent(e.target.value);
    }

    const filterByActivity = (e) => {
        if(e.target.value === '---') return props.getCountries()
        e.preventDefault();
        props.filterByActivity(e.target.value)
    }

    const orderByAlpha = (e) => {
        e.preventDefault();
        props.orderByAlpha(e.target.value);
        setOrder(`Order: Alpha ${e.target.value}`);
        if (e.target.value === 'off') props.getCountries();
    }

    const orderByPopulation = (e) => {
        e.preventDefault();
        props.orderByPopulation(e.target.value);
        setOrder(`Order: Population ${e.target.value}`);
        if (e.target.value === 'off') props.getCountries();
    }

    const handleSort = async (e) => {
        let current = props.countries;
        e.preventDefault();
        if(current.length === 250){
            if(e.target.value === 'Aasc' || e.target.value === 'Adsc'){
                await props.getCountries();
                orderByAlpha(e)
            }
            else{
                await props.getCountries();
                orderByPopulation(e)
            } 
        }

        if(e.target.value === 'Aasc' || e.target.value === 'Adsc'){
            orderByAlpha(e)
        }
        else{
            orderByPopulation(e)
        } 
    }

    if(props.countries.length === 0) return(<Loading></Loading>)

    return(
        <div className={styles.homeContainer}>
            <Nav/>
            <div className={styles.filtersContainer}>

                <div>
                <span>Sort: </span><br></br>
                <select onChange={(e) => handleSort(e)}>
                    <option selected value='Aasc'>Default (A-Z)</option>
                    <option value='Adsc'>Z-A</option>
                    <option value='asc'>Ascendent population</option>
                    <option value='dsc'>Descendent population</option>
                </select>

                </div> 
                <div>
                <span>Continent:</span><br></br>
                <select onChange={e => filterByContinent(e)}>
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
                <span>Activity: </span><br></br>
                <select onChange={e => filterByActivity(e)}>
                    <option selected>---</option>
                    {props.activities.map(a => (<option value={a.name} key={a.id}>{a.name}</option>))}
                </select>
                </div>

            </div>

            
            <div className={styles.countriesContainer}>
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
      filterByContinent: (continent) => dispatch(filterByContinent(continent)),
      orderByPopulation: (payload) => dispatch(orderByPopulation(payload)),
      orderByAlpha: (payload) => dispatch(orderByAlpha(payload)),
      filterByActivity: (payload) => dispatch(filterByActivity(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountriesContainer);



