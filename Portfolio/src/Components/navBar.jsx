import { useEffect } from "react";

const NavBar = ({menuOpen,setMenuOpen}) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    }, [menuOpen]);
    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 p-4">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="font-mono text-xl font-bold text-white">
                        {""}
                        Soumya<span className="text-blue-400">Sinha</span>{""}</a>
                    <div className="w-7 h-5 related cursor-pointer md:hidden z-40" onClick={() => setMenuOpen((prev) => !prev)}>
                        &#9776;
                    </div>
                    <div className="hidden md:flex space-x-8 items-center">
                        <a href="#home" className="text-white hover:text-blue-400">{""}Home{""}</a>
                        <a href="#about" className="text-white hover:text-blue-400">{""}About{""}</a>
                        <a href="#projects" className="text-white hover:text-blue-400">{""}Projects{""}</a>
                        <a href="#contact" className="text-white hover:text-blue-400">{""}Contact{""}</a>
                </div>
                </div>
                    
                
            </div>

            
        </nav>
    );
}

export default NavBar;