import React, { useEffect } from "react";
import { useParams, useNavigate, createSearchParams } from "react-router-dom";

import styles from "./ShuffleButton.module.css";

function Shufflebutton() {

    const navigate = useNavigate();

    let {categoryName} = useParams();
    const urlParams = new URLSearchParams(window.location.search);

    const urlDateQueryString = urlParams.get("sortByDate");
    const urlLikeQueryString = urlParams.get("filterByLikes");


    let shuffle = "true";

    async function handleClick(shuffleValue) {
       
        /*
        const redirectURL = `?sortByDate=${urlDateQueryString}&filterByLikes=${urlLikeQueryString}&shuffle=${shuffle}`
        */
        if(shuffleValue) { 
            navigate({
                path:categoryName,
                search:createSearchParams({
                    sortByDate:`${urlDateQueryString}&shuffle=${shuffle}`, //  `${urlDateQueryString}&shuffle=${shuffle}`,
                    filterByLikes:urlLikeQueryString,
                }).toString()
                
            });
        }
    }

    useEffect(() => {
        handleClick();
    });

    return ( 
        <div className={styles.buttonContainer} >
            <button className={styles.shuffleButton} name="shuffle" value="true" onClick={() =>  handleClick(true) }>Shuffle</button> 
        </div>
     );
}

export default Shufflebutton;