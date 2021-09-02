import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ProductViewer from './components/Cards/ProductViewer.js'

function App() {
  return (
    <div className="App">      
      <NavBar/>
      <ProductViewer />
    </div>
  );
}

export default App;
