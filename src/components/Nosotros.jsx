import React from 'react';
import { Target, Eye, Heart, GraduationCap, Award, Users, BookOpen } from "lucide-react";
import { Link } from 'react-router-dom';

const Nosotros = () => {

    // Datos de la sección Conócenos para no repetir HTML a mano (Práctica de programador Jr)
    const pilaresInstitucionales = [
        {
            id: 1,
            titulo: "MISIÓN",
            subtitulo: "01 / PROPÓSITO",
            descripcion: "Brindar enseñanza de calidad que potencie las oportunidades académicas y laborales de nuestros estudiantes a través de dinámicas reales.",
            icono: <Target className="h-6 w-6 text-blue-600" />,
            bgColor: "bg-blue-100"
        },
        {
            id: 2,
            titulo: "VISIÓN",
            subtitulo: "02 / FUTURO",
            descripcion: "Ser referentes en innovación educativa y crecimiento profesional en nuestra región, conectando a más personas con el mundo.",
            icono: <Eye className="h-6 w-6 text-purple-600" />,
            bgColor: "bg-purple-100"
        },
        {
            id: 3,
            titulo: "VALORES",
            subtitulo: "03 / PILARES",
            descripcion: "Compromiso, respeto mutuo y excelencia en cada clase, garantizando un ambiente seguro y óptimo para el aprendizaje.",
            icono: <Heart className="h-6 w-6 text-rose-600" />,
            bgColor: "bg-rose-100"
        }
    ];

    // Datos de la metodología
    const pasosMetodologia = [
        {
            paso: "1",
            titulo: "Diagnóstico inicial",
            descripcion: "Evaluamos tus necesidades y diseñamos un plan que encaje con tus metas y nivel actual."
        },
        {
            paso: "2",
            titulo: "Clases prácticas",
            descripcion: "Conversación activa, ejercicios dinámicos y feedback inmediato para un progreso real."
        },
        {
            paso: "3",
            titulo: "Seguimiento constante",
            descripcion: "Monitoreamos tus avances y evaluamos tu rendimiento para que sigas creciendo sin estancarte."
        }
    ];

    return (
        <>
            <section className="relative py-24 overflow-hidden text-sm bg-gray-500">
                <img 
                    src="https://images.unsplash.com/photo-1705573383706-b8b1e5db637a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="EuroCentro Background" 
                    className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-100"
                />
                
                {/* Filtro oscuro para contraste y lectura de textos */}
                <div className="absolute inset-0 bg-black/50 backdrop-blur-xs z-10" />

                <div className="container relative z-20 mx-auto max-w-6xl px-4">
                    <h1 className="my-4 mb-6 text-center text-3xl font-extrabold lg:text-5xl text-white drop-shadow-md">
                        EuroCentro de Idiomas de México
                    </h1>
                    <p className="mx-auto mb-8 max-w-2xl text-center text-gray-200 lg:text-xl font-normal leading-relaxed drop-shadow-sm">
                        Enseñamos idiomas con métodos modernos, profesores certificados y atención personalizada.
                    </p>
                    <div className="flex justify-center">
                        <Link 
                            to="/"
                            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-bold transition-all bg-yellow-400 hover:bg-white text-black h-12 rounded-xl px-8 w-full sm:w-auto shadow-lg shadow-yellow-400/10 transform active:scale-95 text-center"
                        >
                            Inscríbete ahora
                        </Link>
                    </div>

                    {/* Tarjetas informativas superiores estilizadas para fondo oscuro */}
                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg">
                            <p className="text-3xl font-black text-yellow-400">+10</p>
                            <p className="text-xs font-semibold text-gray-300 mt-1 uppercase tracking-wider">Años de Experiencia</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg">
                            <p className="text-3xl font-black text-yellow-400">+5,000</p>
                            <p className="text-xs font-semibold text-gray-300 mt-1 uppercase tracking-wider">Alumnos Graduados</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg">
                            <p className="text-3xl font-black text-yellow-400">100%</p>
                            <p className="text-xs font-semibold text-gray-300 mt-1 uppercase tracking-wider">Docentes Certificados</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg">
                            <p className="text-3xl font-black text-yellow-400">3</p>
                            <p className="text-xs font-semibold text-gray-300 mt-1 uppercase tracking-wider">Idiomas Disponibles</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECCIÓN CARACTERÍSTICAS */}
            <section className="bg-white py-12 px-4">
                <div className="container mx-auto max-w-6xl grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <article className="rounded-2xl bg-gray-50 p-6 border border-gray-100 shadow-xs">
                        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#1211ab] mb-4">
                            <GraduationCap className="w-5 h-5" />
                        </div>
                        <h3 className="text-base font-bold text-gray-900">Programas flexibles</h3>
                        <p className="mt-2 text-xs text-gray-600 leading-relaxed">Cursos presenciales y online adaptados a tu ritmo y nivel.</p>
                    </article>
                    <article className="rounded-2xl bg-gray-50 p-6 border border-gray-100 shadow-xs">
                        <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 mb-4">
                            <Award className="w-5 h-5" />
                        </div>
                        <h3 className="text-base font-bold text-gray-900">Instructores certificados</h3>
                        <p className="mt-2 text-xs text-gray-600 leading-relaxed">Docentes nativos y expertos con experiencia en comunicación real.</p>
                    </article>
                    <article className="rounded-2xl bg-gray-50 p-6 border border-gray-100 shadow-xs">
                        <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600 mb-4">
                            <Users className="w-5 h-5" />
                        </div>
                        <h3 className="text-base font-bold text-gray-900">Aulas modernas</h3>
                        <p className="mt-2 text-xs text-gray-600 leading-relaxed">Ambientes cómodos, dinámicos y diseñados para aprender con confianza.</p>
                    </article>
                    <article className="rounded-2xl bg-gray-50 p-6 border border-gray-100 shadow-xs">
                        <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 mb-4">
                            <BookOpen className="w-5 h-5" />
                        </div>
                        <h3 className="text-base font-bold text-gray-900">Resultados medibles</h3>
                        <p className="mt-2 text-xs text-gray-600 leading-relaxed">Seguimiento cercano y evaluaciones constantes para progresar con claridad.</p>
                    </article>
                </div>
            </section>

            {/* CONÓCENOS */}
            <section className="bg-gray-50 py-16 px-4 border-t border-gray-100">
                <div className="container mx-auto max-w-6xl">
                    <div className="border-b border-gray-200 pb-6 mb-10">
                        <h2 className="text-2xl font-bold tracking-wider text-gray-800 text-center uppercase">
                            Conócenos
                        </h2>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-3">
                        {pilaresInstitucionales.map((item) => (
                            <div key={item.id} className="flex flex-col bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition duration-300">
                                <div className="flex items-center justify-between mb-4">
                                    <div className={`h-12 w-12 flex items-center justify-center rounded-xl ${item.bgColor}`}>
                                        {item.icono}
                                    </div>
                                    <span className="text-[10px] font-bold text-gray-400 tracking-wider">{item.subtitulo}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.titulo}</h3>
                                <p className="text-sm font-normal text-gray-600 leading-relaxed">{item.descripcion}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* METODOLOGÍA */}
            <section className="bg-white py-16 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="mx-auto max-w-3xl text-center mb-12">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1211ab]">Nuestra forma de trabajar</p>
                        <h2 className="mt-2 text-3xl font-extrabold text-gray-900">Metodología clara y efectiva</h2>
                        <p className="mt-3 text-sm text-gray-600">Un camino sencillo para aprender y avanzar con confianza en cada clase.</p>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-3">
                        {pasosMetodologia.map((m, index) => (
                            <article key={index} className="rounded-2xl bg-gray-50 p-6 border border-gray-100 shadow-xs">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1211ab]/10 text-[#1211ab] text-lg font-bold">
                                    {m.paso}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900">{m.titulo}</h3>
                                <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">{m.descripcion}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Nosotros;