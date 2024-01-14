import axios from "axios";

const PRODUCT_SERVICE_URL = "http://localhost:8081/api/products";
const headers = {'apiKey': 'test'};

class ProductService {
    
    getAllProducts() {
        console.log("Executing - GET /api/products");
        var products = axios.get(PRODUCT_SERVICE_URL,{headers:headers});
        return products;
    }

    getOneProduct(productName) {
        console.log('Executing - GET /api/products/'+productName);
        var product = axios.get(PRODUCT_SERVICE_URL+'/'+productName,{headers:headers});
        return product;
    }

    saveOneProduct(product) {
        console.log('Executing - POST /api/products'+product);
        // eslint-disable-next-line no-redeclare
        var product = axios.post(PRODUCT_SERVICE_URL,product,{headers:headers});
        return product;
    }

    saveListOfProducts(products) {
        console.log('Executing - POST /api/products/'+products);
        // eslint-disable-next-line no-redeclare
        var products = axios.post(PRODUCT_SERVICE_URL+'/',products,{headers:headers});
        return products;
    }

    updateOneProduct(product) {
        console.log('Executing - PUT /api/products'+product);
        // eslint-disable-next-line no-redeclare
        var product = axios.post(PRODUCT_SERVICE_URL,product,{headers:headers});
        return product;
    }

    deleteProductByName(productName) {
        console.log('Executing - DELETE /api/products/'+productName);
        axios.post(PRODUCT_SERVICE_URL+'/'+productName,{headers:headers});
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ProductService();