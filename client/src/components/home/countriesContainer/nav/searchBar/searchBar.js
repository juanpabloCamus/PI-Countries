import { connect } from "react-redux";
import { setSearch } from "../../../../../redux/actions/actions";
import styles from './searchBar.module.css'

export function SeacrhBar (props) {

    function handleChange(e){
        props.setSearch({
            [e.target.name]: e.target.value
        })
    }

    return(
        <div className={styles.searchBarContainer}>
            <input className={styles.searchBarInput} placeholder='Search by name...' type='text' name="search" onChange={handleChange}></input>
        </div>  
    )
}

export const mapDispatchToProps = (dispatch) => {
    return{
      setSearch: (S) => dispatch(setSearch(S))
    }
}

export default connect(null,mapDispatchToProps)(SeacrhBar);