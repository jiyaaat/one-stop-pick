import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import { Route, Routes } from 'react-router-dom';
import Product from './component/Product';
import Prod from './component/Prod';
import Cart from './component/Cart';



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Product />} />
        <Route exact path="/products/:id" element={<Prod />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;

