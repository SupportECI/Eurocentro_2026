import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const enlacesMenu = [
        { nombre: "Inicio", ruta: "/" },
        { nombre: "Testimonios", ruta: "/testimonios" },
        { nombre: "Nosotros", ruta: "/nosotros" },
    ];

    return (
        <nav className="bg-[#1211ab] shadow-md sticky top-0 z-50">
            {/* Contenedor Principal del Navbar */}
            <div className="flex justify-between items-center px-8 py-4">
                <div className="flex items-center gap-4 cursor-pointer">
                    <Link to='/' onClick={closeMenu}>
                        <img
                            src="/Euro-centro-lg.png"
                            alt="logo"
                            className="w-24 h-auto md:w-32 lg:w-30 object-contain"
                        />
                    </Link>
                </div>

                {/* Menú de Escritorio (Oculto en móviles) */}
                <ul className="hidden lg:flex space-x-6 text-white font-medium items-center">
                    {enlacesMenu.slice(0, 3).map((enlace, index) => (
                        <li key={index} className="cursor-pointer h-full flex items-center">
                            <NavLink 
                                to={enlace.ruta}
                                className={({ isActive }) => 
                                    `pb-1 transition-all duration-200 border-b-2 ${
                                        isActive 
                                        ? 'border-yellow-400 text-yellow-400 font-semibold' 
                                        : 'border-transparent text-white hover:text-yellow-400'
                                    }`
                                }
                            >
                                {enlace.nombre}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <div 
                    className="lg:hidden text-white text-3xl cursor-pointer select-none"
                    onClick={toggleMenu}
                >
                    {isOpen ? "✕" : "☰"}
                </div>
            </div>

            <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
                <ul className="bg-[#1211ab] px-8 pb-6 space-y-4 text-white font-medium border-t border-blue-800 pt-2">
                    {enlacesMenu.map((enlace, index) => (
                        <li key={index} className="cursor-pointer">
                            <NavLink 
                                to={enlace.ruta} 
                                onClick={closeMenu}
                                className={({ isActive }) => 
                                    `block py-1 pl-2 transition-all duration-200 border-l-2 ${
                                        isActive 
                                        ? 'border-yellow-400 text-yellow-400 font-bold' 
                                        : 'border-transparent text-white hover:text-yellow-400'
                                    }`
                                }
                            >
                                {enlace.nombre}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;