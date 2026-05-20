import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { ArrowRight } from "lucide-react";
import { posts } from "../data/cursos.jsx";

const Education = () => {
  return (
    <div id="niveles" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center lg:text-left">
          <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">Nuestros Idiomas</h2>
          <p className="mt-4 text-gray-500">Cursos diseñados para cada etapa de aprendizaje.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <motion.article
              key={post.id}
              whileHover={{ y: -8 }}
              className='flex flex-col bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden'
            >
              <div className='relative h-48 overflow-hidden'>
                <img src={post.imageUrl} alt={post.title} className='w-full h-full object-cover' />
                <div className={`absolute top-3 left-3 rounded-lg px-3 py-1 text-xs font-bold ${post.theme.bg} ${post.theme.text} uppercase bg-white/90 backdrop-blur-sm shadow-sm`}>
                  {post.age}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{post.title}</h3>
                <p className="text-sm text-gray-600 mb-6">{post.description}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {post.quickInfo.map((info, idx) => (
                    <span key={idx} className={`flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold ${info.color}`}>
                      {info.icon} {info.text}
                    </span>
                  ))}
                </div>

                <div className="mt-auto">
                  <Link 
                    to={`/detalles/${post.id}`} 
                    className={`flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold text-white transition-all active:scale-95 ${post.theme.button}`}
                  >
                    Detalles del nivel <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;

{/*
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto rounded-t-4xl sm:rounded-3xl bg-white p-6 sm:p-8 shadow-2xl no-scrollbar"
            >
              <button onClick={() => setSelectedPost(null)} className="absolute right-4 top-4 p-2 text-gray-600 focus:outline-none">
                <X size={24} className="cursor-pointer" />
              </button>

              <div className="flex items-center gap-4 mb-6 pr-8">
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${selectedPost.theme.modalIcon}`}>
                  {selectedPost.icon}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{selectedPost.title}</h3>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
                {selectedPost.description}
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-3 border-b border-gray-100 pb-1">Beneficios del nivel</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                    {selectedPost.benefits.map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-3 border-b border-gray-100 pb-1">¿Qué incluye?</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                    {selectedPost.includes.map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <span className="text-red-600 font-bold text-sm">✓</span>
                        <span className="text-xs sm:text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              */}
{/* Stats en grid ajustable 
              <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-4">
                <div className="rounded-xl bg-gray-50 p-2 sm:p-3 text-center border border-gray-100">
                  <Clock className="h-4 w-4 mx-auto mb-1 text-gray-400" />
                  <p className="text-[8px] sm:text-[10px] font-bold text-gray-500 uppercase">Horario</p>
                  <p className="text-[10px] sm:text-xs font-bold text-slate-800">{selectedPost.stats.schedule}</p>
                </div>
                <div className="rounded-xl bg-gray-50 p-2 sm:p-3 text-center border border-gray-100">
                  <Users className="h-4 w-4 mx-auto mb-1 text-gray-400" />
                  <p className="text-[8px] sm:text-[10px] font-bold text-gray-500 uppercase">Cupo</p>
                  <p className="text-[10px] sm:text-xs font-bold text-slate-800">{selectedPost.stats.capacity}</p>
                </div>
                <div className="rounded-xl bg-gray-50 p-2 sm:p-3 text-center border border-gray-100">
                  <Calendar className="h-4 w-4 mx-auto mb-1 text-gray-400" />
                  <p className="text-[8px] sm:text-[10px] font-bold text-gray-500 uppercase">Ciclo</p>
                  <p className="text-[10px] sm:text-xs font-bold text-slate-800">{selectedPost.stats.cycle}</p>
                </div>
              </div>

              <div className="mt-8 mb-2 sm:mb-0">
                <a
                  href="https://wa.me/tunumerowhatsapp"
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-500 py-4 text-sm sm:text-base text-white font-bold shadow-lg transition-transform active:scale-95"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 48 48">
                    <path fill="#fff" d="M4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5c5.1,0,9.8,2,13.4,5.6C41,14.2,43,18.9,43,24	c0,10.5-8.5,19-19,19c0,0,0,0,0,0h0c-3.2,0-6.3-0.8-9.1-2.3L4.9,43.3z"></path><path fill="#fff" d="M4.9,43.8c-0.1,0-0.3-0.1-0.4-0.1c-0.1-0.1-0.2-0.3-0.1-0.5L7,33.5c-1.6-2.9-2.5-6.2-2.5-9.6	C4.5,13.2,13.3,4.5,24,4.5c5.2,0,10.1,2,13.8,5.7c3.7,3.7,5.7,8.6,5.7,13.8c0,10.7-8.7,19.5-19.5,19.5c-3.2,0-6.3-0.8-9.1-2.3	L5,43.8C5,43.8,4.9,43.8,4.9,43.8z"></path><path fill="#cfd8dc" d="M24,5c5.1,0,9.8,2,13.4,5.6C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19h0c-3.2,0-6.3-0.8-9.1-2.3L4.9,43.3	l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5 M24,43L24,43L24,43 M24,43L24,43L24,43 M24,4L24,4C13,4,4,13,4,24	c0,3.4,0.8,6.7,2.5,9.6L3.9,43c-0.1,0.3,0,0.7,0.3,1c0.2,0.2,0.4,0.3,0.7,0.3c0.1,0,0.2,0,0.3,0l9.7-2.5c2.8,1.5,6,2.2,9.2,2.2	c11,0,20-9,20-20c0-5.3-2.1-10.4-5.8-14.1C34.4,6.1,29.4,4,24,4L24,4z"></path><path fill="#40c351" d="M35.2,12.8c-3-3-6.9-4.6-11.2-4.6C15.3,8.2,8.2,15.3,8.2,24c0,3,0.8,5.9,2.4,8.4L11,33l-1.6,5.8l6-1.6l0.6,0.3	c2.4,1.4,5.2,2.2,8,2.2h0c8.7,0,15.8-7.1,15.8-15.8C39.8,19.8,38.2,15.8,35.2,12.8z"></path><path fill="#fff" fill-rule="evenodd" d="M19.3,16c-0.4-0.8-0.7-0.8-1.1-0.8c-0.3,0-0.6,0-0.9,0s-0.8,0.1-1.3,0.6c-0.4,0.5-1.7,1.6-1.7,4	s1.7,4.6,1.9,4.9s3.3,5.3,8.1,7.2c4,1.6,4.8,1.3,5.7,1.2c0.9-0.1,2.8-1.1,3.2-2.3c0.4-1.1,0.4-2.1,0.3-2.3c-0.1-0.2-0.4-0.3-0.9-0.6	s-2.8-1.4-3.2-1.5c-0.4-0.2-0.8-0.2-1.1,0.2c-0.3,0.5-1.2,1.5-1.5,1.9c-0.3,0.3-0.6,0.4-1,0.1c-0.5-0.2-2-0.7-3.8-2.4	c-1.4-1.3-2.4-2.8-2.6-3.3c-0.3-0.5,0-0.7,0.2-1c0.2-0.2,0.5-0.6,0.7-0.8c0.2-0.3,0.3-0.5,0.5-0.8c0.2-0.3,0.1-0.6,0-0.8	C20.6,19.3,19.7,17,19.3,16z" clip-rule="evenodd"></path>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      */}
