const Contact = () => {
    return(
        <section id="contacts" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Get in Touch
                </h2>
                <form className="space-y-6">
                    <div className="relative ">
                        <input type="text" 
                        id = "name"
                        name="name"
                        required 
                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transistion focus:outline-none focus:border-blue-500 focus:bg-blue-500/10 "
                        placeholder="Name..."/>
                        
                        

                    </div>
                    <div className="relative ">
                        <input type="email" 
                        id = "email"
                        name="email"
                        required 
                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transistion focus:outline-none focus:border-blue-500 focus:bg-blue-500/10 "
                        placeholder="Email..."/>
                        
                        

                    </div>
                    <div className="relative ">
                        <textarea 
                        id = "Message"
                        name="Message"
                        required
                        rows={5} 
                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transistion focus:outline-none focus:border-blue-500 focus:bg-blue-500/10 "
                        placeholder="Message..."/>
                        
                        

                    </div>
                    <button type="submit" className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-cyan-500 transition-all duration-300">
                        Send Message
                    </button>
                </form>
            </div>   
        </section>

    )
}

export default Contact;