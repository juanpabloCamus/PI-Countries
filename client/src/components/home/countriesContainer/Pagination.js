import React from "react";
import styles from './Pagination.module.css'

function Pagination({countriesPerPage, totalCountries, paginate}){
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalCountries/countriesPerPage); i++) {
        pageNumbers.push(i);
    }
    
    return(
        <div>
            <ul className={styles.pagContainer}>
                {pageNumbers.map(n => (
                    <div key={n}>
                        <button onClick={() => {paginate(n)}}>
                            {n}
                        </button>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default Pagination;