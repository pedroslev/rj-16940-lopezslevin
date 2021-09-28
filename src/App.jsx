import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';
import NavBar from './components/NavBar/NavBar.js';
import NotFound from './pages/NotFound';
import Footer from './components/Footer/Footer.jsx'
import { CartProvider } from "./context/CartContext.js";
import Buy from "./pages/Buy";

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
    <NavBar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/buy" component={Buy} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
