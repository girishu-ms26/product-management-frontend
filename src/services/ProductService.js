import axios from "axios";

const PRODUCT_SERVICE_URL = "http://localhost:8081/api/products";

class ProductService {
    getProducts(){
        console.log("Calling the service");
        var product = axios.get(PRODUCT_SERVICE_URL);
        return product;
    }
}

export default new ProductService();