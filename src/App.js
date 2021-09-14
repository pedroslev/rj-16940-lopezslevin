import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Home';
import Products from './Products';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
