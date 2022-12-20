import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./GalleryCard.module.css";

import { getGalleryImages, likeImage } from "../../api/discover";

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
    const [galleryList, setGalleryList] = useState([ ]);

    // function to make the discover API call and fetch the images based on category and filters
    async function fetchGallery(categoryName, sortByDate, filterByLikes, shuffle) {

        const results = await getGalleryImages(categoryName, sortByDate, filterByLikes, shuffle);

        setGalleryList(results);
    }

    // using useeffect for fetching data each time page loads or states change
    useEffect( () => {
        fetchGallery(categoryName, sortByDate, filterByLikes )
    }, [categoryName, sortByDate, filterByLikes ]);
    
    /** like an image */
 
    function handleLikeClick(id) {
        console.log(id);
        // call like api
        const results = likeImage(id);
        // forceUpdate();
    }

    return ( 
        <div className={styles.imageGrid}>
            
            { galleryList.map((image, index) => (
                <div key={index}>
                    <img className={styles.imageCard} src={ image.imageLink } alt="" />
                    <table>
                        <tr>
                            <td>
                                <h2 onClick={() => handleLikeClick(image._id) }>
                                    {image.likes ? "💖": "🤍"}
                                </h2>
                            </td>
                            <td><h3>{ image.name }</h3></td>
                        </tr>
                    </table>
                    
                </div>
                
                )) 
            }
            
            
        </div> 
    );
}

export default GalleryCard;