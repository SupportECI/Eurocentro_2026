import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { posts } from '../data/cursos.jsx';
import { CheckCircle2, Clock, Users, Calendar, Star, ArrowRight, MessageSquare } from "lucide-react";
import banner from '../assets/escuela-de-idiomas.webp';

const DetallesIdioma = () => {
    const { id } = useParams();
    const curso = posts.find((item) => item.id === id);

    if (!curso) return <div className="py-20 text-center text-xl font-medium text-gray-600">Idioma no encontrado</div>;

    // 1. Estado para controlar los campos del formulario
    const [formData, setFormData] = useState({
        nombre: '',
        whatsapp: '',
        email: ''
    });

    // Estado para capturar los errores específicos de cada input
    const [errors, setErrors] = useState({});
    const [formError, setFormError] = useState('');

    // 2. Manejador de cambios en los inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        
        if (name === "whatsapp") {
            const numericValue = value.replace(/\D/g, '');
            // Limitamos a 10 dígitos estándar para México/Latam por comodidad visual en este formulario
            if (numericValue.length > 10) return; 
            
            setFormData({ ...formData, [name]: numericValue });
            if (errors.whatsapp) setErrors({ ...errors, whatsapp: null });
            return;
        }

        setFormData({ ...formData, [name]: value });
        
        // Si el campo ya tiene texto, limpiamos su error individual
        if (errors[name]) {
            setErrors({ ...errors, [name]: null });
        }
    };

    // 3. Manejador del envío de datos con validaciones detalladas
    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        // Validaciones individuales de presencia
        if (!formData.nombre.trim()) {
            newErrors.nombre = "El nombre completo es obligatorio.";
        }
        
        if (!formData.email.trim()) {
            newErrors.email = "El correo electrónico es obligatorio.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "El formato de correo no es válido.";
        }

        if (!formData.whatsapp.trim()) {
            newErrors.whatsapp = "El número de WhatsApp es obligatorio.";
        } else if (formData.whatsapp.length !== 10) {
            newErrors.whatsapp = "El número debe tener exactamente 10 dígitos.";
        }

        setErrors(newErrors);

        // Si hay errores en el objeto, detenemos el envío y mostramos alerta general
        if (Object.keys(newErrors).length > 0) {
            setFormError('Por favor, corrige los campos marcados en rojo.');
            return;
        }

        setFormError('');

        // Construcción del mensaje estructurado para WhatsApp
        const mensaje = `Hola EuroCentro, me interesa agendar una clase muestra para el idioma *${curso.title}*. Aquí están mis datos de contacto:
• *Nombre Completo:* ${formData.nombre}
• *WhatsApp:* +52${formData.whatsapp}
• *Correo Electrónico:* ${formData.email}`;

        const numeroTelefono = "525535209725"; 
        const url = `https://api.whatsapp.com/send?phone=${numeroTelefono}&text=${encodeURIComponent(mensaje)}`;

        window.open(url, "_blank");
    };

    // Datos simulados para los testimonios
    const testimonios = [
        {
            name: "Alejandra Gómez",
            role: "Estudiante de Alto Rendimiento",
            content: "El método de inmersión realmente funciona. Pasé de no hablar nada a mantener conversaciones fluidas en meses.",
            stars: 5
        },
        {
            name: "Carlos Mendoza",
            role: "Ingeniero de Software",
            content: "Gracias a las clases dinámicas y los horarios flexibles logré certificarme y conseguir un empleo remoto.",
            stars: 5
        },
        {
            name: "Mariana Silva",
            role: "Lic. en Negocios Internacionales",
            content: "Excelente nivel de los profesores. Las dinámicas de conversación te quitan el miedo a hablar desde el primer día.",
            stars: 5
        },
        {
            name: "Ricardo Trejo",
            role: "Estudiante de Intercambio",
            content: "El soporte y los materiales son de primera. Logré la puntuación que necesitaba para mi beca en el extranjero.",
            stars: 5
        }
    ];

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Berkshire+Swash&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            
                .font-berkshire {
                    font-family: 'Berkshire Swash', cursive;
                }

                .text-shadow-strong {
                    text-shadow: 0px 4px 12px rgba(0, 0, 0, 0.9);
                }

                /* Animación personalizada para el Slider Infinito */
                @keyframes sliderInfinito {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(calc(-50% - 1rem));
                    }
                }

                .animate-slider {
                    display: flex;
                    width: max-content;
                    gap: 2rem;
                    animation: sliderInfinito 25s linear infinite;
                }

                /* Pausa el slider cuando el usuario pone el cursor encima */
                .animate-slider:hover {
                    animation-play-state: paused;
                }
            `}</style>

            {/* 1. HERO SECTION */}
            <section className="relative flex items-center justify-center py-12 lg:py-20 text-white overflow-hidden min-h-screen lg:min-h-[850px] px-4">
                {curso.videoBg ? (
                    <video 
                        autoPlay 
                        loop 
                        muted 
                        playsInline 
                        className="absolute inset-0 w-full h-full object-fill lg:object-cover object-center z-0"
                    >
                        <source src={curso.videoBg} type="video/mp4" />
                    </video>
                ) : (
                    <div className="absolute inset-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1448518340475-e3c680e9b4be?q=80&w=2070')] bg-cover bg-center z-0" />
                )}

                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/40 to-transparent z-10" />

                <div className="relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto px-6">
                    <div className="text-center lg:text-left">
                        <h1 className="font-berkshire text-shadow-strong text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-white">
                            Habla <span className="text-yellow-400">{curso.title}</span> <br />
                            como un nativo.
                        </h1>
                        <p className="text-shadow-strong text-lg md:text-2xl mt-8 max-w-2xl mx-auto lg:mx-0 font-light text-gray-100 leading-relaxed">
                            Domina el idioma con nuestro método de inmersión total. 
                            Tu futuro profesional comienza con una nueva lengua.
                        </p>
                    </div>

                    <div className="flex justify-center lg:justify-end">
                        <div className="w-full max-w-md bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
                            <h3 className="text-2xl font-bold text-white mb-2 italic">¿Listo para empezar?</h3>
                            <p className="text-gray-300 mb-8 text-sm">Déjanos tus datos para agendar una clase muestra.</p>

                            <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
                                <div className="space-y-1">
                                    <label className="text-[10px] uppercase tracking-[2px] text-gray-300 ml-1">Nombre Completo</label>
                                    <input 
                                        type="text" 
                                        name="nombre"
                                        placeholder="Tu nombre aquí..." 
                                        value={formData.nombre}
                                        onChange={handleChange}
                                        className={`w-full h-12 bg-black/30 border rounded-xl px-4 outline-none focus:ring-1 transition-all text-white
                                        ${errors.nombre ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-yellow-400 focus:ring-yellow-400'}`}
                                    />
                                    {errors.nombre && <p className="text-red-400 text-xs pl-1 mt-0.5">{errors.nombre}</p>}
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[10px] uppercase tracking-[2px] text-gray-300 ml-1">WhatsApp</label>
                                    <input 
                                        type="tel" 
                                        name="whatsapp"
                                        placeholder="Ej: 5512345678 (10 dígitos)" 
                                        value={formData.whatsapp}
                                        onChange={handleChange}
                                        className={`w-full h-12 bg-black/30 border rounded-xl px-4 outline-none focus:ring-1 transition-all text-white
                                        ${errors.whatsapp ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-yellow-400 focus:ring-yellow-400'}`}
                                    />
                                    {errors.whatsapp && <p className="text-red-400 text-xs pl-1 mt-0.5">{errors.whatsapp}</p>}
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[10px] uppercase tracking-[2px] text-gray-300 ml-1">Correo Electrónico</label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        placeholder="correo@ejemplo.com" 
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full h-12 bg-black/30 border rounded-xl px-4 outline-none focus:ring-1 transition-all text-white
                                        ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-yellow-400 focus:ring-yellow-400'}`}
                                    />
                                    {errors.email && <p className="text-red-400 text-xs pl-1 mt-0.5">{errors.email}</p>}
                                </div>

                                {formError && (
                                    <div className="bg-red-500/20 border border-red-500/30 text-red-200 text-xs font-medium p-3 rounded-xl">
                                        ⚠️ {formError}
                                    </div>
                                )}

                                <button type="submit" className="mt-2 w-full h-14 bg-yellow-400 hover:bg-white text-black font-bold uppercase tracking-widest rounded-xl transition-all duration-300 transform active:scale-95 shadow-xl shadow-yellow-400/20">
                                    Solicitar Información
                                </button>

                                <div className="flex items-center justify-center gap-2 mt-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                    <p className="text-[11px] text-white/60">Asesores disponibles ahora</p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. CUERPO INFORMACIÓN */}
            <div className="bg-white relative z-30 shadow-[0_-20px_50px_rgba(255,255,255,1)]">
                <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 items-center">
                        <div className="overflow-hidden rounded-3xl shadow-2xl border-8 border-gray-50">
                            <img src={curso.imageUrl} alt={curso.title} className="w-full h-96 lg:h-[450px] object-cover" />
                        </div>

                        <div className="mt-10 lg:mt-0">
                            <h2 className="text-4xl font-bold text-gray-900 leading-tight">Programa de {curso.title} de Alto Rendimiento</h2>
                            <p className="mt-6 text-xl text-gray-600 leading-relaxed">{curso.description}</p>

                            <div className="mt-8 grid grid-cols-3 gap-4">
                                <div className="bg-gray-50 p-5 rounded-2xl text-center border border-gray-100 shadow-sm">
                                    <Clock className="mx-auto h-6 w-6 text-blue-600 mb-2" />
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Horario</p>
                                    <p className="text-sm font-bold text-gray-900 mt-1">{curso.stats.schedule}</p>
                                </div>
                                <div className="bg-gray-50 p-5 rounded-2xl text-center border border-gray-100 shadow-sm">
                                    <Users className="mx-auto h-6 w-6 text-blue-600 mb-2" />
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Cupo</p>
                                    <p className="text-sm font-bold text-gray-900 mt-1">{curso.stats.capacity}</p>
                                </div>
                                <div className="bg-gray-50 p-5 rounded-2xl text-center border border-gray-100 shadow-sm">
                                    <Calendar className="mx-auto h-6 w-6 text-blue-600 mb-2" />
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Ciclo</p>
                                    <p className="text-sm font-bold text-gray-900 mt-1">{curso.stats.cycle}</p>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">¿Qué obtendrás con nosotros?</h3>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {curso.benefits.map((benefit) => (
                                        <li key={benefit} className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100 transition-all hover:bg-blue-50">
                                            <CheckCircle2 className="h-6 w-6 text-emerald-500 shrink-0" />
                                            <span className="text-gray-700 font-medium">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link to="/#niveles" className="mt-12 inline-flex items-center gap-2 text-blue-700 font-bold hover:gap-4 transition-all uppercase text-sm tracking-widest">
                                ← Volver a la oferta educativa
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Banner */}
            <section className="relative w-full min-h-screen flex items-center justify-center bg-gray-100 overflow-hidden py-16">
                <div className="absolute inset-0 w-full h-full z-0">
                    <img src={banner} alt="escuela" className="w-full h-full object-cover brightness-[0.85]" />
                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/10 to-white" />
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto backdrop-blur-[2px] bg-white/40 p-8 rounded-3xl border border-white/40 shadow-sm">
                    <h1 className="text-4xl md:text-6xl font-light leading-tight text-gray-900">
                        Tu conocimiento
                    </h1>
                    <h2 className="text-5xl md:text-7xl font-semibold leading-tight text-gray-900 mt-2 font-berkshire">
                        es el camino al éxito
                    </h2>
                </div>
            </section>

            {/* Testimonios - DISEÑO DE SLIDER INFINITO */}
            <section className="bg-white py-20 overflow-hidden border-t border-gray-100">
                <div className="text-center mb-12 px-4">
                    <span className="text-blue-600 font-bold uppercase text-xs tracking-widest bg-blue-50 px-4 py-1.5 rounded-full inline-flex items-center gap-2">
                        <MessageSquare className="h-3.5 w-3.5" /> Experiencias Reales
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">Lo que dicen nuestros alumnos</h3>
                </div>

                <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-white after:to-transparent">
                    <div className="animate-slider px-4">
                        {[...testimonios, ...testimonios].map((t, idx) => (
                            <div 
                                key={idx} 
                                className="w-75 sm:w-100 shrink-0 bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-100 relative shadow-sm transition-all select-none"
                            >
                                <div className="flex gap-1 mb-4 text-amber-400">
                                    {[...Array(t.stars)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 fill-current" />
                                    ))}
                                </div>
                                <p className="text-gray-600 italic text-sm sm:text-base leading-relaxed mb-6">
                                    "{t.content}"
                                </p>
                                <div>
                                    <h5 className="font-bold text-gray-900 text-base">{t.name}</h5>
                                    <p className="text-sm text-gray-400">{t.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Llamado a la acción */}
            <section className="relative w-full py-24 text-white overflow-hidden px-4 bg-gray-950">
                <img 
                    src="https://plus.unsplash.com/premium_photo-1681487787308-52f293cd3bce?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Estudiantes en el EuroCentro" 
                    className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-60 brightness-100"
                />

                <div className="relative z-20 max-w-4xl mx-auto text-center">
                    <h4 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight text-white drop-shadow-md">
                        ¿Preparado para dar tu siguiente gran paso?
                    </h4>
                    <p className="text-gray-300 max-w-lg mx-auto mb-10 text-base md:text-lg font-light leading-relaxed drop-shadow-xs">
                        No dejes pasar más tiempo. Los grupos son reducidos para garantizar la calidad de enseñanza.
                    </p>
                    <button 
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-white text-black font-bold uppercase tracking-wider text-sm px-8 py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 shadow-xl shadow-yellow-400/20 group"
                    >
                        Separar mi clase muestra
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                </div>
            </section>
        </>
    );
};

export default DetallesIdioma;