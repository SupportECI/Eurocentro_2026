import React from "react";
import { Globe, Sparkles, Monitor, ArrowRight } from "lucide-react";

const Card = () => {
    // Array con la información estructurada para evitar repetir código innecesario
    const caracteristicas = [
        {
            id: 1,
            titulo: "Profesores internacionales",
            descripcion: "Aprende con docentes nativos y certificados que entienden los retos de dominar un idioma de forma natural.",
            icono: <Globe className="w-5 h-5 text-white" />
        },
        {
            id: 2,
            titulo: "Plataformas innovadoras",
            descripcion: "Accede a herramientas y materiales interactivos diseñados para reforzar tu aprendizaje fuera del aula.",
            icono: <Sparkles className="w-5 h-5 text-white" />
        },
        {
            id: 3,
            titulo: "Clases en vivo",
            descripcion: "Sesiones dinámicas en tiempo real donde la prioridad es la conversación activa y la retroalimentación inmediata.",
            icono: <Monitor className="w-5 h-5 text-white" />
        }
    ];

    return (
        <section className="py-16 bg-slate-50/50 px-4">
            <div className="container mx-auto max-w-6xl">
                {/* Título de la sección */}
                <div className="mb-10">
                    <h2 className="text-center font-extrabold text-2xl md:text-4xl text-gray-900 tracking-tight">
                        La mejor manera de aprender un idioma
                    </h2>
                    <p className="text-center text-gray-500 text-sm mt-3 max-w-md mx-auto">
                        Descubre los pilares que hacen de nuestra metodología la opción más rápida y efectiva.
                    </p>
                </div>
                
                {/* Contenedor de las Tarjetas */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center mt-10">
                    {caracteristicas.map((item) => (
                        <div 
                            key={item.id}
                            className="max-w-sm w-full bg-white border border-gray-100 rounded-2xl p-8 flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                        >
                            <div>
                                {/* Encabezado de la tarjeta con su icono redondo */}
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-xl bg-[#1211ab] shadow-sm shrink-0">
                                        {item.icono}
                                    </div>
                                    <h3 className="text-gray-900 text-lg font-bold tracking-tight">
                                        {item.titulo}
                                    </h3>
                                </div>
                                
                                {/* Descripción */}
                                <p className="leading-relaxed text-sm text-gray-600 font-light">
                                    {item.descripcion}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Card;