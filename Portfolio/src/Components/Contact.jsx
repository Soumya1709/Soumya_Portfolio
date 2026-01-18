import { Mail, User, MapPin, Github ,Instagram,Linkedin} from "lucide-react";
import emailjs from '@emailjs/browser'
import { useState } from "react";
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const handlesubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_plo5mpu', 'template_z1frr8e', e.target, 'Nwp98ZqmJLBr1sffR')
          .then((result) => {
              console.log(result.text); 
                alert('Message sent successfully!');
                setFormData({name: '', email: '', message: ''});
            }, (error) => {
                console.log(error.text);
                alert('An error occurred, please try again.');
            });
        e.target.reset();
    }
    return(
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Get in Touch
                </h2>
                <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 gap-8 ">
                    <form className="space-y-6 bg-black/50 border-white border p-6 rounded-xl hover:- translate-y-1 transistion-all" onSubmit={handlesubmit}>

                    <div className="relative border-white border ">
                        <input type="text" 
                        id = "name"
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required 
                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transistion focus:outline-none focus:border-blue-500 focus:bg-blue-500/10 "
                        placeholder="Name..."/>
                        
                        

                    </div>
                    <div className="relative border-white border ">
                        <input type="email" 
                        id = "email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required 
                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transistion focus:outline-none focus:border-blue-500 focus:bg-blue-500/10 "
                        placeholder="Email..."/>
                        
                        

                    </div>
                    <div className="relative border-white border">
                        <textarea 
                        id = "Message"
                        name="Message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required
                        rows={5} 
                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transistion focus:outline-none focus:border-blue-500 focus:bg-blue-500/10 "
                        placeholder="Message..."/>
                        
                        

                    </div>
                    <button type="submit" className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-cyan-500 transition-all duration-300">
                        Send Message
                    </button>
                </form>
                <div className="p-6 rounded-xl border-white bg-black/50 border hover:- translate-y-1 transistion-all">
                    <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Contact Information</h3>
                    <div className="mb-6">
                        <Mail className="h-6 w-6 inline mr-2" />
                        <span className="bg-purple-200 text-black px-3 py-1 rounded-full text-xl"> soumyaranchi05@gmail.com</span>
                    </div>
                    <div className="mb-6 text-left">
                        <User className=" h-6 w-6 inline mr-3" />
                        <span className="bg-purple-200 text-black px-3 py-1 rounded-full text-xl"> +91 9142202515</span>
                    </div>

                    <div className="mb-6 text-left">
                        <MapPin className=" h-6 w-6 inline mr-2" />
                        <span className="bg-purple-200 text-black px-3 py-1 rounded-full text-xl"> Bhubaneshwar,Odisha,India</span>
                    </div>
                    <div className="mb-6 text-left">
                        <Github className=" h-6 w-6 inline mr-3" />
                        <span className="bg-purple-200 text-black px-3 py-1 rounded-full text-xl">Soumya1709</span>
                    </div>
                    <div className="pt-4">
                        <div className=" mt-2 space-x-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 justify-items-center rounded-full bg-white/5 p-4">
                        <a href="https://www.instagram.com/soumya_ranchi_05/" target="_blank" rel="noopener noreferrer" className="mx-2 text-pink-500 hover:text-pink-700 transition-colors duration-300">
                            <Instagram />
                        </a>
                        <a href="https://www.linkedin.com/in/soumya-ranchi-8b7245234/" target="_blank" rel="noopener noreferrer" className="mx-2 text-blue-700 hover:text-blue-900 transition-colors duration-300">
                            <Linkedin />
                        </a>

                    </div>
                    </div>
                </div>
                </div>
            </div>   
        </section>

    )
}

export default Contact;