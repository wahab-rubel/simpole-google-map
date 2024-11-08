import React, { useState } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        socialMedia: '',
        fatherName: '',
        motherName: '',
        country: '',
        city: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        // Add form submission logic (e.g., API call) here
    };

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Contact Us</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">First Name</label>
                            <input 
                                type="text" 
                                name="firstName" 
                                value={formData.firstName} 
                                onChange={handleChange} 
                                className="mt-1 p-2 border border-gray-300 rounded w-full" 
                                required 
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Last Name</label>
                            <input 
                                type="text" 
                                name="lastName" 
                                value={formData.lastName} 
                                onChange={handleChange} 
                                className="mt-1 p-2 border border-gray-300 rounded w-full" 
                                required 
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input 
                                type="email" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                className="mt-1 p-2 border border-gray-300 rounded w-full" 
                                required 
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                            <input 
                                type="tel" 
                                name="phone" 
                                value={formData.phone} 
                                onChange={handleChange} 
                                className="mt-1 p-2 border border-gray-300 rounded w-full" 
                                required 
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Social Media Link</label>
                            <input 
                                type="url" 
                                name="socialMedia" 
                                value={formData.socialMedia} 
                                onChange={handleChange} 
                                className="mt-1 p-2 border border-gray-300 rounded w-full" 
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Father's Name</label>
                            <input 
                                type="text" 
                                name="fatherName" 
                                value={formData.fatherName} 
                                onChange={handleChange} 
                                className="mt-1 p-2 border border-gray-300 rounded w-full" 
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Mother's Name</label>
                            <input 
                                type="text" 
                                name="motherName" 
                                value={formData.motherName} 
                                onChange={handleChange} 
                                className="mt-1 p-2 border border-gray-300 rounded w-full" 
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Country</label>
                            <input 
                                type="text" 
                                name="country" 
                                value={formData.country} 
                                onChange={handleChange} 
                                className="mt-1 p-2 border border-gray-300 rounded w-full" 
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">City</label>
                        <input 
                            type="text" 
                            name="city" 
                            value={formData.city} 
                            onChange={handleChange} 
                            className="mt-1 p-2 border border-gray-300 rounded w-full" 
                        />
                    </div>
                    <div className="text-center mt-6">
                        <button 
                            type="submit" 
                            className="px-6 py-3 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
