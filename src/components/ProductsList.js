import React, { useState, useEffect } from "react";
import ProductService from "../services/ProductService";
import { Link } from "react-router-dom";

const ProductsList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.getAllProducts().then((response) => {
            setProducts(response.data);
        });
    }, []);

    return (
        <div>
            <h1 className="text-center">Products List</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <td>productName</td>
                        <td>price</td>
                        <td>quantityAvailable</td>
                        <td>modifiedDate</td>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.productName}>
                            <td>{product.productName}</td>
                            <td>{product.price}</td>
                            <td>{product.quantityAvailable}</td>
                            <td>{product.modifiedDate}</td>
                            <td>
                            <Link to="/update"><button>Update</button></Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductsList;