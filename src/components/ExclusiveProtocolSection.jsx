import React from 'react';
    import { motion } from 'framer-motion';
    import { ShieldCheck, Stethoscope, Zap } from 'lucide-react'; // Zap para reabilitação ativa

    const ExclusiveProtocolSection = () => {
      return (
        <section id="exclusive-protocol" className="py-16 md:py-24 bg-azul-petroleo text-branco-gelo">
          <div className="container mx-auto px-6 md:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <ShieldCheck className="w-12 h-12 md:w-16 md:h-16 text-verde-salvia mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Protocolo Exclusivo de Cuidado</h2>
              <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto opacity-90">
                Minha abordagem integra consulta ortopédica detalhada, avaliação da pisada com protocolo exclusivo de exame biomecânico, confecção de palmilhas personalizadas (quando indicado) e um plano de reabilitação ativa e individualizado para sua total recuperação.
              </p>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <motion.div 
                  initial={{ opacity:0, scale:0.8}} 
                  whileInView={{ opacity:1, scale:1}} 
                  transition={{duration: 0.5, delay: 0.2}}
                  className="flex flex-col items-center p-6 bg-branco-gelo bg-opacity-10 rounded-lg"
                >
                  <Stethoscope size={40} className="text-verde-salvia mb-3"/>
                  <h3 className="font-semibold text-xl mb-2">Consulta Detalhada</h3>
                  <p className="text-sm opacity-80">Análise completa do seu histórico e queixas.</p>
                </motion.div>
                <motion.div 
                  initial={{ opacity:0, scale:0.8}} 
                  whileInView={{ opacity:1, scale:1}} 
                  transition={{duration: 0.5, delay: 0.4}}
                  className="flex flex-col items-center p-6 bg-branco-gelo bg-opacity-10 rounded-lg"
                >
                  <Footprints className="w-10 h-10 text-verde-salvia mb-3" />
                  <h3 className="font-semibold text-xl mb-2">Exame Biomecânico</h3>
                  <p className="text-sm opacity-80">Avaliação precisa da sua pisada e movimento.</p>
                </motion.div>
                <motion.div 
                  initial={{ opacity:0, scale:0.8}} 
                  whileInView={{ opacity:1, scale:1}} 
                  transition={{duration: 0.5, delay: 0.6}}
                  className="flex flex-col items-center p-6 bg-branco-gelo bg-opacity-10 rounded-lg"
                >
                  <Zap size={40} className="text-verde-salvia mb-3"/>
                  <h3 className="font-semibold text-xl mb-2">Reabilitação Ativa</h3>
                  <p className="text-sm opacity-80">Plano personalizado para sua recuperação funcional.</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      );
    };
    
    // Adicionando o ícone Footprints manualmente se não estiver disponível em lucide-react como esperado
    const Footprints = (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M4 16.737A4.002 4.002 0 0 1 6.023 13h0a4.002 4.002 0 0 1 3.186 1.652l.252.38a4 4 0 0 0 6.376-.006l.252-.38A4.002 4.002 0 0 1 19.277 13h0a4.002 4.002 0 0 1 2.163 3.737L20.5 21H3.5Z"/>
        <path d="M16 12.38A4.002 4.002 0 0 1 17.127 8h0a4.002 4.002 0 0 1 3.451 2.38l.207.343a4 4 0 0 0 5.899-.04L22.5 8H19"/>
        <path d="M4.5 12H8a4 4 0 0 0 3.476-2.062L12.5 8"/>
        <path d="M10.723 8A4.002 4.002 0 0 1 8.873 4.38h0a4.002 4.002 0 0 1-1.222-3.031L7.5 0"/>
        <path d="M17.5 0l-.151 1.349A4.002 4.002 0 0 1 15.127 4h0a4.002 4.002 0 0 1-2.404 3.516"/>
      </svg>
    );

    export default ExclusiveProtocolSection;