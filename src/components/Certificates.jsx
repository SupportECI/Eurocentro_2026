import React from "react";

const Certificates = () => {
    const certifications = [
        { name: "SEP", src: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/032014/sep_0.jpg?itok=hEd1iGOG" },
        { name: "TOEIC", src: "https://media.istockphoto.com/id/1394964114/es/vector/examen-toeic-de-ingl%C3%A9s-para-el-icono-del-s%C3%ADmbolo-de-comunicaci%C3%B3n-internacional.jpg?s=612x612&w=0&k=20&c=iYuhnZO4pZRcdkiZGw0eVaQc4cEhCWO5PsJT9Vr9U9w=" },
        { name: "Cambridge", src: "https://logodownload.org/wp-content/uploads/2021/04/university-of-cambridge-logo-0.png" },
        { name: "CENNI", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjoW4_mQt644pzuw06j1DGEc4wONaqBv_byQ&s" },
    ];

    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="container mx-auto mb-10">
                <h2 className="text-3xl font-bold text-center text-gray-800">
                    Nuestras Certificaciones
                </h2>
                <p className="text-center text-gray-500 mt-2">Instituciones que avalan nuestro método</p>
            </div>

            {/* Contenedor Principal del Slider */}
            <div className="relative flex overflow-hidden border-y border-gray-100 py-10">
                {/* Degradado en los bordes para suavizar la entrada/salida */}
                <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10"></div>
                <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10"></div>

                {/* Grupo 1 de Animación */}
                <ul className="flex items-center justify-center animate-infinite-scroll flex-none gap-16 px-8">
                    {certifications.map((cert, index) => (
                        <li key={index} className="flex-none">
                            <img 
                                src={cert.src} 
                                alt={cert.name} 
                                className="h-14 md:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" 
                            />
                        </li>
                    ))}
                </ul>

                {/* Grupo 2 (Duplicado idéntico para el efecto infinito) */}
                <ul className="flex items-center justify-center animate-infinite-scroll flex-none gap-16 px-8" aria-hidden="true">
                    {certifications.map((cert, index) => (
                        <li key={`dup-${index}`} className="flex-none">
                            <img 
                                src={cert.src} 
                                alt={cert.name} 
                                className="h-14 md:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" 
                            />
                        </li>
                    ))}
                </ul>

                <ul className="flex items-center justify-center animate-infinite-scroll flex-none gap-16 px-8" aria-hidden="true">
                    {certifications.map((cert, index) => (
                        <li key={`dup-${index}`} className="flex-none">
                            <img 
                                src={cert.src} 
                                alt={cert.name} 
                                className="h-14 md:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" 
                            />
                        </li>
                    ))}
                </ul>

                <ul className="flex items-center justify-center animate-infinite-scroll flex-none gap-16 px-8" aria-hidden="true">
                    {certifications.map((cert, index) => (
                        <li key={`dup-${index}`} className="flex-none">
                            <img 
                                src={cert.src} 
                                alt={cert.name} 
                                className="h-14 md:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" 
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Certificates;