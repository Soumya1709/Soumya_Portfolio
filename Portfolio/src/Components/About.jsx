const About = () => {
    const frontendSkills = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'];
    const backendSkills = ['Node.js', 'Express', 'MongoDB', 'SQL', 'Python'];
    return(
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">About Me</h2>
                <div className="rounded-xl p-8 border-white bg-black/50 border hover:- translate-y-1 transistion-all">
                    <p className="text-gray-300 mb-6">
                        I'm Soumya Sinha, a passionate full-stack developer with expertise in Artificial Intelligence and Machine Learning. I love creating seamless digital experiences and collaborating with others to bring innovative ideas to life. With a strong foundation in both front-end and back-end technologies, I strive to build applications that are not only functional but also user-friendly and visually appealing.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                        <div className="rounded-xl p-6 hover:-translate-y-1 transistion-all border-white border">
                            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">FrontEnd</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((skill, index) => (
                                    <span key={index} className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">{skill}</span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-1 transistion-all border-white border">
                            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">BackEnd</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((skill, index) => (
                                    <span key={index} className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                        <div className="p-6 rounded-xl border-white border hover:- translate-y-1 transistion-all">
                            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Education</h3>
                            <ul className="list-disc list-inside text-left text-gray-300 space-y-4">
                                <li>
                                    <strong>Bachelor of Technology in Computer Science</strong> - KIIT University (2024 - 2028)
                                </li>
                                 <li>
                                    <strong>Relevant Course Work: Data Structures,Operating System,DBMS,Linux,COA,OOPJ</strong> 
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border-white border hover:- translate-y-1 transistion-all">
                            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Work Experience</h3>
                            <div className="space-y-4 text-left text-gray-300">
                                <h4 className="font-semibold ">{""}
                                    Web Developer At KONNEXIONS {""}
                                </h4>
                                <p>
                                    Developed and Maintain Web Applications
                                </p>
                                <h4 className="font-semibold ">{""}
                                    Event Manager At USC KIIT {""}
                                </h4>
                                <p>
                                    Organized and Managed College Events{""}
                                </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default About;