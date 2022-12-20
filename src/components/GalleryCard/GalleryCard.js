import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./GalleryCard.module.css";

import { getGalleryImages } from "../../api/discover";

function GalleryCard() {
    
    // variables to set based on input
    let sortByDate;
    let filterByLikes;

    const {categoryName}  = useParams();
    // get the URL params from search window
    const urlParams = new URLSearchParams(window.location.search);
    // get individual query strings from URL params
    const urlDateQueryString = urlParams.get("sortByDate");
    const urlLikeQueryString = urlParams.get("filterByLikes");
    console.log("sortByDate:", urlDateQueryString);
    console.log("filterByLikes:", urlLikeQueryString);

    if(urlDateQueryString) sortByDate = urlDateQueryString;
    else if(urlLikeQueryString) filterByLikes = 1; // integer 1 because datatype of the image model for likes is Number and not boolean, else we get cast error
    console.log(urlDateQueryString, urlLikeQueryString);

    // state for galleryList, when images are fetched by the api call
    const [galleryList, setGalleryList] = useState([
    
    ]);

    /**
     * {
        imageLink: "https://images.unsplash.com/photo-1671210681777-4b7d2377ef69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        isLikes: false,
        name: "Image",
    } */ 

    // function to make the discover API call and fetch the images based on category and filters
    async function fetchGallery(categoryName, sortByDate, filterByLikes, shuffle) {

        const results = await getGalleryImages(categoryName, sortByDate, filterByLikes, shuffle);

        setGalleryList(results);
    }

    // using useeffect for fetching data each time page loads or states change
    useEffect( () => {
        fetchGallery(categoryName, sortByDate, filterByLikes )
    }, [categoryName, sortByDate, filterByLikes]);
    
    const [isClick, setClick] = useState(false);

    return ( 
        <div className={styles.imageGrid}>
            
            { galleryList.map((image, index) => (
                <div key={index}>
                    <img className={styles.imageCard} src={ image.imageLink } alt="" />
                </div>  
                )) 
            }
            
            
        </div> 
    );
}

export default GalleryCard;