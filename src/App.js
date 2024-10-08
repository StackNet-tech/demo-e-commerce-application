import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Men from './pages/Men';
import Women from './pages/Women';
import Kids from './pages/Kids';
import Products from './pages/Products';
import Footer from './components/Footer';
import ProductView from './pages/ProductView';
import Cart from './components/Cart';
import CheckOut from './components/Checkout';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import ImageGallery from './pages/ImageGallery';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
      <Navbar />
        <div className="flex-grow">
          <Routes>
          <Route path="/home" element={<Home />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/products" element={<Products />} />
            <Route path="/productView" element={<ProductView />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkOut" element={<CheckOut />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/imageGallery" element={<ImageGallery />} />
            <Route path="/navbar" element={<Navbar />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
