import axios from "axios";

// api to fetch category
export async function getCategories() {
    const reqUrl = "http://127.0.0.1:3000/api/discover/categories"; 
    const results = await axios.get(reqUrl);
    
    if(results.data) {
        return results.data;
    }
    
}

// api to fetch images based on category and filters

// add image to favorite api
