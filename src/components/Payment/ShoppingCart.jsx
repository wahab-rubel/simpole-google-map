import React, { useState } from 'react';

function ShoppingCart() {
    const [addressType, setAddressType] = useState('Home');
    const [paymentMethod, setPaymentMethod] = useState('Visa');

    return (
        <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center py-12 px-6">
            <div className="max-w-3xl w-full bg-gray-800 shadow-lg rounded-lg p-8">
                <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>

                {/* Shipping Information */}
                <h3 className="text-xl font-semibold mb-4">Shipping Information</h3>
                <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium">First name</label>
                            <input type="text" placeholder="Enter your first name" className="w-full mt-1 p-2 bg-gray-700 rounded" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Last name</label>
                            <input type="text" placeholder="Enter your last name" className="w-full mt-1 p-2 bg-gray-700 rounded" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium">Email address</label>
                            <input type="email" placeholder="Enter your email" className="w-full mt-1 p-2 bg-gray-700 rounded" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Phone number</label>
                            <input type="tel" placeholder="+1 555-555-5555" className="w-full mt-1 p-2 bg-gray-700 rounded" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium">Address</label>
                            <input type="text" placeholder="Lane 5, Street 1" className="w-full mt-1 p-2 bg-gray-700 rounded" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Apt, suite, etc.</label>
                            <input type="text" placeholder="Apartment, studio, or floor" className="w-full mt-1 p-2 bg-gray-700 rounded" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium">City</label>
                            <input type="text" placeholder="Enter your city" className="w-full mt-1 p-2 bg-gray-700 rounded" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Country</label>
                            <select className="w-full mt-1 p-2 bg-gray-700 rounded">
                                <option>Select country</option>
                                <option>United States</option>
                                <option>Canada</option>
                                {/* Add more countries as needed */}
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium">Postal code</label>
                            <input type="text" placeholder="12345" className="w-full mt-1 p-2 bg-gray-700 rounded" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Address type</label>
                            <div className="flex items-center mt-1">
                                <label className="flex items-center mr-4">
                                    <input
                                        type="radio"
                                        name="addressType"
                                        value="Home"
                                        checked={addressType === 'Home'}
                                        onChange={() => setAddressType('Home')}
                                        className="mr-2"
                                    />
                                    Home
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="addressType"
                                        value="Office"
                                        checked={addressType === 'Office'}
                                        onChange={() => setAddressType('Office')}
                                        className="mr-2"
                                    />
                                    Office
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Payment Method */}
                    <h3 className="text-xl font-semibold mt-8 mb-4">Payment Method</h3>
                    <div className="flex justify-between gap-4">
                        <button
                            type="button"
                            onClick={() => setPaymentMethod('Visa')}
                            className={`w-full p-4 rounded-lg ${paymentMethod === 'Visa' ? 'bg-blue-700' : 'bg-gray-700'}`}>
                            Visa - 1234 ****
                        </button>
                        <button
                            type="button"
                            onClick={() => setPaymentMethod('MasterCard')}
                            className={`w-full p-4 rounded-lg ${paymentMethod === 'MasterCard' ? 'bg-blue-700' : 'bg-gray-700'}`}>
                            MasterCard - 8888 ****
                        </button>
                        <button
                            type="button"
                            onClick={() => setPaymentMethod('PayPal')}
                            className={`w-full p-4 rounded-lg ${paymentMethod === 'PayPal' ? 'bg-blue-700' : 'bg-gray-700'}`}>
                            PayPal
                        </button>
                    </div>

                    {/* Card Information */}
                    <div className="mt-8">
                        <label className="block text-sm font-medium">Card number</label>
                        <input type="text" placeholder="1234 5678 9012 3456" className="w-full mt-1 p-2 bg-gray-700 rounded" />
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm font-medium">Cardholder name</label>
                        <input type="text" placeholder="John Doe" className="w-full mt-1 p-2 bg-gray-700 rounded" />
                    </div>
                    <div className="mt-4">
                        <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            Same as shipping address
                        </label>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center mt-6">
                        <button type="submit" className="px-6 py-3 rounded-lg bg-purple-700 text-white font-bold hover:bg-purple-800 transition">
                            Confirm Order
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ShoppingCart;
