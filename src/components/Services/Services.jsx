import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaNode, FaFigma, FaDatabase } from 'react-icons/fa';
import { SiNextdotjs, SiFirebase, SiMongodb, SiBootstrap } from 'react-icons/si';

function Services() {
    const services = [
        { name: 'HTML', icon: <FaHtml5 className="text-orange-600" />, description: 'Highly optimized HTML structure for modern applications.' },
        { name: 'Tailwind CSS', icon: <FaCss3Alt className="text-blue-600" />, description: 'Responsive design with Tailwind CSS for rapid styling.' },
        { name: 'Bootstrap', icon: <SiBootstrap className="text-purple-600" />, description: 'UI design with Bootstrap for elegant layouts.' },
        { name: 'React JS', icon: <FaReact className="text-blue-400" />, description: 'Dynamic, high-performing React-based applications.' },
        { name: 'Next JS', icon: <SiNextdotjs className="text-gray-800" />, description: 'SEO-friendly, server-rendered apps with Next.js.' },
        { name: 'Figma to HTML', icon: <FaFigma className="text-pink-500" />, description: 'Accurate HTML conversion of Figma designs.' },
        { name: 'PSD to HTML', icon: <FaHtml5 className="text-orange-600" />, description: 'Pixel-perfect PSD to HTML conversion service.' },
        { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" />, description: 'Efficient backend setup with Firebase.' },
        { name: 'Express JS', icon: <FaNode className="text-green-600" />, description: 'Fast backend APIs with Express.js.' },
        { name: 'MongoDB', icon: <SiMongodb className="text-green-700" />, description: 'Scalable and flexible database using MongoDB.' },
        { name: 'Other Services', icon: <FaDatabase className="text-gray-600" />, description: 'Custom web development solutions for your needs.' },
    ];

    return (
        <section className="min-h-screen bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Services</h2>
                <p className="text-center text-gray-600 mb-12">We offer a wide range of web development services to help you build robust and engaging digital experiences.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
                            <div className="text-6xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-800">{service.name}</h3>
                            <p className="text-gray-600 mt-2">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
