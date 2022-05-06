// import React, { useEffect, useState } from "react";
// import { connect } from "react-redux";
// import { getCountries, setCountriesContinent,} from "../../../../redux/actions/actions";
// import './filters.css';

// const Filters = (props) => {

//     const selectContinent = async (e) => {
//         await props.getCountries()
//         if (e.target.value === 'All') props.getCountries()
//         else props.setCountriesContinent(e.target.value);
//     }

//     const orderByAlpha = (e) => {
//         e.preventDefault()
//         props.orderByAlpha(e.target.value)
//     }

//     return(
//         <div className="filters">
//             <div>
//                 <span>Continent:</span><br></br>
//                 <select onChange={e => selectContinent(e)}>
//                     <option selected>All</option>
//                     <option>Africa</option>
//                     <option>Antarctica</option>
//                     <option>Asia</option>
//                     <option>Europe</option>
//                     <option>North America</option>
//                     <option>South America</option>
//                     <option>Oceania</option>
//                 </select>
//             </div>

//             <div>
//             <span>Alphabetical Order:</span><br></br>
//             <select onChange={e => orderByAlpha(e)}>
//                 <option >---</option>
//                 <option value='asc'>Ascendent</option>
//                 <option value='dsc'>Descendent</option>
//             </select>
//             </div>

//             <div>
//             <span>Population:</span><br></br>
//             <select>
//                 <option selected>---</option>
//                 <option>Ascendent</option>
//                 <option>Descendent</option>
//             </select>
//             </div>

//             <div>
//             <span>Activity: </span><br></br>
//             <select>
//                 <option selected>---</option>
//                 {props.activities.map(a => (<option key={a.id}>{a.name}</option>))}
//             </select>
//             </div>
//         </div>
//     )  
// }

// export const mapDispatchToProps = (dispatch) => {
//     return{
//         getCountries: () => dispatch(getCountries()),
//         setCountriesContinent: (continent) => dispatch(setCountriesContinent(continent)),
//         orderByAlpha: (payload) => dispatch(orderByAlpha(payload))
//     }
// }

// export const mapStateToProps = (state) => {
//     return{
//       countries: state.countries,
//       activities: state.activities
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Filters);