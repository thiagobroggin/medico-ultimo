
import React from "react";

const ClinicLocation = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Localização
        </h3>
        <div className="w-full h-96 shadow-lg rounded-xl overflow-hidden">
          <iframe
            title="Localização da Clínica Dutra Rodrigues"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.8654272781854!2d-46.65810548502207!3d-23.574099784673825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c9f1e7bf6f%3A0xf6c3f1b4a0b2e77f!2sCl%C3%ADnica%20Dutra%20Rodrigues!5e0!3m2!1spt-BR!2sbr!4v1717444500000!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ClinicLocation;
