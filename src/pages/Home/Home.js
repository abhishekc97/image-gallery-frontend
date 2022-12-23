import { React, useRef } from "react";

import Category from "../../components/Category/Category";
import GalleryCard from "../../components/GalleryCard/GalleryCard";
import ShuffleButton from "../../components/ShuffleButton/ShuffleButton";
// importing css in modular way
import styles from "./Home.module.css"

function Home() {

    const buttonRef = useRef(null);

    return ( 
    <div className = {styles.container}>  
        <div className = {styles.innerContainer}>
            <Category/>
            <GalleryCard buttonRef={buttonRef} />
        </div>
            <ShuffleButton ref={buttonRef}/>
        </div>
    );
}

export default Home;