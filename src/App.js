import {Route,Routes} from "react-router-dom"
import ProductsList from "./components/ProductsList"
import Add from "./components/Add.js";
import Update from "./components/Update.js";
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
                <Route path="/update" element={<Update />} />
            </Routes>
        </>
    )
}

export default App;