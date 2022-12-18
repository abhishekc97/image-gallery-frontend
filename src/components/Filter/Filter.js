import React, { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import styles from "./Filter.module.css";

function Filter() {
    const navigate = useNavigate();

    function onFilterChange(event) {
        console.log(event.target.name, event.target.value);
        if(event.target.value ==="asc" || event.target.value === "desc") {
            navigate({
                pathname: "",
                search:createSearchParams({
                    sortByDate: event.target.value
                }).toString()
            });
        } else {
            navigate({
                pathname: "",
                search:createSearchParams({
                    sortByDate: event.target.value
                }).toString()
            });
        }
    }

    return ( 
        <div className={styles.filter}>
            <select onChange={onFilterChange}>
                <option value="" selected disabled >Filter</option>
                <option name="sortByDate" value="asc" >Sort by date (asc)</option>
                <option name="sortByDate" value="desc" >Sort by date (desc)</option>
                <option name="filterByLike" value="like">Filter by likes</option>
            </select>
        
        
        </div>
    );
}

export default Filter;