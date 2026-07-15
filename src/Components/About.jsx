const About = () => {
    const skillGroups = [
        { title: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C'] },
        { title: 'Frontend', items: ['React.js', 'Next.js', 'HTML5', 'Tailwind CSS', 'Responsive Design'] },
        { title: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'Socket.IO', 'JWT', 'OAuth 2.0'] },
        { title: 'Databases', items: ['MongoDB', 'PostgreSQL', 'MySQL'] },
        { title: 'DevOps & Tools', items: ['Git', 'GitHub', 'Docker', 'Kubernetes', 'Linux', 'CI/CD', 'Postman'] },
        { title: 'Concepts', items: ['Microservices', 'OOP Design Patterns', 'System Design', 'API Rate Limiting'] },
    ];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-5xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#F9F5F6] to-[#A1E3F9] bg-clip-text text-transparent">About Me</h2>
                <div className="rounded-xl p-8 border-white/10 bg-black/50 border backdrop-blur-sm hover:-translate-y-1 transition-all duration-300">
                    <p className="text-[#FFFDCB] mb-6 leading-relaxed">
                        I'm Soumya Sinha, a Computer Science undergraduate (CGPA 9.55/10) with hands-on experience building full-stack web applications
                        using the MERN stack. I've delivered real-time messaging systems, AI-powered campus tools, and secure REST API systems
                        serving active users &mdash; and I'm currently seeking a Software Engineer or Full-Stack Developer internship to contribute
                        to production-grade web systems.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skillGroups.map((group, gIndex) => (
                            <div key={gIndex} className="rounded-xl p-6 hover:-translate-y-1 transition-all duration-300 border-white/10 border bg-white/[0.02] text-left">
                                <h3 className="text-lg text-[#81E7AF] font-bold mb-4">{group.title}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {group.items.map((skill, index) => (
                                        <span key={index} className="bg-[#A1E3F9]/90 text-[#0B2A3B] px-3 py-1 rounded-full text-sm font-medium">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border bg-white/[0.02] hover:-translate-y-1 transition-all duration-300">
                            <h3 className="text-xl font-bold mb-4 text-[#81E7AF]">Education</h3>
                            <ul className="list-disc list-inside text-left text-[#AEF2F2] space-y-3">
                                <li>
                                    <strong>B.Tech in Computer Science Engineering</strong> &mdash; KIIT University (Expected July 2028)
                                </li>
                                <li>
                                    CGPA: <strong>9.55 / 10.00</strong>
                                </li>
                                <li>
                                    <strong>Coursework:</strong> Data Structures &amp; Algorithms, DBMS, Operating Systems, OOP, Web Development, Software Engineering, Computer Networks
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border bg-white/[0.02] hover:-translate-y-1 transition-all duration-300">
                            <h3 className="text-xl font-bold mb-4 text-[#81E7AF]">Research Experience</h3>
                            <div className="text-left text-gray-300 space-y-2">
                                <h4 className="font-semibold text-[#AEF2F2]">
                                    Comparative Study of AI-Driven Risk Resilience Frameworks
                                </h4>
                                <p className="text-sm text-gray-400">2026 &ndash; Present &middot; Independent Research</p>
                                <p>
                                    Proposed a hybrid framework combining Graph Neural Networks, Bayesian Deep Neural Networks,
                                    and Deep Reinforcement Learning for systemic financial risk assessment. Manuscript currently under review.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border-white/10 border bg-white/[0.02] hover:-translate-y-1 transition-all duration-300 mt-8 text-left">
                        <h3 className="text-xl font-bold mb-4 text-[#81E7AF]">Leadership &amp; Extracurricular</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
                            <div>
                                <h4 className="font-semibold text-[#AEF2F2]">USC KIIT &mdash; Organizing Committee Member</h4>
                                <p className="text-sm text-gray-400 mb-1">2025 &ndash; Present</p>
                                <p>Coordinated technical and professional development events; managed logistics and participant engagement.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-[#AEF2F2]">National Service Scheme (NSS) &mdash; Volunteer</h4>
                                <p className="text-sm text-gray-400 mb-1">2025 &ndash; Present</p>
                                <p>Contributed to community outreach, awareness campaigns, and educational programs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;
