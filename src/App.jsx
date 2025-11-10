import './App.css'
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ViewCart from './components/ViewCart';
import Home from './components/Home';
import { createContext, useEffect, useState } from 'react';

export const cartContext = createContext();

function App() {
  
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Error parsing cart data:", error);
      return [];
    }
  });

 
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <cartContext.Provider value={{ cart, setCart }}>
      <BrowserRouter>
        <Header cart={cart} />
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<ViewCart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </cartContext.Provider>
  );
}

export default App;
