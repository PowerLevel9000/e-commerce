import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Default from './components/Default';
import Details from './components/Details';
import Cart from './components/Cart';
import ProductList from './components/ProductList';

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<ProductList />} />
            <Route path='/details' element={<Details />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<Default />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
