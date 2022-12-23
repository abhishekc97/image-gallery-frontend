import axios from "axios";

// api to fetch all categories
export async function getCategories() {
    // const reqUrl = "http://127.0.0.1:3000/api/discover/categories";
    const reqUrl = `${process.env.BACKEND_URL}/api/discover/categories`; 
    const results = await axios.get(reqUrl);
    
    if(results.data) {
        return results.data;
    }
    
}

// api to fetch images based on category and filters
export async function getGalleryImages(categoryName, sortByDate = "", filterByLikes = "", shuffle = "") {
    
    const reqUrl = `${process.env.BACKEND_URL}/api/discover/images/${categoryName}?sortByDate=${sortByDate}&filterByLikes=${filterByLikes}&shuffle=${shuffle}`;
    console.log(reqUrl);
    const results = await axios.get(reqUrl);
    
    if(results.data) {
        return results.data;
    }
}

// add image to favorite api
export async function likeImage(imageId) {
    const reqUrl = `${process.env.BACKEND_URL}/api/discover/like/${imageId}`;
    console.log(reqUrl);
    const results = await axios.get(reqUrl);

    if(results.data) {
        return results.data;
    }
}
