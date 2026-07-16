import { Github, MessageSquareText, Search, ShieldCheck } from 'lucide-react';
import ChitChat from '../assets/ChitChat.png';
import Greenhex from '../assets/Greenhex.png';
import Findora from '../assets/Findora.png';
import CreditCardFraud from '../assets/Fraud.png';

const projects = [
    {
        title: 'CHITCHAT',
        subtitle: 'AI-Powered Real-Time Chat Application',
        description: 'Architected a full-stack real-time chat app with bidirectional WebSocket communication via Socket.IO, supporting 50+ active users with sub-200ms message delivery. Google OAuth + JWT secure 100% of API endpoints, alongside real-time sentiment analysis on messages.',
        tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'JWT', 'Google OAuth'],
        image: ChitChat,
        icon: MessageSquareText,
        github: 'https://github.com/Soumya1709/Chit-Chat.git',
    },
    {
        title: 'GREENHEX',
        subtitle: 'Environmental Sustainability Web App',
        description: 'Developed a web application for environmental sustainability using React and Node.js, with a focus on clean UX and community engagement around sustainability initiatives.',
        tech: ['React', 'Node.js', 'Express', 'MongoDB'],
        image: Greenhex,
        icon: Search,
        github: 'https://github.com/Soumya1709/eco-gladiator.git',
    },
    {
        title: 'FINDORA',
        subtitle: 'AI-Powered Campus Lost & Found Portal',
        description: 'End-to-end MERN platform enabling students to report, search, and claim lost items. Integrated an AI-powered image-matching pipeline to auto-identify visually similar items, with JWT-based auth and role-based access control securing claim workflows.',
        tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'AI Image Matching'],
        image: Findora,
        icon: Search,
        github: 'https://github.com/Soumya1709/Findora.git',
    },
    {
        title: 'CREDIT CARD FRAUD DETECTION',
        subtitle: 'Machine Learning Pipeline',
        description: 'Built a fraud detection ML pipeline on a severely imbalanced dataset (~0.2% positive class) using SMOTE. Benchmarked Random Forest vs. XGBoost, reaching 83% precision-recall on the fraud class, evaluated via precision, recall, F1, and AUC-ROC.',
        tech: ['Python', 'scikit-learn', 'XGBoost', 'Random Forest', 'Pandas', 'NumPy', 'SMOTE'],
        image: CreditCardFraud,
        icon: ShieldCheck,
        github: 'https://github.com/Soumya1709/Credit_Card_Fraud_Model.git',
    },
];

const Project = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#F9F5F6] to-[#A1E3F9] bg-clip-text text-transparent">Projects</h2>
            <p className="text-[#AEF2F2]/70 mb-10">A few things I've built recently</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => {
                    const Icon = project.icon;
                    return (
                        <div key={index} className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(161,227,249,0.15)] transition-all duration-300 bg-black/80 text-left flex flex-col">
                            <div className="flex items-start justify-between mb-2">
                                <div>
                                    <h3 className="text-xl font-bold text-[#81E7AF]">{project.title}</h3>
                                    <p className="text-sm text-[#AEF2F2]/70">{project.subtitle}</p>
                                </div>
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[#F3F4F4]/70 hover:text-[#81E7AF] transition-colors duration-300 shrink-0 ml-3">
                                    <Github className="h-6 w-6" />
                                </a>
                            </div>
                            <p className="text-[#FFFDCB] mb-4 text-sm leading-relaxed">{project.description}</p>
                            <div className="mb-4">
                                {project.tech.map((tech, tIndex) => (
                                    <span key={tIndex} className="inline-block bg-[#A1E3F9] text-[#0B2A3B] px-3 py-1 rounded-full text-xs font-medium mr-2 mb-2 hover:bg-[#81E7AF] hover:shadow-[0_0_10px_rgba(129,231,175,0.5)] transition-all duration-300">{tech}</span>
                                ))}
                            </div>
                            <div className="mt-auto rounded-xl overflow-hidden hover:-translate-y-1 transition-all duration-300">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={`${project.title} preview`}
                                        className="rounded-xl w-full object-cover"
                                    />
                                ) : (
                                    <div className="rounded-xl w-full h-40 flex items-center justify-center bg-gradient-to-br from-[#0B2A3B] to-black border border-white/10">
                                        <Icon className="h-12 w-12 text-[#81E7AF]/60" />
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
          </div>
        </section>
    )
}

export default Project;
