const Home = () => {

    return (
        <section id="home" className="min-h-screen flex relative justify-center items-center">
            <div className="text-center px-4 z-10">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[006A67]">
                    Hello, I'm Soumya Sinha
                </h1>
                <p className="text-lg mb-8 max-w-lg mx-auto text-[#AEF2F2]">I'm a full-stack developer passionate about creating seamless digital experiences.I am Also Proficient in Artificial Intelligence and Machine Learning.I love Collaborating with others.</p>
                <div className="flex justify-center space-x-4">
                <a href="#projects" className="bg-[#1D546D] hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] text-[#F3F4F4] font-medium py-3 px-6 rounded transition relative overflow-hidden">View Projects</a>
                <a href="#contact" className="bg-[#1D546D] hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] text-[#F3F4F4] font-medium py-3 px-6 rounded transition relative overflow-hidden">Contact Me</a>
            </div>
            </div>
            
        </section>
    );
}
export default Home;