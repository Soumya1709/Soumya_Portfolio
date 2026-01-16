const Project = () => {
    return(
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="p-6 rounded-xl border-white/10 border hover:- translate-y-1 transistion-all">
                    <h3 className="text-xl font-bold mb-2">
                        GREENHEX
                    </h3>
                    <p className="text-gray-400 mb-4">Developed a web application for environmental sustainability using React and Node.js.</p>
                    <div>
                        {['React', 'Node.js', 'Express', 'MongoDB'].map((tech, index) => (
                            <span key={index} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm mr-2 hover:bg-blue-500/20 hover:shadow-[0_0_10px_rgba(59,130,246,0.5)] transistion-all">{tech}</span>
                        ))}
                    </div>
                    
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:- translate-y-1 transistion-all">
                    <h3 className="text-xl font-bold mb-2">
                        CHITCHAT
                    </h3>
                    <p className="text-gray-400 mb-4">Developed an AI Based Chat Application using React and Node.js.</p>
                    <div>
                        {['React', 'Node.js', 'Express', 'MongoDB'].map((tech, index) => (
                            <span key={index} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm mr-2 hover:bg-blue-500/20 hover:shadow-[0_0_10px_rgba(59,130,246,0.5)] transistion-all">{tech}</span>
                        ))}
                    </div>
                    
                </div>

            </div>
          </div> 
        </section>
        
    )
}

export default Project;

