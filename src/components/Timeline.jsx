import React from 'react';
    import { motion } from 'framer-motion';
    import { GraduationCap, Briefcase, Stethoscope, Footprints as Foot, Home } from 'lucide-react';

    const timelineEvents = [
      {
        icon: <GraduationCap className="w-8 h-8 text-base" />, // Cor do ícone para text-base (branco/claro)
        title: "Dupla Formação Acadêmica",
        description: "Graduado em Medicina e também Bacharel em Direito, unindo conhecimento técnico e visão humanística.",
        bgColor: "bg-primary",
      },
      {
        icon: <Stethoscope className="w-8 h-8 text-base" />,
        title: "Especialização em Ortopedia",
        description: "Residência Médica em Ortopedia e Traumatologia pela Santa Casa de Misericórdia de São Paulo.",
        bgColor: "bg-primary bg-opacity-90", // Leve variação de opacidade
      },
      {
        icon: <Foot className="w-8 h-8 text-base" />,
        title: "Subespecialização em Pé e Tornozelo",
        description: "Aprofundamento e expertise em Cirurgia do Pé e Tornozelo pela Universidade de São Paulo (USP).",
        bgColor: "bg-primary bg-opacity-80",
      },
      {
        icon: <Briefcase className="w-8 h-8 text-base" />,
        title: "Atuação em Hospitais de Referência",
        description: "Experiência consolidada em hospitais renomados como BP - A Beneficência Portuguesa, Albert Einstein, Santa Catarina e Sírio-Libanês.",
        bgColor: "bg-primary bg-opacity-70",
      },
      {
        icon: <Home className="w-8 h-8 text-base" />,
        title: "Clínica Atual - Dutra Rodrigues",
        description: "Atuação particular com foco em atendimento humanizado, diagnóstico preciso e tratamento individualizado na Clínica Dutra Rodrigues.",
        bgColor: "bg-primary bg-opacity-60",
      },
    ];
    
    const Timeline = () => {
      return (
        <section id="timeline" className="py-16 md:py-24 bg-base"> {/* Usando base */}
          <div className="container mx-auto px-6 md:px-12">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary" /* Usando primary */
            >
              Minha Trajetória Profissional
            </motion.h2>
            <div className="relative wrap overflow-hidden p-2 md:p-10 h-full">
              <div className="border-2-2 absolute border-opacity-20 h-full border" style={{left: '50%', borderColor: 'hsl(var(--primary))', borderStyle: 'solid', borderWidth: '2px'}}></div>
              {timelineEvents.map((event, index) => (
                <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse left-timeline' : 'right-timeline'}`}>
                  <div className="order-1 w-5/12"></div>
                  <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-12 h-12 md:w-16 md:h-16 rounded-full"> {/* Usando primary */}
                     <div className={`mx-auto`}>
                       {React.cloneElement(event.icon, { className: "w-6 h-6 md:w-8 md:h-8 text-base"})} {/* Ícone com text-base */}
                     </div>
                  </div>
                  <motion.div 
                    className={`order-1 ${event.bgColor} rounded-lg shadow-xl w-5/12 px-4 py-3 md:px-6 md:py-4`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h3 className="mb-1 md:mb-2 font-bold text-base text-md md:text-lg">{event.title}</h3> {/* Texto do título em text-base */}
                    <p className="text-xs md:text-sm leading-snug tracking-wide text-base text-opacity-90">{event.description}</p> {/* Texto da descrição em text-base */}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    };

    export default Timeline;