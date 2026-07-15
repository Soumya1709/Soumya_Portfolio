import { Mail, Phone, MapPin, Github, Instagram, Linkedin } from "lucide-react";
import emailjs from '@emailjs/browser'
import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [sending, setSending] = useState(false);

    const handlesubmit = (e) => {
        e.preventDefault();
        setSending(true);
        emailjs.sendForm('service_plo5mpu', 'template_z1frr8e', e.target, 'Nwp98ZqmJLBr1sffR')
          .then(() => {
                alert('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            }, () => {
                alert('An error occurred, please try again.');
            })
          .finally(() => {
                setSending(false);
                e.target.reset();
          });
    }

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#F9F5F6] to-[#A1E3F9] bg-clip-text text-transparent text-center">
                    Get in Touch
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <form className="space-y-6 bg-black/50 border-white/10 border p-6 rounded-xl hover:-translate-y-1 transition-all duration-300 text-left" onSubmit={handlesubmit}>
                        <div>
                            <input type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-[#81E7AF] focus:bg-[#81E7AF]/5"
                                placeholder="Name..." />
                        </div>
                        <div>
                            <input type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-[#81E7AF] focus:bg-[#81E7AF]/5"
                                placeholder="Email..." />
                        </div>
                        <div>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                required
                                rows={5}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-[#81E7AF] focus:bg-[#81E7AF]/5"
                                placeholder="Message..." />
                        </div>
                        <button type="submit" disabled={sending} className="bg-gradient-to-r from-[#81E7AF] to-[#A1E3F9] text-[#0B2A3B] font-semibold px-6 py-3 rounded-lg hover:shadow-[0_0_15px_rgba(129,231,175,0.4)] transition-all duration-300 disabled:opacity-60 w-full">
                            {sending ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>

                    <div className="p-6 rounded-xl border-white/10 bg-black/50 border hover:-translate-y-1 transition-all duration-300 text-left">
                        <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-[#A1E3F9] to-[#81E7AF] bg-clip-text text-transparent">Contact Information</h3>

                        <a href="mailto:soumyaranchi05@gmail.com" className="flex items-center gap-3 mb-4 group">
                            <Mail className="h-5 w-5 text-[#81E7AF] shrink-0" />
                            <span className="text-[#FFFDCB] group-hover:text-[#81E7AF] transition-colors duration-300 break-all">soumyaranchi05@gmail.com</span>
                        </a>
                        <a href="tel:+919142202515" className="flex items-center gap-3 mb-4 group">
                            <Phone className="h-5 w-5 text-[#81E7AF] shrink-0" />
                            <span className="text-[#FFFDCB] group-hover:text-[#81E7AF] transition-colors duration-300">+91 9142202515</span>
                        </a>
                        <div className="flex items-center gap-3 mb-4">
                            <MapPin className="h-5 w-5 text-[#81E7AF] shrink-0" />
                            <span className="text-[#FFFDCB]">Bhubaneswar, Odisha, India</span>
                        </div>
                        <a href="https://github.com/Soumya1709" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 mb-6 group">
                            <Github className="h-5 w-5 text-[#81E7AF] shrink-0" />
                            <span className="text-[#FFFDCB] group-hover:text-[#81E7AF] transition-colors duration-300">github.com/Soumya1709</span>
                        </a>

                        <div className="flex items-center justify-center gap-6 rounded-full bg-white/5 p-4">
                            <a href="https://www.instagram.com/soumya_ranchi_05/" target="_blank" rel="noopener noreferrer" className="text-[#F3F4F4]/80 hover:text-pink-400 hover:-translate-y-0.5 transition-all duration-300">
                                <Instagram />
                            </a>
                            <a href="https://linkedin.com/in/soumya-sinha" target="_blank" rel="noopener noreferrer" className="text-[#F3F4F4]/80 hover:text-[#A1E3F9] hover:-translate-y-0.5 transition-all duration-300">
                                <Linkedin />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;
