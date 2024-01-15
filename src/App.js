import {Route,Routes} from "react-router-dom"
import ProductsList from "./components/ProductsList"
import Update from "./components/Update.js";
import { Link } from "react-router-dom";
import Add from "./components/Add.js";


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
                <Route path="/update/" element={<Update />} />
                <Route path="/add" element={<Add />} />
            </Routes>
        </>
    )
}

export default App;