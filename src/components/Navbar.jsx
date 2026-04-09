import React from "react";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-8 py-4 bg-[#1211ab] shadow-md sticky top-0 z-50">
            
            <div className="flex items-center gap-4 cursor-pointer">
                <img 
                    src="/Euro-centro-lg.png" 
                    alt="logo"
                    className="w-24 h-auto md:w-32 lg:w-30 object-contain" 
                />
            </div>

            <ul className="hidden lg:flex space-x-8 text-white font-medium">
                <li className="hover:text-yellow-400 transition-colors cursor-pointer">Inicio</li>
                <li className="hover:text-yellow-400 transition-colors cursor-pointer">Nosotros</li>
                <li className="hover:text-yellow-400 transition-colors cursor-pointer">Servicios</li>
                <li className="hover:text-yellow-400 transition-colors cursor-pointer">Contacto</li>
            </ul>

            <div className="hidden lg:block">
                <button className="bg-yellow-400 text-[#1211ab] px-6 py-2.5 rounded-full font-bold hover:bg-yellow-300 transition-all shadow-md hover:shadow-lg">
                    Solicitar clase muestra
                </button>
            </div>

            <div className="lg:hidden text-white text-3xl cursor-pointer">
                ☰
            </div>
        </nav>
    )
}

export default Navbar;