import React from "react";

import styles from "./ShuffleButton.module.css";
const discover = require("../../api/discover");

function Shufflebutton() {
    
    return ( 
        <div className={styles.buttonContainer}>
            <button className={styles.shuffleButton}>Shuffle</button> 
        </div>
     );
}

export default Shufflebutton;