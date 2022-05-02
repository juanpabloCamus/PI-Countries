import React, { useEffect, useState } from "react";
import Country from "./country/country";
import { getCountries } from "../../../redux/actions/actions";
import { connect } from "react-redux";
import './countriesContainer.css';
import Pagination from "./Pagination";
import Nav from './nav/nav';

const CountriesContainer = (props) => {

    //const [loading, setLoading] = useState(false);
    
    const [currrentPage, setCurrentPage] = useState(1);
    const [countriesPerPage, setCountriesPerPage] = useState(10);
   
    useEffect(() => {
        props.getCountries()
    }, [])

    const indexOfLastCountry = currrentPage * countriesPerPage; 
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    let currrentCountries = props.countries.slice(indexOfFirstCountry, indexOfLastCountry);
    
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const {search} = props.search;
    if (search.length > 0) currrentCountries = props.countries.filter(c => c.commonName.toLowerCase().includes(search.toString().toLowerCase()));
    //continente, as, des,pob
    return(
        <div className="countriesContainer">
            <Nav/>
            {currrentCountries.map(c => (
                <div>
                    <Country
                      key={c.id}
                      id={c.id}
                      name = {c.commonName}
                      continent={c.continent}
                      img = {c.flagImg}  
                    />
                </div>
            ))}
            <Pagination countriesPerPage={countriesPerPage} totalCountries={props.countries.length} paginate={paginate}/>
        </div>     
    )
}

export const mapStateToProps = (state) => {
    return{
      countries: state.countries,
      search: state.search
    }
}
  
export const mapDispatchToProps = (dispatch) => {
    return{
      getCountries: () => dispatch(getCountries())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountriesContainer);

