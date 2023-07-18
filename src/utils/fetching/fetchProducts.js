import axios from "axios";

export const getProducts = async() => {
    try {
        const prods = await axios(
            "https://my-json-server.typicode.com/arka90/products/products"
        );
        console.log('get Products', prods);
        return prods;
    } catch (err) {
        console.log("Error In fetching");
    }
};