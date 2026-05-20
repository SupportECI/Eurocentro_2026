import React, { useState } from 'react';
import Select from 'react-select';

const PAISES_LADAS = [
  { value: '+52', label: 'México (+52)', code: 'mx' },
  { value: '+54', label: 'Argentina (+54)', code: 'ar' },
  { value: '+591', label: 'Bolivia (+591)', code: 'bo' },
  { value: '+55', label: 'Brasil (+55)', code: 'br' },
  { value: '+56', label: 'Chile (+56)', code: 'cl' },
  { value: '+57', label: 'Colombia (+57)', code: 'co' },
  { value: '+506', label: 'Costa Rica (+506)', code: 'cr' },
  { value: '+53', label: 'Cuba (+53)', code: 'cu' },
  { value: '+593', label: 'Ecuador (+593)', code: 'ec' },
  { value: '+503', label: 'El Salvador (+503)', code: 'sv' },
  { value: '+502', label: 'Guatemala (+502)', code: 'gt' },
  { value: '+504', label: 'Honduras (+504)', code: 'hn' },
  { value: '+505', label: 'Nicaragua (+505)', code: 'ni' },
  { value: '+507', label: 'Panamá (+507)', code: 'pa' },
  { value: '+595', label: 'Paraguay (+595)', code: 'py' },
  { value: '+51', label: 'Perú (+51)', code: 'pe' },
  { value: '+1', label: 'USA / Canadá (+1)', code: 'us' }
];

const IDIOMAS = [
  { value: 'Inglés', label: '🇺🇸 Inglés' },
  { value: 'Francés', label: '🇫🇷 Francés' },
  { value: 'Italiano', label: '🇮🇹 Italiano' }
];

const PHONE_RULES = {
  mx: { length: 10 },
  ar: { length: 10 },
  us: { length: 10 },
  co: { length: 10 },
  pe: { length: 9 },
  cl: { length: 9 },
  br: { length: 11 },
  default: { min: 8, max: 12 }
};

const formatOptionLabel = (option) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
    <img
      src={`https://flagcdn.com/w40/${option.code}.png`}
      alt={option.label}
      style={{ width: '20px', height: '15px', objectFit: 'cover' }}
    />
    <span>{option.label}</span>
  </div>
);

const Hero = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    ladaInt: '+52',
    countryCode: 'mx',
    idiomaInteres: ''
  });

  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "telefono") {
      const numericValue = value.replace(/\D/g, '');
      const rules = PHONE_RULES[formData.countryCode] || PHONE_RULES.default;

      if (rules.length && numericValue.length > rules.length) return;

      setFormData({
        ...formData,
        telefono: numericValue
      });

      setErrors({ ...errors, telefono: null });
      return;
    }

    setFormData({
      ...formData,
      [name]: value
    });

    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.nombre.trim()) newErrors.nombre = true;
    if (!formData.apellido.trim()) newErrors.apellido = true;
    if (!formData.email.trim()) newErrors.email = true;
    if (!formData.telefono.trim()) newErrors.telefono = true;
    if (!formData.idiomaInteres) newErrors.idiomaInteres = true;

    const rules = PHONE_RULES[formData.countryCode] || PHONE_RULES.default;

    if (formData.telefono && rules.length && formData.telefono.length !== rules.length) {
      newErrors.telefono = true;
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      const campos = Object.keys(newErrors)
        .map(c => c.charAt(0).toUpperCase() + c.slice(1))
        .join(', ');

      setFormError(`Por favor completa: ${campos}`);
      return;
    }

    setFormError('');

    const mensaje = `Hola, me gustaría obtener información sobre Euro Centro, mis datos son:
Nombre: ${formData.nombre}
Apellido: ${formData.apellido}
Correo electrónico: ${formData.email}
Whatsapp: ${formData.ladaInt}${formData.telefono}
Idioma de interés: ${formData.idiomaInteres}`;

    const url = `https://api.whatsapp.com/send?phone=525535209725&text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
  };

  return (
    <section className="relative bg-gray-950 overflow-hidden px-6 py-6 md:py-24 flex items-center min-h-175 lg:min-h-200">
      <img 
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop" 
        alt="Estudiantes Eurocentro" 
        className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-60"
      />
      
      <div className="container relative z-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-9 gap-8 lg:gap-4 items-center">
        
        {/* TEXTOS PRINCIPALES CON CONTRASTE ALTO */}
        <div className="col-span-1 lg:col-span-5 space-y-6 px-4">
          <div className="inline-block bg-[#1211ab] text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-2 shadow-md">
            Cursos presenciales y online
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight drop-shadow-md">
            Aprende idiomas más <br className="hidden md:inline" />
            fácil y rápido con <br />
            <span className="text-yellow-400">Eurocentro</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-xl font-light">
            Domina el inglés, francés o italiano con instructores certificados y una metodología 100% práctica.
          </p>
        </div>

        {/* TARJETA DEL FORMULARIO */}
        <div className="col-span-1 lg:col-span-3 lg:col-start-7 mt-8 lg:mt-0">
          <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-white/10 relative">

            <div className="text-center mb-6">
              <h3 className="text-lg font-medium text-gray-500">
                Aprende un idioma con un <br/>
                <span className="text-[#1211ab] text-2xl sm:text-3xl font-black mt-1 block">Descuento Especial</span>
              </h3>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit} noValidate>

              <div className="grid grid-cols-2 gap-4">
                <input
                  name="nombre"
                  placeholder="Nombre(s) *"
                  value={formData.nombre}
                  onChange={handleChange}
                  className={`w-full border-b-2 py-2 px-1 transition-colors text-gray-900 outline-hidden text-sm
                  ${errors.nombre ? 'border-red-500' : 'border-gray-200 focus:border-[#1211ab]'}`}
                />

                <input
                  name="apellido"
                  placeholder="Apellido(s) *"
                  value={formData.apellido}
                  onChange={handleChange}
                  className={`w-full border-b-2 py-2 px-1 transition-colors text-gray-900 outline-hidden text-sm
                  ${errors.apellido ? 'border-red-500' : 'border-gray-200 focus:border-[#1211ab]'}`}
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Correo electrónico *"
                value={formData.email}
                onChange={handleChange}
                className={`w-full border-b-2 py-2 px-1 transition-colors text-gray-900 outline-hidden text-sm
                ${errors.email ? 'border-red-500' : 'border-gray-200 focus:border-[#1211ab]'}`}
              />

              <div className="space-y-1">
                <Select
                  options={PAISES_LADAS}
                  defaultValue={PAISES_LADAS[0]}
                  formatOptionLabel={formatOptionLabel}
                  menuPortalTarget={document.body}
                  menuPosition="fixed"
                  placeholder="Lada internacional"
                  styles={{
                    control: (base) => ({
                      ...base,
                      border: 'none',
                      boxShadow: 'none',
                      borderBottom: '2px solid #e5e7eb',
                      borderRadius: '0',
                      minHeight: '38px',
                      fontSize: '14px'
                    }),
                    menuPortal: (base) => ({ ...base, zIndex: 9999 })
                  }}
                  onChange={(selected) =>
                    setFormData({
                      ...formData,
                      ladaInt: selected.value,
                      countryCode: selected.code
                    })
                  }
                />
              </div>

              <input
                type="tel"
                name="telefono"
                placeholder="Teléfono (Celular) *"
                value={formData.telefono}
                onChange={handleChange}
                className={`w-full border-b-2 py-2 px-1 transition-colors text-gray-900 outline-hidden text-sm
                ${errors.telefono ? 'border-red-500' : 'border-gray-200 focus:border-[#1211ab]'}`}
              />

              <div className="space-y-1">
                <Select
                  options={IDIOMAS}
                  placeholder="Idioma de interés *"
                  menuPortalTarget={document.body}
                  menuPosition="fixed"
                  styles={{
                    control: (base) => ({
                      ...base,
                      border: 'none',
                      boxShadow: 'none',
                      borderBottom: errors.idiomaInteres ? '2px solid #ef4444' : '2px solid #e5e7eb',
                      borderRadius: '0',
                      minHeight: '38px',
                      fontSize: '14px'
                    }),
                    menuPortal: (base) => ({ ...base, zIndex: 9999 })
                  }}
                  onChange={(selected) =>
                    setFormData({ ...formData, idiomaInteres: selected.value })
                  }
                />
              </div>

              {formError && (
                <div className="flex items-center gap-2 text-red-500 text-xs font-semibold bg-red-50 p-2.5 rounded-lg border border-red-100">
                  ⚠️ {formError}
                </div>
              )}

              <button type="submit" className="w-full bg-[#1211ab] text-white font-bold py-3.5 rounded-xl hover:bg-blue-800 transition duration-300 transform active:scale-95 shadow-lg shadow-blue-700/20 text-sm uppercase tracking-wider mt-2">
                ¡Solicitar información!
              </button>

            </form>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;