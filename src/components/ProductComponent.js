import React from "react";
import ProductService from "../services/ProductService";

class ProductComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            products:[]
        }
    }

    componentDidMount() {
        ProductService.getProducts().then((response) => {
            this.setState({products: response.data})
        })
    }

    render() {
        return (
            <div>
                <h1 className = "text-center">Products List</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>
                            <td>productName</td>
                            <td>price</td>
                            <td>quantityAvailable</td>
                            <td>modifiedDate</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.products.map(
                                product => 
                                <tr key = {product.productName}>
                                    <td>{product.productName}</td>
                                    <td>{product.price}</td>
                                    <td>{product.quantityAvailable}</td>
                                    <td>{product.modifiedDate}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default ProductComponent;