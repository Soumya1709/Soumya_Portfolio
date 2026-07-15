import { Award, BadgeCheck, Trophy, FileBadge2 } from 'lucide-react';

const certifications = [
    { name: 'RH124: Red Hat System Administration I', org: 'Red Hat Academy' },
    { name: 'RH134: Red Hat System Administration II', org: 'Red Hat Academy, 2026' },
    { name: 'UK Design Patent', org: 'UKIPO, 2026 · Patent No. 6515593' },
];

const Achievements = () => {
    return (
        <section id="achievements" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-5xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-[#F9F5F6] to-[#A1E3F9] bg-clip-text text-transparent">Achievements &amp; Certifications</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="p-6 rounded-xl border-white/10 border bg-white/[0.02] hover:-translate-y-1 transition-all duration-300">
                        <Trophy className="h-8 w-8 text-[#81E7AF] mx-auto mb-3" />
                        <p className="text-2xl font-bold text-[#F3F4F4]">200+</p>
                        <p className="text-sm text-[#AEF2F2]/70">DSA problems solved on LeetCode</p>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border bg-white/[0.02] hover:-translate-y-1 transition-all duration-300">
                        <Award className="h-8 w-8 text-[#81E7AF] mx-auto mb-3" />
                        <p className="text-2xl font-bold text-[#F3F4F4]">9.55/10</p>
                        <p className="text-sm text-[#AEF2F2]/70">CGPA, while shipping 3+ production-style projects</p>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border bg-white/[0.02] hover:-translate-y-1 transition-all duration-300">
                        <FileBadge2 className="h-8 w-8 text-[#81E7AF] mx-auto mb-3" />
                        <p className="text-2xl font-bold text-[#F3F4F4]">1</p>
                        <p className="text-sm text-[#AEF2F2]/70">UK Design Patent granted (UKIPO)</p>
                    </div>
                </div>

                <div className="p-6 rounded-xl border-white/10 border bg-black/50 backdrop-blur-sm text-left">
                    <h3 className="text-xl font-bold mb-4 text-[#81E7AF] text-center">Certifications &amp; Intellectual Property</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {certifications.map((cert, index) => (
                            <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-white/[0.02] border border-white/10 hover:-translate-y-1 transition-all duration-300">
                                <BadgeCheck className="h-5 w-5 text-[#A1E3F9] shrink-0 mt-1" />
                                <div>
                                    <p className="text-[#FFFDCB] font-medium text-sm">{cert.name}</p>
                                    <p className="text-[#AEF2F2]/60 text-xs mt-1">{cert.org}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Achievements;
