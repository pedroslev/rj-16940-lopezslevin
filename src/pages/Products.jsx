import '../App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProductDetail from '../components/ProductDetail/ProductDetail';


function Products() {
  return (
    <div className="App">
        <ProductDetail />
    </div>
    );
  }
    
export default Products;