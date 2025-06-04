import React from 'react';
    import { motion } from 'framer-motion';
    import { Home, HeartHandshake } from 'lucide-react';

    const WelcomeSection = () => {
      return (
        <section className="py-12 md:py-20 bg-secondary bg-opacity-50"> {/* Usando secondary */}
          <div className="container mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="bg-base p-8 md:p-10 rounded-xl shadow-lg flex flex-col md:flex-row items-center text-center md:text-left" /* Usando base */
            >
              <HeartHandshake className="w-12 h-12 md:w-16 md:h-16 text-primary mb-6 md:mb-0 md:mr-8 flex-shrink-0" /> {/* Usando primary */}
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-primary"> {/* Usando primary */}
                  Acolhimento e Expertise na Clínica Dutra Rodrigues
                </h2>
                <p className="text-text md:text-lg leading-relaxed"> {/* Usando text */}
                  Atendimentos realizados na Clínica Dutra Rodrigues, espaço multidisciplinar fundado por minha família. Aqui, alio o cuidado ortopédico especializado à tradição de acolhimento da pediatria familiar.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      );
    };

    export default WelcomeSection;