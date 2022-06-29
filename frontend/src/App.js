import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Menu from './components/Menu'
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Home />
      <Products />
    </div>
  );
}

export default App;
