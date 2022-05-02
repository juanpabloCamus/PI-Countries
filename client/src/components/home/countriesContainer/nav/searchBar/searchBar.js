import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setSearch } from "../../../../../redux/actions/actions";

export function SeacrhBar (props) {

    function handleChange(e){
        props.setSearch({
            [e.target.name]: e.target.value
        })
    }

    return(
        <div>
            <input type='text' name="search" onChange={handleChange}></input>
            <button type='submit'>Buscar</button>
        </div>  
    )
}

export const mapDispatchToProps = (dispatch) => {
    return{
      setSearch: (S) => dispatch(setSearch(S))
    }
}

export const mapStateToProps = (state) => {
    return{
      countries: state.countries
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SeacrhBar);