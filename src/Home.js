
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ProductViewer from './components/Cards/ProductViewer.js';
import { BrowserRouter, Route, Switch } from "react-router-dom";


function Home() {
  return (
    <div className="App">
        <NavBar/>
        <ProductViewer />
    </div>
      
      
  );
}

export default Home;