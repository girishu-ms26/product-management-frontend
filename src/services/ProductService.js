import axios, { AxiosHeaders } from "axios";

const PRODUCT_SERVICE_URL = "http://localhost:8081/api/products";

class ProductService {
    getProducts(){
        console.log("Calling the service");
        const headers = {
            'apiKey': 'test'
          }
        var product = axios.get(PRODUCT_SERVICE_URL,{headers:headers});
        return product;
    }
}

export default new ProductService();