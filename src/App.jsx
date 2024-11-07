
import React from 'react';
import { BrowserRouter as Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Products from './components/Products/Products';

function App() {
    const location = useLocation();
    const isProductDetailsPage = location.pathname.includes('/product/');
    return (
        <div>
             {isProductDetailsPage ? <ProductDetailsNavBar cartCount={3} /> : <NavBar />}
            <Routes>
    
                    <Route index element={<Home />} />  
                    <Route path="about" element={<About />} /> 
                    <Route path="services" element={<Services />} /> 
                    <Route path="contact" element={<Contact />} /> 
                    <Route path='products' element={<Products />} />
               
            </Routes>
        </div>
    );
}

export default App;
