import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useCart } from './CartContext'; 
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import ContactForm from './components/Contact/ContactForm';
import Products from './components/Products/Products';
import ProductDetails from './components/ProductDetails/ProductDetails';
import NavBar from './components/NavBar/NavBar';
import ProductDetailsNavBar from './components/ProductDetailsNavBar';

function App() {
    const location = useLocation();
    const isProductDetailsPage = location.pathname.includes('/product/');
    const { cartCount } = useCart();

    return (
        <>
            {isProductDetailsPage ? <ProductDetailsNavBar cartCount={cartCount} /> : <NavBar />}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="services" element={<Services />} />
                <Route path="contact" element={<ContactForm />} />
                <Route path='products' element={<Products />} />
                <Route path='/product/:product_id' element={<ProductDetails />} />
            </Routes>
        </>
    );
}

export default App;
