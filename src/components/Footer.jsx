import React from 'react';
    import { motion } from 'framer-motion';
    import { Instagram, Linkedin } from 'lucide-react';

    const Footer = () => {
      return (
        <footer className="bg-primary text-base py-12 md:py-16"> {/* Usando primary e base */}
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-3 gap-8 items-center text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <p className="font-semibold text-lg text-base">Dr. Thiago Broggin Dutra Rodrigues</p> {/* Usando base */}
                <p className="text-sm text-base opacity-80">CRM-SP 217.505 | RQE 125228</p> {/* Usando base */}
                <p className="text-sm text-base opacity-80">Ortopedista Especialista em Pé e Tornozelo</p> {/* Usando base */}
                 <p className="mt-4 text-base opacity-90 italic">"Do diagnóstico à recuperação: cada passo importa."</p> {/* Usando base */}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }} 
                className="text-center"
              >
                <p className="font-semibold mb-2 text-lg text-base">Links Rápidos</p> {/* Usando base */}
                <ul className="space-y-1">
                  <li><a href="#services" className="hover:underline text-base opacity-80 hover:opacity-100 transition-opacity">Especialidades</a></li>
                  <li><a href="#timeline" className="hover:underline text-base opacity-80 hover:opacity-100 transition-opacity">Formação</a></li>
                  <li><a href="#testimonial" className="hover:underline text-base opacity-80 hover:opacity-100 transition-opacity">Depoimentos</a></li>
                  <li><a href="#contact" className="hover:underline text-base opacity-80 hover:opacity-100 transition-opacity">Contato</a></li>
                  <li><a href="#exclusive-protocol" className="hover:underline text-base opacity-80 hover:opacity-100 transition-opacity">Protocolo Exclusivo</a></li>
                  <li><a href="#blog" className="hover:underline text-base opacity-80 hover:opacity-100 transition-opacity">Blog</a></li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="flex justify-center md:justify-end space-x-4 mt-6 md:mt-0"
              >
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram do Dr. Thiago" className="text-base hover:opacity-75 transition-opacity"> {/* Usando base */}
                  <Instagram size={28} />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn do Dr. Thiago" className="text-base hover:opacity-75 transition-opacity"> {/* Usando base */}
                  <Linkedin size={28} />
                </a>
              </motion.div>
            </div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-center mt-10 pt-8 border-t border-base border-opacity-20 text-sm text-base opacity-70" /* Usando base */
            >
              <p>&copy; {new Date().getFullYear()} Dr. Thiago Broggin Dutra Rodrigues. Todos os direitos reservados.</p>
              <p>Desenvolvido com ❤️ por Hostinger Horizons</p>
            </motion.div>
          </div>
        </footer>
      );
    };

    export default Footer;