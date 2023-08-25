import { useState, useEffect } from 'react'
import './App.css'
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import Nav from './components/NavScroll'
import Home from './page/Home'
import Singlepagedata from './page/Singlepagedata'

import { setProducts } from './Slices/Productslice'
import { useDispatch, useSelector } from 'react-redux'
import Cartitems from './components/Cartitems'
import Searchpage from './page/Searchpage'
import Navbox from './components/Navbox'
import Dev from './page/Dev'



function App() {

  const dispatch = useDispatch()
  const fetchProducts = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      dispatch(setProducts(data));
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, [dispatch]);



  return (
    <BrowserRouter>
      <Nav />
      <Navbox />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singleproduct/:productID" element={<Singlepagedata />} />
        <Route path="/cart" element={<Cartitems />} />
        <Route path="/search/:searchID" element={<Searchpage />} />
        <Route path="/dev" element={<Dev />} />
      </Routes>
     
    </BrowserRouter>
  )
}

export default App
