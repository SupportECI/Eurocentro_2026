import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Certicates from "./components/Certificates";

export default function App() {
  return(
    <div className="font-sans min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Certicates />
    </div>
  )
}