import axios from "axios";

const PRODUCT_SERVICE_URL = "http://localhost:8081/api/products";
const headers = {'apiKey': 'test'};

class ProductService {
    
    getAllProducts = async() => {
        console.log("Executing - GET /api/products");
        var products = axios.get(PRODUCT_SERVICE_URL,{headers:headers});
        return products;
    }

    getOneProduct = async(productName) =>  {
        console.log('Executing - GET /api/products/'+productName);
        var product = axios.get(PRODUCT_SERVICE_URL+'/'+productName,{headers:headers});
        return product;
    }

    saveOneProduct = async(product) => {
        console.log('Executing - POST /api/products');
        var productResponse = axios.post(PRODUCT_SERVICE_URL,product,{headers:headers});
        return productResponse;
    }

    updateOneProduct = async(product) => {
        console.log('Executing - PUT /api/products'+product);
        var productResponse = axios.put(PRODUCT_SERVICE_URL,product,{headers:headers});
        return productResponse;
    }

    deleteProductByName = async(productName) => {
        console.log('Executing - DELETE /api/products/'+productName);
        axios.delete(PRODUCT_SERVICE_URL+'/'+productName,{headers:headers});
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ProductService();