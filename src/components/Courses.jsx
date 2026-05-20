import { useState } from "react";
import { Container } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";

const info = [
    {
        "id": "transpo",
        "label": "Logística & Transporte",
        "title": "Technical English for Logistics",
        "img": "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=600",
        "description": "Un programa diseñado para la precisión comunicativa en el sector del transporte internacional. Domine la terminología técnica necesaria para operaciones globales sin fricciones.",
        "list": [
            "Gestión de suministros",
            "Protocolos aduaneros",
            "Nomenclatura técnica"
        ],
        "color": "#1e293b", // Slate 800 (Elegante)
        "borderColor": "#e2e8f0",
    },
    {
        "id": "self",
        "label": "Certificación Avanzada",
        "title": "Official Proficiency Program",
        "img": "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600",
        "description": "Alcance el máximo nivel de competencia lingüística. Nuestro enfoque académico garantiza no solo la fluidez, sino el reconocimiento internacional de sus habilidades.",
        "list": [
            "TOEFL / IELTS Focus",
            "Academic Writing",
            "Advanced Rhetoric"
        ],
        "color": "#1211ab", 
        "borderColor": "#e2e8f0",
    }
]

const Courses = () => {
    const [activeTab, setActiveTab] = useState(info[0].id);
    const activeContent = info.find((tab) => tab.id === activeTab);

    return (
        <section className="py-20 bg-slate-50">
            <Container>
                <div className="max-w-5xl mx-auto">
                    
                    <div className="text-center mb-16">
                        <span className="text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">Oferta Académica</span>
                        <h1 className="text-4xl md:text-5xl font-light text-slate-900 mt-4 tracking-tight">
                            Especialización <span className="font-serif italic">y</span> Fluidez
                        </h1>
                    </div>

                    {/* Navegación de Tabs Minimalista */}
                    <div className="flex justify-center mb-16">
                        <div className="flex p-1 bg-white border border-slate-200 rounded-xl shadow-sm">
                            {info.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`relative px-8 py-3 rounded-lg text-sm font-medium transition-all duration-500 z-10 ${
                                        activeTab === tab.id ? "text-white" : "text-slate-500 hover:text-slate-900"
                                    }`}
                                >
                                    <span className="relative z-20">{tab.label}</span>
                                    {activeTab === tab.id && (
                                        <motion.div
                                            layoutId="activeTabBg"
                                            className="absolute inset-0 z-10 rounded-lg shadow-lg"
                                            style={{ backgroundColor: tab.color }}
                                            transition={{ type: "spring", stiffness: 200, damping: 25 }}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Contenedor de Contenido Estilo Editorial */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4 }}
                            className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-slate-200"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2">

                                {/* Columna de Imagen: Ocupa todo el alto en desktop */}
                                <div className="h-[300px] lg:h-full relative overflow-hidden">
                                    <motion.img
                                        initial={{ scale: 1.1 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 1.5 }}
                                        src={activeContent.img}
                                        alt={activeContent.title}
                                        className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply"></div>
                                </div>

                                {/* Columna de Texto */}
                                <div className="p-10 md:p-14 flex flex-col justify-center">
                                    <h2 className="text-3xl font-light text-slate-900 mb-6 tracking-tight">
                                        {activeContent.title}
                                    </h2>

                                    <p className="text-slate-500 text-lg leading-relaxed mb-10 font-light">
                                        {activeContent.description}
                                    </p>

                                    <div className="grid grid-cols-1 gap-4 mb-10">
                                        {activeContent.list.map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-4 group">
                                                <div 
                                                    className="w-1.5 h-1.5 rounded-full transition-all duration-300 group-hover:scale-150" 
                                                    style={{ backgroundColor: activeContent.color }}
                                                />
                                                <span className="text-slate-600 font-medium tracking-wide text-sm uppercase">
                                                    {item}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-4">
                                        <a
                                            href="/moreinfo"
                                            className="inline-flex items-center gap-4 text-sm font-bold tracking-widest uppercase pb-2 border-b-2 transition-all hover:gap-6"
                                            style={{ 
                                                color: activeContent.color,
                                                borderColor: activeContent.color 
                                            }}
                                        >
                                            Consultar Programa
                                            <svg width="20" height="10" viewBox="0 0 25 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18 1L24 7L18 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M1 7H24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </Container>
        </section>
    );
}

export default Courses;