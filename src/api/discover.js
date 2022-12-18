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
export async function getGalleryImages(category, shuffle, sortByDate, filterByLike) {
    const reqUrl = `http://127.0.0.1:3000/api/discover/images/${category}/${shuffle}?sortByDate=${sortByDate}filterByLikes=${filterByLike}`;
    const results = await axios.get(reqUrl);
    
    if(results.data) {
        return results.data;
    }
}

// add image to favorite api
export async function likeImage(imageId) {
    const reqUrl = `http://127.0.0.1:3000/api/discover/like/${imageId}`;
    const results = await axios.get(reqUrl);

    if(results.data) {
        return results.data;
    }
}
