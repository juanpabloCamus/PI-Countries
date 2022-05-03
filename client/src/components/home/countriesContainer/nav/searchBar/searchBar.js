
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

export default connect(null,mapDispatchToProps)(SeacrhBar);