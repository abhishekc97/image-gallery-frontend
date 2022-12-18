import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { getCategories } from "../../api/discover";
import styles from "./Category.module.css";
import Filter from "../Filter/Filter"

function Category() {

    const navigate = useNavigate();
    let { categoryName } = useParams();

    // for demo of the categoryList.map
    const [categoryList, setCategoryList] = useState(["category-1", "category-2", "category-3", "category-4"]); // "category-1", "category-2", "category-3", "category-4"

    // loading categories with the api call
    async function fetchCategories() {
        const result = await getCategories();
        setCategoryList(result);
        
        // find the find element from result and set the default route to the first category from the result
        if (!categoryName) {
            const defaultCategory = categoryList[0];
            const defaultCategoryName = defaultCategory.name;
            navigate(`/${defaultCategoryName}`);
        }
    }
    useEffect(() => {
        fetchCategories()
    }, []);

    function navigateToCategory(categoryName) {
        navigate(`/${categoryName}`)
    }

    return ( 
        <div className={styles.containerWrapper}>
            <div>
                { categoryList.map((category, index) => ( 
                    <div onClick={() => 
                        {navigateToCategory(category.name)}} 
                    className={styles.category}> {category.name} </div>)) 
                }
            </div>
            <div className={styles.filterContainer}>
                <Filter />
            </div>
        </div>
    );
}

export default Category;