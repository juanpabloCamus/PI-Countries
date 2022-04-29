import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getCountryDetail } from "../../../../../redux/actions/actions";

const CountryDetail = (props) => {
    const {id} = useParams();

    useEffect(()=>{
        props.getCountryDetail(id);
    },[])
    
    return(
        <div>
            <img src={props.country.flagImg}></img>
            <h1>{props.country.commonName}</h1>
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