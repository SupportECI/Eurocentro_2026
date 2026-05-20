import React from "react";
import { Star, MessageSquare } from "lucide-react";

// Estructura de datos limpia y adaptada al contexto real de la escuela de idiomas
const testimoniosData = [
    {
        id: 1,
        name: "Amara Silva",
        role: "Estudiante de Francés",
        text: "Excelente servicio y atención al detalle. Las clases superaron mis expectativas por completo, los maestros tienen mucha paciencia.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100",
        link: "https://facebook.com"
    },
    {
        id: 2,
        name: "Daniel Mendoza",
        role: "Ingeniero de Software (Inglés B2)",
        text: "Gracias a las sesiones de conversación perdí el miedo a hablar con clientes extranjeros. La flexibilidad de horarios me salvó.",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100",
        link: "https://facebook.com"
    },
    {
        id: 3,
        name: "Elena Rostova",
        role: "Alumna de Certificación TOEFL",
        text: "Me encantó el material visual y el soporte constante de los profesores. Logré la puntuación que requería para mi beca.",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100",
        link: "https://facebook.com"
    },
    {
        id: 4,
        name: "Alejandro Gómez",
        role: "Curso de Alemán Intensivo",
        text: "El método de inmersión total sí funciona. En pocos meses pasé de no entender nada a poder estructurar mis propias conversaciones.",
        avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100",
        link: "https://facebook.com"
    }
];

const Testimonios = () => {
    // Duplicamos el array para crear la ilusión óptica del bucle infinito continuo
    const doubleTestimonios = [...testimoniosData, ...testimoniosData];

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
                
                * {
                    font-family: 'Poppins', sans-serif;
                }

                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-320px * ${testimoniosData.length} - 1.5rem * ${testimoniosData.length})); }
                }

                .animate-marquee {
                    display: flex;
                    width: max-content;
                    gap: 1.5rem;
                    animation: scroll 30s linear infinite;
                }

                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>

            {/* SECCIÓN DE GALERÍA (Corregido textos y alturas) */}
            <section className="py-12 max-w-6xl mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900">Galería del Centro</h2>
                    <p className="text-sm text-slate-500 mt-2 max-w-lg mx-auto">
                        Una muestra visual de nuestras instalaciones, eventos culturales y comunidad de alumnos.
                    </p>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center gap-4 h-auto sm:h-100 w-full mt-6 mb-10 overflow-hidden">
                    <div className="relative group grow transition-all w-full sm:w-56 rounded-2xl overflow-hidden h-64 sm:h-full duration-500 lg:hover:w-full shadow-md">
                        <img className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1733824204474-e1b329a33612?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Instalaciones EuroCentro" />
                    </div>
                    <div className="relative group grow transition-all w-full sm:w-56 rounded-2xl overflow-hidden h-64 sm:h-full duration-500 lg:hover:w-full shadow-md">
                        <img className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Clases de Idiomas" />
                    </div>
                    <div className="relative group grow transition-all w-full sm:w-56 rounded-2xl overflow-hidden h-64 sm:h-full duration-500 lg:hover:w-full shadow-md">
                        <img className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105" src="https://plus.unsplash.com/premium_photo-1681248156496-550d1ad34c65?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Alumnos Graduados" />
                    </div>
                </div>
            </section>

            {/* SECCIÓN DE TESTIMONIOS (Alineado estéticamente con el título) */}
            <section className="py-12 bg-slate-50/50 border-t border-b border-gray-100 overflow-hidden">
                <div className="text-center mb-10 px-4">
                    <span className="text-blue-600 font-bold uppercase text-xs tracking-widest bg-blue-50 px-4 py-1.5 rounded-full inline-flex items-center gap-2 mb-3">
                        <MessageSquare className="h-3.5 w-3.5" /> Opiniones Reales
                    </span>
                    <h3 className="text-3xl font-bold text-gray-900">Lo que dicen nuestros alumnos</h3>
                    <p className="text-sm text-slate-500 mt-2">Casos de éxito de personas que transformaron su futuro con nosotros.</p>
                </div>

                {/* Contenedor del Carrusel Infinito con máscaras difuminadas reales */}
                <div className="relative w-full overflow-hidden py-4 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-16 sm:before:w-32 before:bg-gradient-to-r before:from-white sm:before:from-slate-50/80 before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-16 sm:after:w-32 after:bg-gradient-to-l after:from-white sm:after:from-slate-50/80 after:to-transparent">
                    <div className="animate-marquee">
                        {doubleTestimonios.map((testimonio, index) => (
                            <div 
                                key={`${testimonio.id}-${index}`} 
                                className="w-80 shrink-0 border border-gray-100 rounded-2xl bg-white shadow-md shadow-black/5 flex flex-col justify-between overflow-hidden group/card hover:border-blue-200 transition-colors duration-300"
                            >
                                <div className="p-6">
                                    {/* Componente de Estrellas Calificación Agregado */}
                                    <div className="flex gap-0.5 mb-4 text-amber-400">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="h-4 w-4 fill-current" />
                                        ))}
                                    </div>

                                    <p className="text-gray-600 leading-relaxed italic text-sm">
                                        "{testimonio.text}"
                                    </p>
                                </div>
                                
                                {/* Footer de la tarjeta con información del alumno */}
                                <div className="mt-auto">
                                    <div className="flex items-center gap-3 px-6 py-4 bg-gray-50/80 border-t border-gray-50">
                                        <img className="h-10 w-10 rounded-full object-cover border border-gray-100 shadow-xs" src={testimonio.avatar} alt={testimonio.name} />
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-sm font-semibold text-gray-900 truncate">{testimonio.name}</h4>
                                            <p className="text-gray-400 text-xs truncate">{testimonio.role}</p>
                                        </div>
                                        <div className="shrink-0">
                                            <a 
                                                href={testimonio.link} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="text-blue-600 hover:text-blue-700 font-medium text-xs flex items-center gap-1 transition-colors bg-white border border-gray-200 px-2.5 py-1 rounded-lg hover:shadow-xs"
                                            >
                                                {/* Icono discreto de enlace de Facebook */}
                                                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                                                </svg>
                                                Ver
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Testimonios;