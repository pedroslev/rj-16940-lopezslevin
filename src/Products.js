import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProductDetail from './components/ProductDetail/ProductDetail';


function Products() {
  return (
    <div className="App">
        <NavBar />
        <ProductDetail />
    </div>
      
      
    );
  }
    
export default Products;