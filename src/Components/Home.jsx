const Home = () => {

    return (
        <section id="home" className="min-h-screen flex relative justify-center items-center">
            <div className="text-center px-4 z-10 max-w-3xl mx-auto">
                <p className="text-[#81E7AF] font-mono text-sm md:text-base mb-4 tracking-widest uppercase">Software Engineer &middot; Full-Stack Developer</p>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#F3F4F4] leading-tight">
                    Hello, I'm <span className="bg-gradient-to-r from-[#A1E3F9] to-[#81E7AF] bg-clip-text text-transparent">Soumya Sinha</span>
                </h1>
                <p className="text-lg mb-2 max-w-xl mx-auto text-[#FADA7A]">
                    CS undergrad (CGPA 9.55/10) building full-stack MERN applications &mdash; real-time systems, AI-powered tools, and secure REST APIs.
                </p>
                <p className="text-base mb-8 max-w-xl mx-auto text-[#AEF2F2]/80">
                    Open to Software Engineer &amp; Full-Stack Developer internships.
                </p>
                <div className="flex justify-center flex-wrap gap-4">
                <a href="#projects" className="bg-[#819A91] hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(129,231,175,0.4)] text-[#F3F4F4] font-medium py-3 px-6 rounded-lg transition-all duration-300 relative overflow-hidden">View Projects</a>
                <a href="#contact" className="border border-[#81E7AF]/50 hover:-translate-y-0.5 hover:bg-[#81E7AF]/10 hover:shadow-[0_0_15px_rgba(129,231,175,0.3)] text-[#F3F4F4] font-medium py-3 px-6 rounded-lg transition-all duration-300 relative overflow-hidden">Contact Me</a>
            </div>
            </div>
            
        </section>
    );
}
export default Home;