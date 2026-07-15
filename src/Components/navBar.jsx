import { useEffect } from "react";
import { X } from "lucide-react";

const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#achievements", label: "Achievements" },
    { href: "#contact", label: "Contact" },
];

const NavBar = ({ menuOpen, setMenuOpen }) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 p-4">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="font-mono text-xl font-bold text-white">
                        Soumya<span className="text-[#81E7AF]">Sinha</span>
                    </a>
                    <button
                        aria-label="Toggle menu"
                        className="w-7 h-5 relative cursor-pointer md:hidden z-50 flex items-center justify-center text-white"
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        {menuOpen ? <X className="h-6 w-6" /> : <span className="text-2xl leading-none">&#9776;</span>}
                    </button>
                    <div className="hidden md:flex space-x-8 items-center">
                        {links.map((link) => (
                            <a key={link.href} href={link.href} className="text-white hover:text-[#81E7AF] transition-colors duration-300">
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {menuOpen && (
                <div className="md:hidden fixed inset-0 top-[72px] bg-[rgba(10,10,10,0.97)] backdrop-blur-lg flex flex-col items-center justify-center space-y-8 z-40">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="text-2xl text-white hover:text-[#81E7AF] transition-colors duration-300"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}

export default NavBar;
