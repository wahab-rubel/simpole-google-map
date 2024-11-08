import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CiShoppingCart } from 'react-icons/ci';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="w-full bg-purple-600 text-white shadow-lg">
            <div className="container mx-auto px-5 py-5 flex justify-between items-center">
                {/* Logo */}
                <NavLink to="/" className="text-2xl font-bold">
                    MyBrand
                </NavLink>

                {/* Desktop Navigation */}
                <nav >
                    <ul className="hidden md:flex space-x-6">
                    <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? "bg-purple-950 p-2 rounded-lg" : ''}>Home</NavLink>
                    </li>
                    <li>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "bg-purple-950 p-2 rounded-lg" : ''}>About</NavLink>
                    </li>
                    <li>
                    <NavLink to="/services" className={({ isActive }) => isActive ? "bg-purple-950 p-2 rounded-lg" : ''}>Services</NavLink>
                    </li>
                   <li>
                   <NavLink to="/contact" className={({ isActive }) => isActive ? "bg-purple-950 p-2 rounded-lg" : ''}>Contact</NavLink>
                   </li>
                   <li>
                   <NavLink to="/products" className={({ isActive }) => isActive ? "bg-purple-950 p-2 rounded-lg" : ''}>Products</NavLink>
                   </li>
                   <li>
                   <NavLink to="/shoppingCart" className={({ isActive }) => isActive ? "bg-purple-950 p-2 rounded-lg" : ''}>Shopping Now</NavLink>
                   </li>
                    </ul>
                </nav>

                {/* Icons */}
                <div className="hidden md:flex space-x-4 items-center">
                    <NavLink to="/cart" className="relative">
                        <CiShoppingCart size={24} />
                        {/* Cart item count */}
                        <span className="absolute top-0 right-0 bg-red-500 text-xs text-white rounded-full px-1">
                            3
                        </span>
                    </NavLink>
                    <NavLink to="/profile">
                        <FaUserCircle size={24} />
                    </NavLink>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={toggleMenu}
                >
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <nav className="md:hidden bg-purple-700 p-4 space-y-2 text-center">
                    <NavLink to="/" className="block hover:text-yellow-300 transition">Home</NavLink>
                    <NavLink to="/about" className="block hover:text-yellow-300 transition">About</NavLink>
                    <NavLink to="/services" className="block hover:text-yellow-300 transition">Services</NavLink>
                    <NavLink to="/contact" className="block hover:text-yellow-300 transition">Contact</NavLink>
                    <div className="flex justify-center space-x-4 mt-4">
                        <NavLink to="/cart">
                            <CiShoppingCart size={24} />
                        </NavLink>
                        <NavLink to="/profile">
                            <FaUserCircle size={24} />
                        </NavLink>
                    </div>
                </nav>
            )}
        </header>
    );
}

export default Navbar;
