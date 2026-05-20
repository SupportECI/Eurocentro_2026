import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Certicates from "./components/Certificates";
import Card from "./components/Card";
import Education from "./components/Education";
import Courses from "./components/Courses";
import Testimonios from "./components/Testimony";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import FAQ from "./components/FAQ";
import Page404 from "./components/Page404";
import DetallesIdioma from "./components/DetallesIdiomas";
import Nosotros from "./components/Nosotros";
import BotonesContacto from "./components/BotonesContacto";

export default function App() {
  const Home = () => (
    <>
      <Hero />
      <Certicates />
      <Card />
      <Education />
      <Courses />
      <FAQ />
    </>
  );
  return (
    <Router>
      <ScrollToTop />
      <div className="font-sans min-h-screen bg-white">
        <Navbar />
        <BotonesContacto />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/testimonios" element={<Testimonios />} />

          <Route path="/nosotros" element={<Nosotros />} />

          <Route path="*" element={<Page404 />} />

          <Route path="/detalles/:id" element={<DetallesIdioma />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}