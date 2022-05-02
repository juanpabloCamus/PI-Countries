import React from "react";

function Pagination({countriesPerPage, totalCountries, paginate}){
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalCountries/countriesPerPage); i++) {
        pageNumbers.push(i);
    }
    
    return(
        <div>
            <ul>
                {pageNumbers.map(n => (
                    <li key={n}>
                        <button onClick={() => {paginate(n)}}>
                            {n}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Pagination;