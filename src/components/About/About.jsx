import React from 'react';

function About() {
    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4 lg:px-20">
                <h2 className="text-4xl font-bold text-center text-purple-700 mb-8">About Me</h2>
                
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
                    
                    {/* Profile Image */}
                    <div className="lg:w-1/3 w-full text-center">
                        <img 
                            src="/public/images/personal image.png" 
                            alt="Your Name" 
                            className="rounded-full w-64 h-64 object-cover mx-auto border-4 border-purple-500 shadow-lg" 
                        />
                    </div>
                    
                    {/* Text Content */}
                    <div className="lg:w-2/3 w-full">
                        <p className="text-lg leading-relaxed text-gray-700 mb-4">
                            Hello! I’m Abdul Wahab Rubel, a passionate React developer with over 4 years of experience and more than 100 completed projects under my belt. I specialize in building seamless, high-performance applications using <span className="text-purple-700 font-bold">React</span>, <span className="text-purple-700 font-bold">Next.js</span>, and modern JavaScript.
                        </p>
                        
                        <p className="text-lg leading-relaxed text-gray-700 mb-4">
                            I thrive on turning complex challenges into simple, elegant solutions. My skill set includes <span className="text-purple-700 font-bold">HTML5</span>, <span className="text-purple-700 font-bold">CSS3</span>, <span className="text-purple-700 font-bold">Tailwind CSS</span>, <span className="text-purple-700 font-bold">JavaScript</span>, and backend expertise with <span className="text-purple-700 font-bold">Node.js</span> and <span className="text-purple-700 font-bold">Express.js</span>. Additionally, I am proficient in Firebase and MongoDB for authentication and data management.
                        </p>
                        
                        <p className="text-lg leading-relaxed text-gray-700 mb-4">
                            My approach to design and development is user-centered, and I enjoy collaborating with teams to bring creative visions to life. I am also skilled at translating Figma and PSD designs into fully responsive and dynamic interfaces.
                        </p>

                        <div className="mt-8">
                            <h3 className="text-2xl font-semibold text-purple-700 mb-4">Key Skills</h3>
                            <ul className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                                <li className="bg-purple-100 text-purple-700 px-4 py-2 rounded-lg shadow-md">HTML5</li>
                                <li className="bg-purple-100 text-purple-700 px-4 py-2 rounded-lg shadow-md">CSS3 / Tailwind CSS</li>
                                <li className="bg-purple-100 text-purple-700 px-4 py-2 rounded-lg shadow-md">JavaScript / ES6+</li>
                                <li className="bg-purple-100 text-purple-700 px-4 py-2 rounded-lg shadow-md">React.js</li>
                                <li className="bg-purple-100 text-purple-700 px-4 py-2 rounded-lg shadow-md">Next.js</li>
                                <li className="bg-purple-100 text-purple-700 px-4 py-2 rounded-lg shadow-md">Node.js / Express.js</li>
                                <li className="bg-purple-100 text-purple-700 px-4 py-2 rounded-lg shadow-md">Firebase / MongoDB</li>
                                <li className="bg-purple-100 text-purple-700 px-4 py-2 rounded-lg shadow-md">APIs / RESTful Services</li>
                                <li className="bg-purple-100 text-purple-700 px-4 py-2 rounded-lg shadow-md">Figma / PSD to HTML</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
