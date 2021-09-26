import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';
import NavBar from './components/NavBar/NavBar.js';
import NotFound from './pages/NotFound';
import Footer from './components/Footer/Footer.jsx'
import { CartProvider } from "./context/CartContext.js";

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
    <NavBar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
