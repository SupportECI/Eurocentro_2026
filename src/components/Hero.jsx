import React, { useState } from 'react';

const Hero = () => {
  // 1. Estados para guardar los datos del usuario y los errores
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: ''
  });
  
  const [errors, setErrors] = useState({});

  // 2. Función que actualiza el estado cuando el usuario escribe
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Limpiamos el error de ese campo en específico cuando el usuario empieza a escribir
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  // 3. Función de Validación al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validaciones de campos vacíos
    if (!formData.nombre.trim()) newErrors.nombre = "Este campo es requerido.";
    if (!formData.apellido.trim()) newErrors.apellido = "Este campo es requerido.";
    if (!formData.email.trim()) newErrors.email = "Este campo es requerido.";
    if (!formData.telefono.trim()) newErrors.telefono = "Este campo es requerido.";

    setErrors(newErrors);

    // Si no hay errores, se simula el envío
    if (Object.keys(newErrors).length === 0) {
      console.log("Formulario válido. Datos a enviar:", formData);
      alert("¡Formulario validado y listo para enviar!");
    }
  };

  return (
    <section className="bg-slate-50 overflow-hidden px-6 py-12 md:py-16 relative">
      {/* Contenedor Principal (Grid) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-9 gap-8 lg:gap-4 items-center">

        {/* 2. Columna Central: Textos y Beneficios */}
        <div className="col-span-1 lg:col-span-4 space-y-6 z-10 px-4">
          <div className="inline-block bg-[#1211ab] text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-2 shadow-sm">
            Cursos presenciales y online
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
            Aprende idiomas más fácil y rápido con <br/>
            <span className="text-[#1211ab]">Eurocentro</span>
          </h1>

          <ul className="space-y-4 mt-8">
            {[
              'Clases con profesores certificados',
              'Método interactivo y dinámico',
              'Preparación para certificaciones oficiales'
            ].map((item, idx) => (
              <li key={idx} className="flex items-center text-lg text-gray-700 font-medium">
                <svg className="w-6 h-6 text-green-600 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Columna Derecha: Formulario de Captación */}
        <div className="col-span-1  lg:col-span-3 lg:col-start-7 z-10 mt-8 lg:mt-0">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 relative">
            
            <div className="text-center mb-8">
              <h3 className="text-xl font-medium text-gray-600">
                Aprende un idioma con un <br/>
                <span className="text-[#1211ab] text-3xl font-bold mt-1 block">Descuento Especial</span>
              </h3>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit} noValidate>
              
              <div className="grid grid-cols-2 gap-4">
                {/* Campo NOMBRE */}
                <div>
                  <input 
                    type="text" 
                    name="nombre"
                    placeholder="Nombre *" 
                    aria-label="Tu nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    aria-invalid={errors.nombre ? "true" : "false"}
                    aria-describedby={errors.nombre ? "error-nombre" : undefined}
                    className={`w-full border-b-2 py-2 px-1 focus:outline-none transition-colors text-gray-800 placeholder-gray-400 bg-transparent
                      ${errors.nombre ? 'border-red-600 focus:border-red-600' : 'border-gray-200 focus:border-[#002868]'}`} 
                  />
                  {errors.nombre && (
                    <p id="error-nombre" className="text-red-600 text-xs mt-1 flex items-center font-medium" role="alert">
                      <span aria-hidden="true" className="mr-1">⚠️</span> {errors.nombre}
                    </p>
                  )}
                </div>

                {/* Campo APELLIDO */}
                <div>
                  <input 
                    type="text" 
                    name="apellido"
                    placeholder="Apellido *" 
                    aria-label="Tu apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    aria-invalid={errors.apellido ? "true" : "false"}
                    aria-describedby={errors.apellido ? "error-apellido" : undefined}
                    className={`w-full border-b-2 py-2 px-1 focus:outline-none transition-colors text-gray-800 placeholder-gray-400 bg-transparent
                      ${errors.apellido ? 'border-red-600 focus:border-red-600' : 'border-gray-200 focus:border-[#002868]'}`} 
                  />
                  {errors.apellido && (
                    <p id="error-apellido" className="text-red-600 text-xs mt-1 flex items-center font-medium" role="alert">
                      <span aria-hidden="true" className="mr-1">⚠️</span> {errors.apellido}
                    </p>
                  )}
                </div>
              </div>
              
              {/* Campo EMAIL */}
              <div>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Correo electrónico *" 
                  aria-label="Tu correo electrónico"
                  value={formData.email}
                  onChange={handleChange}
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby={errors.email ? "error-email" : undefined}
                  className={`w-full border-b-2 py-2 px-1 focus:outline-none transition-colors text-gray-800 placeholder-gray-400 bg-transparent
                    ${errors.email ? 'border-red-600 focus:border-red-600' : 'border-gray-200 focus:border-[#002868]'}`} 
                />
                {errors.email && (
                  <p id="error-email" className="text-red-600 text-xs mt-1 flex items-center font-medium" role="alert">
                    <span aria-hidden="true" className="mr-1">⚠️</span> {errors.email}
                  </p>
                )}
              </div>

              {/* País */}
              <div>
                <select 
                  aria-label="Selecciona tu país"
                  className="w-full border-b-2 border-gray-200 py-2 px-1 focus:outline-none focus:border-[#002868] text-gray-500 bg-transparent cursor-pointer"
                >
                  <option value="MX">México</option>
                  <option value="OT">Otro país</option>
                </select>
              </div>

              {/* Campo TELÉFONO */}
              <div>
                <input 
                  type="tel" 
                  name="telefono"
                  placeholder="Teléfono (Celular) *" 
                  aria-label="Tu teléfono celular"
                  value={formData.telefono}
                  onChange={handleChange}
                  aria-invalid={errors.telefono ? "true" : "false"}
                  aria-describedby={errors.telefono ? "error-telefono" : undefined}
                  className={`w-full border-b-2 py-2 px-1 focus:outline-none transition-colors text-gray-800 placeholder-gray-400 bg-transparent
                    ${errors.telefono ? 'border-red-600 focus:border-red-600' : 'border-gray-200 focus:border-[#002868]'}`} 
                />
                {errors.telefono && (
                  <p id="error-telefono" className="text-red-600 text-xs mt-1 flex items-center font-medium" role="alert">
                    <span aria-hidden="true" className="mr-1">⚠️</span> {errors.telefono}
                  </p>
                )}
              </div>

              {/* Botón CTA */}
              <button 
                type="submit"
                className="w-full bg-[#1211ab] text-white font-bold text-lg py-3.5 rounded-md hover:bg-blue-800 transition-colors mt-6 shadow-md hover:shadow-lg"
              >
                ¡Solicitar información!
              </button>
              
              <p className="text-[11px] text-gray-500 text-center mt-4 leading-tight">
                Al enviar este formulario aceptas nuestros términos y políticas de privacidad.
              </p>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;