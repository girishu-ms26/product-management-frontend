import React, { useState } from "react";
import ProductService from "../services/ProductService";
import {useNavigate} from 'react-router-dom';


function Add () {
    const navigate = useNavigate();
    var [product,setProduct] = useState({
        productName:"",
        quantityAvailable:"",
        price:""
    })
    function handle(e){
        const newProduct={...product}
        newProduct[e.target.id] = e.target.value
        setProduct(newProduct)
        console.log(newProduct)
    }
    function submit(e) {
        e.preventDefault();
        const p = {
            productName: product.productName,
            quantityAvailable: product.quantityAvailable,
            price: product.price
         }
        ProductService.saveOneProduct(p);
        navigate("/products");
        window.location.reload(true);
    }
    return (
        <>
        <div><h1>Add Product</h1></div>
        <form onSubmit={(e)=> submit(e)}>
            <input onChange={(e)=>handle(e)} placeholder="Enter Product Name" id="productName" value={product.productName} type="text"/><br/>
            <input onChange={(e)=>handle(e)} placeholder="Enter Quantity Available" id="quantityAvailable" value={product.quantityAvailable} type="text"/><br/>
            <input onChange={(e)=>handle(e)} placeholder="Enter Price" id="price" value={product.price} type="text"/><br/>
            <button>Submit</button>
        </form>
        </>
    );
};

export default Add;