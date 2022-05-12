import React, { useState } from "react";
import { connect } from "react-redux";
import { setSearch } from "../../../../../redux/actions/actions";
import styles from './searchBar.module.css'
import img from '../../../../../assets/lupa.png'

export function SeacrhBar (props) {

    let [search, setSearch] = useState('');

    function handleChange(e){
        setSearch(e.target.value)   
    }

    function handleSubmit(){
        props.setSearch(search)
    }

    return(
        <div className={styles.searchBarContainer}>
            <input className={styles.searchBarInput} autoComplete='off' placeholder='Search by name...' type='text' name="search" onChange={handleChange}></input>
            <button className={styles.searchBarButton} onClick={handleSubmit}><img alt='searchButton' src={img}></img></button>
        </div>  
    )
}

export const mapDispatchToProps = (dispatch) => {
    return{
      setSearch: (s) => dispatch(setSearch(s))
    }
}

export default connect(null,mapDispatchToProps)(SeacrhBar);