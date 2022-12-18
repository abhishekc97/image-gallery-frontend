import { React } from "react";

import Category from "../../components/Category/Category";
import GalleryCard from "../../components/GalleryCard/GalleryCard";
import ShuffleButton from "../../components/ShuffleButton/ShuffleButton";
// importing css in modular way
import styles from "./Home.module.css"

function Home() {
    return ( 
    <div className = {styles.container}>  
        <div className = {styles.innerContainer}>
        <Category/>
        <GalleryCard />
        </div>
            <ShuffleButton />
        </div>
    );
}

export default Home;