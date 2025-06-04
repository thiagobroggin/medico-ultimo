import React from 'react';
    import { motion } from 'framer-motion';
    import { Footprints as Foot, Activity, UserCheck, ShieldCheck } from 'lucide-react'; 

    const services = [
      {
        icon: <Foot size={48} className="text-primary mb-4" />,
        title: "Dor nos Pés e Tornozelos",
        description: "Tratamento especializado para fascite plantar, esporão de calcâneo, joanetes, tendinites. Palmilhas personalizadas, cirurgias minimamente invasivas e reabilitação ativa.",
        imageAlt: "Mulher com expressão de alívio ao segurar o pé, indicando conforto no calçado",
        imagePlaceholderText: "Pés recebendo cuidado e atenção"
      },
      {
        icon: <Activity size={48} className="text-primary mb-4" />,
        title: "Atletas e Corredores",
        description: "Foco em lesões esportivas, prevenção, otimização de performance e retorno seguro às atividades. Palmilhas personalizadas, cirurgias minimamente invasivas e reabilitação ativa.",
        imageAlt: "Corredor amador sorrindo e correndo em uma trilha, usando tênis esportivo adequado",
        imagePlaceholderText: "Atleta em movimento com tênis de corrida"
      },
      {
        icon: <ShieldCheck size={48} className="text-primary mb-4" />, // Ícone atualizado
        title: "Ortopedia Pediátrica", 
        description: "Crescimento saudável vai muito além dos pés. Acompanhamento ortopédico completo para joelhos, coluna, marcha, postura e pisada em crianças e adolescentes.",
        imageAlt: "Pés de criança sendo examinados cuidadosamente por um ortopedista pediátrico",
        imagePlaceholderText: "Cuidado especializado com pés infantis"
      },
    ];

    const cardVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.2,
          duration: 0.6,
          ease: "easeOut"
        }
      })
    };

    const ServicesHighlight = () => {
      return (
        <section id="services" className="py-16 md:py-24 bg-secondary"> {/* Usando secondary da nova paleta */}
          <div className="container mx-auto px-6 md:px-12">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary"
            >
              Como posso te ajudar?
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="bg-base shadow-md rounded-2xl p-6 hover:shadow-xl transition flex flex-col items-center text-center" // Padronizado bg-base e classes
                >
                  <div className="w-full h-56 mb-6 rounded-lg overflow-hidden bg-gray-200"> {/* Aumentado altura para h-56 */}
                    <img  className="w-full h-full object-cover" alt={service.imageAlt} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                  </div>
                  {service.icon}
                  <h3 className="text-xl font-semibold mb-3 text-primary">{service.title}</h3>
                  <p className="text-text text-sm leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      );
    };

    export default ServicesHighlight;