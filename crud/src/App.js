import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {AddProduct} from "./Component-1/AddProduct";
import {Home} from "./Component-1/Home";
import {ProductList} from "./Component-1/ProductList";
import {Update} from "./Component-1/Update";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={'/'} element={<Home/>}>
                <Route index element={<ProductList/>} />
                <Route path={'add-product'} element={<AddProduct/>} />
                <Route path={'update/:id'} element={<Update/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
