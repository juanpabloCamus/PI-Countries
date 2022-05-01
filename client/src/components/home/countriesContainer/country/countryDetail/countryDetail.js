import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getCountryDetail } from "../../../../../redux/actions/actions";

const CountryDetail = (props) => {
    const {id} = useParams();
    useEffect(()=>{
        props.getCountryDetail(id);
    },[])
    
    if(props.country[1]){
        return(
            <div>
                <h1>{props.country[0].commonName}</h1>
                <h2>{props.country[1][1].name}</h2>
            </div>
        )
    }

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