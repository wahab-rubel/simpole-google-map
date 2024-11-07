import React from 'react';
import { FaCode, FaMobileAlt, FaPaintBrush, FaCloud } from 'react-icons/fa';

function ServicesPage() {
    const services = [
        {
            title: "Web Development",
            description: "Building fast, responsive websites using modern web technologies like React, Next.js, and Tailwind CSS.",
            icon: <FaCode className="text-4xl text-purple-600" />
        },
        {
            title: "Mobile Development",
            description: "Creating user-friendly mobile applications that look and feel native on both iOS and Android.",
            icon: <FaMobileAlt className="text-4xl text-green-600" />
        },
        {
            title: "UI/UX Design",
            description: "Crafting intuitive and visually appealing interfaces that enhance the user experience.",
            icon: <FaPaintBrush className="text-4xl text-blue-600" />
        },
        {
            title: "Cloud Integration",
            description: "Integrating cloud solutions for scalability and flexibility using Firebase, AWS, and other cloud providers.",
            icon: <FaCloud className="text-4xl text-yellow-600" />
        }
    ];

    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold text-purple-700 mb-8">Our Services</h2>
                <p className="text-lg text-gray-600 mb-12">
                    We offer a wide range of services to help you bring your ideas to life.
                </p>

                {/* Services Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="mb-4">{service.icon}</div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ServicesPage;
