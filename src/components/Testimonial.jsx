import React from 'react';
    import { Button } from '@/components/ui/button';
    import { motion } from 'framer-motion';
    import { Quote } from 'lucide-react';

    const testimonials = [
      {
        quote: "Depois de anos sofrendo com dores no pé, o Dr. Thiago foi o único que resolveu meu problema. Atendimento humano e resultado incrível. Voltei a caminhar sem dor!",
        name: "Maria S.",
        details: "45 anos, São Paulo",
        image: true, 
        imagePlaceholder: "Foto de paciente Maria S. sorrindo"
      },
      {
        quote: "Procurei o Dr. Thiago para tratar uma lesão no tornozelo que me impedia de correr. Com o tratamento e as orientações, voltei mais forte e confiante!",
        name: "João P.",
        details: "32 anos, Corredor Amador, Campinas",
        image: false,
        imagePlaceholder: ""
      },
      {
        quote: "Meu filho tinha o pé chato e estávamos preocupados. O Dr. Thiago nos tranquilizou e indicou o melhor tratamento. Hoje ele brinca e corre normalmente.",
        name: "Ana L.",
        details: "Mãe do Lucas, 7 anos, Santo André",
        image: true,
        imagePlaceholder: "Foto da paciente Ana L. com seu filho Lucas"
      },
    ];

    const Testimonial = () => {
      const [currentIndex, setCurrentIndex] = React.useState(0);

      const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      };

      const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
      };

      return (
        <section id="testimonial" className="py-16 md:py-24 bg-secondary"> {/* Usando secondary */}
          <div className="container mx-auto px-6 md:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <Quote className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto mb-6" /> {/* Usando primary */}
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Histórias que Inspiram</h2> {/* Usando primary */}
              
              <div className="relative max-w-3xl mx-auto bg-base p-8 md:p-12 rounded-xl shadow-xl mb-10 min-h-[300px] md:min-h-[280px] flex flex-col justify-center"> {/* Usando base */}
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: index === currentIndex ? 1 : 0, x: index === currentIndex ? 0 : (index > currentIndex ? 50 : -50) }}
                    transition={{ duration: 0.5 }}
                    className={`absolute inset-0 p-8 md:p-12 flex flex-col items-center justify-center ${index === currentIndex ? 'relative' : 'hidden'}`}
                  >
                    {testimonial.image && (
                       <div className="mb-4 w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-md border-2 border-accent"> {/* Usando accent */}
                        <img   
                            className="object-cover w-full h-full" 
                            alt={`Paciente ${testimonial.name}`} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                       </div>
                    )}
                    <p className="text-lg md:text-xl italic text-text mb-4"> {/* Usando text */}
                      "{testimonial.quote}"
                    </p>
                    <p className="font-semibold text-primary text-md">- {testimonial.name}</p> {/* Usando primary */}
                    <p className="text-sm text-text opacity-80">{testimonial.details}</p> {/* Usando text */}
                  </motion.div>
                ))}
              </div>

              <div className="flex justify-center space-x-4 mb-10">
                <Button onClick={prevTestimonial} variant="outline" className="border-primary text-primary hover:bg-primary hover:text-base">Anterior</Button> {/* Usando primary e base */}
                <Button onClick={nextTestimonial} variant="outline" className="border-primary text-primary hover:bg-primary hover:text-base">Próximo</Button> {/* Usando primary e base */}
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary text-primary hover:bg-accent hover:text-text hover:border-accent transition-colors duration-300 text-lg px-8 py-3" /* Usando primary, accent, text */
                  onClick={() => alert("Em breve: mais histórias de sucesso!")} 
                >
                  Ver mais histórias
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      );
    };

    export default Testimonial;