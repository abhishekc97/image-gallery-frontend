import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { getCategories } from "../../api/discover";
import styles from "./Category.module.css";
import Filter from "../Filter/Filter"

function Category() {

    const navigate = useNavigate();
    let { categoryName } = useParams();

    // for demo of the categoryList.map
    const [categoryList, setCategoryList] = useState([
        {"name": "category-1"},
        {"name": "category-2"},
        {"name": "category-3"},
        {"name": "category-4"}
    ]);

    // loading categories with the dicover api call
    async function fetchCategories() {
        const result = await getCategories();
        setCategoryList(result);
        
        if (result) {
            if (!categoryName) {
                const defaultCategory = categoryList[0];
                const defaultCategoryName = defaultCategory.name;
                navigate(`/${defaultCategoryName}`);
            }
        }
    }
    useEffect(() => {
        fetchCategories()
    },[]);

    function navigateToCategory(categoryName) {
        navigate(`/${categoryName}`)
    }


    return ( 
        <div className={styles.categoryContainerWrapper}>
            <>
                { categoryList.map((category, index) => ( 
                    <div key={index}
                        onClick={ () => {navigateToCategory(category.name)} } 
                        className={styles.category} > 
                            {category.name} 
                    </div>
                    )) 
                }
            </>
            <div className={styles.filterContainer}>
                <Filter />
            </div>
        </div>
    );
}

export default Category;