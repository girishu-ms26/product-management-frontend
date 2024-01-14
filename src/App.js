import {Route,Routes} from "react-router-dom"
import ProductsList from "./components/ProductsList"
import { Link } from "react-router-dom";

function App() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/products">Products List</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/products" element={<ProductsList />} />
            </Routes>
        </>
    )
}

export default App;