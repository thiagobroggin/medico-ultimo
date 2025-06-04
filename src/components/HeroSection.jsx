
import React from "react";
import fotoMedico from "/public/foto-medico.webp";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 bg-gradient-to-b from-white to-gray-100 text-center">
      <div className="container mx-auto px-4">
        <img
          src={fotoMedico}
          alt="Dr. Thiago Broggin Dutra Rodrigues"
          className="mx-auto rounded-xl shadow-md w-52 md:w-64 h-auto mb-6 object-cover"
        />
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-2">
          Ortopedia de precisão para quem vive em movimento
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Atendimento especializado em pé e tornozelo com foco em conforto, funcionalidade e retorno às atividades.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
