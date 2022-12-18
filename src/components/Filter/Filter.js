import React, { useState } from "react";
import styles from "./Filter.module.css";

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Filter() {
    const [dropdownList, setDropdownList] = useState([]);
    
    return ( 
        <div className={styles.container}>
            
        <DropdownButton id="dropdown-basic-button" title="Filter">
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
        
        </div>
     );
}

export default Filter;