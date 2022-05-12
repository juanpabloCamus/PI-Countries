import React, { useState } from "react";
import styles from './Pagination.module.css';


function Pagination({setCurrentPage,countriesPerPage, totalCountries, paginate, currrentPage}){

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalCountries/countriesPerPage); i++) {
        pageNumbers.push(i);
    }

    let currentPageNumbers = [];
    let [prev, setPrev] = useState(0);
    let [next, setNext] = useState(5);

    currentPageNumbers = pageNumbers.slice(prev, next);

    function handlePrev(){
        if(currrentPage === 0 || currrentPage === 5 || currrentPage === 10 || currrentPage === 15 || currrentPage === 20){
            if (!(prev === 0)){
                setPrev(prev - 5);
                setNext(next - 5);
            }
        }
        
        if(currrentPage > 1) setCurrentPage(currrentPage - 1)

    }

    function handleNext(){
        if(currrentPage === 5 || currrentPage === 10 || currrentPage === 15 || currrentPage === 20 || currrentPage === 25){
            if (!(next === 25)){
                setPrev(prev + 5);
                setNext(next + 5);
            }
        }
        if(currrentPage < 25) setCurrentPage(currrentPage + 1)
        
    }

    return(
        <div>
            <label className={styles.currentPage}>{currrentPage}/25</label>
            <ul className={styles.pagContainer}>
            <div className={styles.directionContainer}>
            <button onClick={()=> {if (!(prev === 0)){setPrev(prev - 5);setNext(next - 5);if(currrentPage > 5) setCurrentPage(currrentPage - 5)}}}className={styles.currentButton}>{'<<'}</button>
            <button onClick={handlePrev} className={styles.currentButton}>{'<'}</button>
            </div>
                {pageNumbers && currentPageNumbers.map(n => (
                    <div className={styles.divPagination} key={n}>
                        <button className={styles.pagButton} onClick={() => {paginate(n)}}>
                            {n}
                        </button>
                    </div>
                ))}
                <div className={styles.directionContainer}>
                <button onClick={handleNext} className={styles.currentButton}>{'>'}</button>
                <button onClick={()=>{if (!(next === 25)){setPrev(prev + 5);setNext(next + 5);if(currrentPage < 25) setCurrentPage(currrentPage + 5)}}} className={styles.currentButton}>{'>>'}</button>
                </div>
            </ul>
        </div>
    )
}
    



export default Pagination;