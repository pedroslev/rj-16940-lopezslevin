
import '../App.css';
import ProductViewer from '../components/Cards/ProductViewer.js';
import Categorias from '../components/Categorias/Categorias.jsx';
import { BrowserRouter, Route, Switch } from "react-router-dom";



function Home() {
  return (
    <div className="App">
        <Categorias />
        <ProductViewer />
    </div>
  );
}

export default Home;